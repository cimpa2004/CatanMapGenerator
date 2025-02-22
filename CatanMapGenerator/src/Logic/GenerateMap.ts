import { generateMapWithBacktracking } from "./generateMapWithBacktracking";
import { getNeighboursFromIndex } from "./getNeighboursFromIndex";
import { getRandomHexType } from "./getRandomHexType";
import { MapTile } from "./Tiles/MapTile";

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
        console.log("Index: " + i + " Type: " + mapTiles[i].getType());
        mapTiles[i].printNeighboursIndexes();
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



