import { MapTile } from "./Tiles/MapTile";
import { shuffleArray } from "./generateMapWithBacktracking";

export function placeNumbers(mapTiles: MapTile[], goodNumbersCanTouch: boolean, badNumbersCanTouch: boolean,
    sameNumbersCanTouch: boolean, randomGenerate: boolean): MapTile[] {

    /**
     * first is the number, second is the amount of times it can be placed
     */
    const maxOfEachNumber = fillNumberMap();

    if (randomGenerate === true || (goodNumbersCanTouch === true && badNumbersCanTouch === true && sameNumbersCanTouch === true)) {
        randomGeneratedNumbers(mapTiles, maxOfEachNumber);
    } else if (goodNumbersCanTouch === false && badNumbersCanTouch === true && sameNumbersCanTouch === true) {
        goodNumbersDontTouch(mapTiles, maxOfEachNumber,0);
    } else if (goodNumbersCanTouch === true && badNumbersCanTouch === false && sameNumbersCanTouch === true) {
        badNumbersDontTouch(mapTiles, maxOfEachNumber,0);
    } else if (goodNumbersCanTouch === true && badNumbersCanTouch === true && sameNumbersCanTouch === false) {
        sameNumbersDontTouch(mapTiles, maxOfEachNumber,0);
    }

    return mapTiles;
}

function fillNumberMap(): Map<number, number> {
    return new Map([
        [2, 1],
        [3, 2],
        [4, 2],
        [5, 2],
        [6, 2],
        [8, 2],
        [9, 2],
        [10, 2],
        [11, 2],
        [12, 1]
    ]);
}

function randomGeneratedNumbers(mapTiles: MapTile[], maxOfEachNumber: Map<number, number>): void {
    for (let i = 0; i < 19; i++) {
        if (mapTiles[i].getType() === "Desert") {
            mapTiles[i].setValue(-1); // does not need a number 
        } else {
            // Get all numbers with a count greater than 0
            const availableNumbers = Array.from(maxOfEachNumber.entries()).filter(
                ([num, count]) => count > 0
            );

            if (availableNumbers.length === 0) {
                throw new Error("No available numbers left");
            }
            const ranIndex = Math.floor(Math.random() * availableNumbers.length);
            const [selectedNumber, count] = availableNumbers[ranIndex];
            mapTiles[i].setValue(selectedNumber);
            maxOfEachNumber.set(selectedNumber, count - 1);
        }
    }
}


function goodNumbersDontTouch(mapTiles: MapTile[], maxOfEachNumber: Map<number, number>, index: number): boolean {
    if (index === mapTiles.length) {
        return true; // All tiles have been successfully placed
    }

    if (mapTiles[index].getType() === "Desert") {
        mapTiles[index].setValue(-1); // does not need a number
        return goodNumbersDontTouch(mapTiles, maxOfEachNumber, index + 1);
    }

    const neighbours = mapTiles[index].getNeighboursIndexes().map(i => mapTiles[i].getValue());
    const availableNumbers = Array.from(maxOfEachNumber.entries()).filter(
        ([num, count]) => count > 0 && (!(num === 6 || num === 8) || (!neighbours.includes(6) && !neighbours.includes(8)))
    );
    shuffleArray(availableNumbers);

    for (const [number, count] of availableNumbers) {
        mapTiles[index].setValue(number);
        maxOfEachNumber.set(number, count - 1);

        if (goodNumbersDontTouch(mapTiles, maxOfEachNumber, index + 1)) {
            return true;
        }

        // Backtrack
        mapTiles[index].setValue(0);
        maxOfEachNumber.set(number, count);
    }

    return false; // No valid placement found, need to backtrack
}

function badNumbersDontTouch(mapTiles: MapTile[], maxOfEachNumber: Map<number, number>, index: number): boolean {
    if (index === mapTiles.length) {
        return true; // All tiles have been successfully placed
    }

    if (mapTiles[index].getType() === "Desert") {
        mapTiles[index].setValue(-1); // does not need a number
        return goodNumbersDontTouch(mapTiles, maxOfEachNumber, index + 1);
    }

    const neighbours = mapTiles[index].getNeighboursIndexes().map(i => mapTiles[i].getValue());
    const availableNumbers = Array.from(maxOfEachNumber.entries()).filter(
        ([num, count]) => count > 0 && (!(num === 2 || num === 12) || (!neighbours.includes(2) && !neighbours.includes(12)))
    );
    shuffleArray(availableNumbers);

    for (const [number, count] of availableNumbers) {
        mapTiles[index].setValue(number);
        maxOfEachNumber.set(number, count - 1);

        if (goodNumbersDontTouch(mapTiles, maxOfEachNumber, index + 1)) {
            return true;
        }

        // Backtrack
        mapTiles[index].setValue(0);
        maxOfEachNumber.set(number, count);
    }

    return false; // No valid placement found, need to backtrack
}

function sameNumbersDontTouch(mapTiles: MapTile[], maxOfEachNumber: Map<number, number>, index: number): boolean {
    if (index === mapTiles.length) {
        return true; // All tiles have been successfully placed
    }

    if (mapTiles[index].getType() === "Desert") {
        mapTiles[index].setValue(-1); // does not need a number
        return sameNumbersDontTouch(mapTiles, maxOfEachNumber, index + 1);
    }

    const neighbours = mapTiles[index].getNeighboursIndexes().map(i => mapTiles[i].getValue());
    let availableNumbers = Array.from(maxOfEachNumber.entries()).filter(
        ([num, count]) => count > 0 && !neighbours.includes(num)
    );

    // Shuffle the available numbers to add randomness
    shuffleArray(availableNumbers);

    for (const [number, count] of availableNumbers) {
        mapTiles[index].setValue(number);
        maxOfEachNumber.set(number, count - 1);

        if (sameNumbersDontTouch(mapTiles, maxOfEachNumber, index + 1)) {
            return true;
        }

        // Backtrack
        mapTiles[index].setValue(0);
        maxOfEachNumber.set(number, count);
    }

    return false; // No valid placement found, need to backtrack
}

