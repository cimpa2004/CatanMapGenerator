import { MapTile } from "./Tiles/MapTile";

/**
 * Recursive backtracking algorithm to generate a map where no similar hex types are touching each other
 * @param mapTiles tiles to be placed on the map
 * @param hexTypes all hex types to place on the map
 * @param remainingFieldNumber remaining number of each hex type to place
 * @param index of the current tile
 * @param fixedDesert if true, fixes the desert position at the first index
 * @returns boolean indicating whether the map was successfully generated
 */
export function generateMapWithBacktracking(mapTiles: MapTile[], hexTypes: string[], remainingFieldNumber: Map<string, number>, index: number, fixedDesert: boolean = false): boolean {
    if (index === 0) {
        if (fixedDesert) {
            // Place the desert tile at the first index
            remainingFieldNumber.set("Desert", remainingFieldNumber.get("Desert") - 1);
        } else {
            // Place the desert tile at a random index
            const desertIndex = Math.floor(Math.random() * mapTiles.length);
            mapTiles[desertIndex].setType("Desert");
            remainingFieldNumber.set("Desert", remainingFieldNumber.get("Desert") - 1);
        }
    }

    if (index === mapTiles.length) {
        return true; // All tiles have been successfully placed
    }

    // Skip the desert tile
    if (mapTiles[index].getType() === "Desert") {
        return generateMapWithBacktracking(mapTiles, hexTypes, remainingFieldNumber, index + 1, fixedDesert);
    }

    const neighbours = mapTiles[index].getNeighboursIndexes().map(i => mapTiles[i].getType());
    const availableHexTypes = hexTypes.filter(type => type !== "Desert" && !neighbours.includes(type) && remainingFieldNumber.get(type) > 0);

    shuffleArray(availableHexTypes); // Shuffle the available hex types to add randomness

    for (const hexType of availableHexTypes) {
        mapTiles[index].setType(hexType);
        remainingFieldNumber.set(hexType, remainingFieldNumber.get(hexType) - 1);

        if (generateMapWithBacktracking(mapTiles, hexTypes, remainingFieldNumber, index + 1, fixedDesert)) {
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
export function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}