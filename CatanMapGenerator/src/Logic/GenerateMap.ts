import { generateMapWithBacktracking } from "./generateMapWithBacktracking";
import { getNeighboursFromIndex } from "./getNeighboursFromIndex";
import { getRandomHexType } from "./getRandomHexType";
import { MapTile } from "./Tiles/MapTile";

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
export function generateMap(goodNumbersCanTouch: boolean, badNumbersCanTouch: boolean,
    sameNumbersCanTouch: boolean, sameResourcesCanTouch: boolean, randomGenerate: boolean): MapTile[] {
    const hexTypes = ["Desert", "Forest", "Mountain", "Field", "Hill", "Pasture"];
    let remainingFieldNumber = fillMaxFieldNumber();
    let mapTiles: MapTile[] = [];

    // Setting tile indexes and neighbourIndexes
    for (let i = 0; i < 19; i++) {
        mapTiles.push(new MapTile());
        mapTiles[i].setIndex(i);
        mapTiles[i].setNeighboursIndexes(getNeighboursFromIndex(i));
        //debug:
        //console.log("Index: " + i + " Type: " + mapTiles[i].getType());
        //mapTiles[i].printNeighboursIndexes();
    }

    if (sameResourcesCanTouch === true || randomGenerate === true) { // Generates a random tile placement
        console.log("random generation RandomGen: " + randomGenerate + " sameRes: " + sameResourcesCanTouch);
        for (let i = 0; i < 19; i++) {
            mapTiles[i].setType(getRandomHexType(hexTypes, remainingFieldNumber));
            remainingFieldNumber.set(mapTiles[i].getType(), remainingFieldNumber.get(mapTiles[i].getType()) - 1);
        }
    } else if (sameResourcesCanTouch === false) { // Generates a map where no same resources can touch
        if (!generateMapWithBacktracking(mapTiles, hexTypes, remainingFieldNumber, 0)) {
            throw new Error("Failed to generate a valid map");
        }
    }

    return mapTiles;
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



