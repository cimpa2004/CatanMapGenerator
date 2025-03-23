import { generateMapWithBacktracking } from "./generateMapWithBacktracking";
import { getRandomHexType } from "./getRandomHexType";
import { MapTile } from "./Tiles/MapTile";

export function generateTiles(mapTiles:MapTile[],hexTypes,remainingFieldNumber,sameResourcesCanTouch:boolean,randomGenerate:boolean, onlyTiles:boolean = false){
    if(onlyTiles === true){
        remainingFieldNumber.set("Desert",0);
    }
     if (sameResourcesCanTouch === true || randomGenerate === true) { // Generates a random tile placement
            for (let i = 0; i < 19; i++) {
                if(mapTiles[i].getType() === "Desert"){
                    continue;
                }
                mapTiles[i].setType(getRandomHexType(hexTypes, remainingFieldNumber));
                remainingFieldNumber.set(mapTiles[i].getType(), remainingFieldNumber.get(mapTiles[i].getType()) - 1);
            }
        } else if (sameResourcesCanTouch === false) { // Generates a map where no same resources can touch
            if (!generateMapWithBacktracking(mapTiles, hexTypes, remainingFieldNumber, 0, onlyTiles)) {
                throw new Error("Failed to generate a valid map");
            }
        }
}