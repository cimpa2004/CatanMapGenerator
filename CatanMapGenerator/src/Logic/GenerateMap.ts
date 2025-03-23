import { generateTiles } from "./GenerateTiles";
import { getNeighboursFromIndex } from "./getNeighboursFromIndex";
import { placeNumbers } from "./placeNumbers";
import { MapTile } from "./Tiles/MapTile";

//Singleton class to manage map generation
export class MapGenerator {
    private mapTiles: MapTile[] = [];
    private static instance: MapGenerator = null;
    private clearMap: MapTile[] = Array.from({ length: 19 }, () => {
        const tile = new MapTile();
        tile.setType("Desert");
        return tile;
    });

    public static getInstance() {
        if (MapGenerator.instance === null) {
            MapGenerator.instance = new MapGenerator();
        }
        return MapGenerator.instance;
    }
    
    private remainingFieldNumber = fillMaxFieldNumber();

    private setNeigbours(){
        for (let i = 0; i < 19; i++) {
            this.mapTiles.push(new MapTile());
            this.mapTiles[i].setIndex(i);
            this.mapTiles[i].setNeighboursIndexes(getNeighboursFromIndex(i));
        }
    }
    private readonly hexTypes = ["Desert", "Forest", "Mountain", "Field", "Hill", "Pasture"];

    private constructor() {
        if (MapGenerator.instance === null) {
            this.setNeigbours();
            return this;
        } else {
            MapGenerator.getInstance().setNeigbours();
            return MapGenerator.instance;
        }
    }
    /**
 * Generates a map with the given parameters
 * @param goodNumbersCanTouch if true, good numbers can touch
 * @param badNumbersCanTouch if true, bad numbers can touch
 * @param sameNumbersCanTouch if true, same numbers can touch
 * @param sameResourcesCanTouch if true, same resources can touch
 * @param randomGenerate if true, generates a random map ignoring other params
 * @returns an array of MapTiles representing the generated map 
 * where the indexes are left to right and top to bottom representation of the maptiles in the large hexagon
 */
    public generateMap(goodNumbersCanTouch: boolean, badNumbersCanTouch: boolean,
        sameNumbersCanTouch: boolean, sameResourcesCanTouch: boolean, randomGenerate: boolean, onlyTiles: boolean = false, onlyNumbers: boolean = false, clear: boolean = false): MapTile[] {
        try {
            if(clear === true){
                return this.clearMap;
            }
            if (onlyNumbers === false) {
                for (let tile of this.mapTiles) {
                    if (tile.getType() === "Desert" && onlyTiles === true) {
                        continue;
                    }
                    tile.setType("INVALID");
                    this.remainingFieldNumber = fillMaxFieldNumber();
                }
                generateTiles(this.mapTiles, this.hexTypes, this.remainingFieldNumber, sameResourcesCanTouch, randomGenerate, onlyTiles);
            }


            if (onlyTiles === false) {
                for (let tile of this.mapTiles) {
                    tile.setValue(-1);
                }
                placeNumbers(this.mapTiles, goodNumbersCanTouch, badNumbersCanTouch, sameNumbersCanTouch, randomGenerate);
            }
        } catch (e) {
            console.log(e);
        }
        return this.mapTiles;
    }
}

/**
 * Fills the maximum number of each field type
 * @returns a map with the maximum number of each field type
 */
function fillMaxFieldNumber(): Map<string, number> {
    let maxFieldNumber = new Map<string, number>();
    maxFieldNumber.set("Desert", 1);
    maxFieldNumber.set("Forest", 4);
    maxFieldNumber.set("Mountain", 3);
    maxFieldNumber.set("Field", 4);
    maxFieldNumber.set("Hill", 3);
    maxFieldNumber.set("Pasture", 4);
    return maxFieldNumber;
}



