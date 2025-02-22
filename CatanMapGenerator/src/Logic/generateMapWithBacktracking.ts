import { MapTile } from "./Tiles/MapTile";

export function generateMapWithBacktracking(mapTiles: MapTile[], hexTypes: string[], remainingFieldNumber: Map<string, number>, index: number): boolean {
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