import { getNeighboursFromIndex } from "./getNeighboursFromIndex";
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

//could still be more random but it works
function generateMapWithBacktracking(mapTiles: MapTile[], hexTypes: string[], remainingFieldNumber: Map<string, number>, index: number): boolean {
    if (index === mapTiles.length) {
        return true; // All tiles have been successfully placed
    }

    const neighbours = mapTiles[index].getNeighboursIndexes().map(i => mapTiles[i].getType());
    const availableHexTypes = hexTypes.filter(type => !neighbours.includes(type) && remainingFieldNumber.get(type) > 0);

    shuffleArray(availableHexTypes); // Shuffle the available hex types to add randomness
    

    for (const hexType of availableHexTypes) {
        mapTiles[index].setType(hexType);
        remainingFieldNumber.set(hexType, remainingFieldNumber.get(hexType) - 1);

        if (generateMapWithBacktracking(mapTiles, hexTypes, remainingFieldNumber, index + 1)) {
            return true; // Successfully placed all tiles
        }

        // Backtrack
        mapTiles[index].setType("INVALID");
        remainingFieldNumber.set(hexType, remainingFieldNumber.get(hexType) + 1);
    }

    return false; // No valid placement found, need to backtrack
}


/**
 * Fisher-Yates shuffle best for performance
 * @param array 
 */
function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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

export function getRandomHexType(hexTypes: string[], remainingFieldNumber: Map<string, number>): string {
    const availableHexTypes = hexTypes.filter(type => remainingFieldNumber.get(type) > 0);
    const randomIndex = Math.floor(Math.random() * availableHexTypes.length);
    return availableHexTypes[randomIndex];
}

