import { MapTile } from "./Tiles/MapTile";

export function placeNumbers(mapTiles:MapTile[],goodNumbersCanTouch:boolean,badNumbersCanTouch:boolean,
    sameNumbersCanTouch:Boolean,randomGenerate:Boolean):MapTile[]{

    /**
     * first is the numbe, second is the amount of times it can be placed
     */
    const maxOfEachNumber = fillNumberMap();

    if(randomGenerate === true || (goodNumbersCanTouch === true && badNumbersCanTouch === true && sameNumbersCanTouch === true)){
        for(let i = 0; i < 19; i++){
            if (mapTiles[i].getType() === "Desert") {
                mapTiles[i].setValue(-1); // does not need a number 
              } else {
                // Get all numbers with a count greater than 0
                const availableNumbers = Array.from(maxOfEachNumber.entries()).filter(
                  ([num, count]) => count > 0
                );
        
                if (availableNumbers.length === 0) {
                  // No available numbers left; you might want to throw an error or break
                  throw new Error("No available numbers left");
                }
        
                // Select a random available number
                const ranIndex = Math.floor(Math.random() * availableNumbers.length);
                const [selectedNumber, count] = availableNumbers[ranIndex];
        
                mapTiles[i].setValue(selectedNumber);
                maxOfEachNumber.set(selectedNumber, count - 1);
            }
        }
    }
    
    return mapTiles;
}

function fillNumberMap():Map<number,number>{
    return new Map([
        [2,1],
        [3,2],
        [4,2],
        [5,2],
        [6,2],
        [8,2],
        [9,2],
        [10,2],
        [11,2],
        [12,1]]);
}
