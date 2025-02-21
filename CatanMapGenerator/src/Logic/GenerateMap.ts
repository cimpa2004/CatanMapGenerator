import { getNeighboursFromIndex } from "./getNeighboursFromIndex";
import { MapTile } from "./Tiles/MapTile";

export function generateMap(goodNumbersCanTouch:boolean,badNumbersCanTouch:boolean,
                    sameNumbersCanTouch:boolean,sameResourcesCanTouch:boolean,randomGenerate:boolean):MapTile[]{
    const hexagonPattern = [3, 4, 5, 4, 3];
    let remainingFieldNumber = fillMaxFieldNumber();
    const hexTypes = ["Desert", "Forest", "Mountain", "Field", "Hill", "Pasture"];
    let mapTiles:MapTile[] = [];
    //setting tile indexes and neighbourIndexes
    for(let i = 0; i<19; i++){
        mapTiles.push(new MapTile());
        mapTiles[i].setIndex(i);
        mapTiles[i].setNeighboursIndexes(getNeighboursFromIndex(i));
        console.log("Index: " + i + " Type: " + mapTiles[i].getType());
        mapTiles[i].printNeighboursIndexes();
    }

    if(sameResourcesCanTouch===true || randomGenerate===true){ //generates a random tile placement
        console.log("random generation RandomGen: " + randomGenerate + " sameRes: " + sameResourcesCanTouch);
        for(let i = 0; i<19; i++){
            mapTiles[i].setType(getRandomHexType(hexTypes, remainingFieldNumber));
            remainingFieldNumber.set(mapTiles[i].getType(), remainingFieldNumber.get(mapTiles[i].getType())-1);
        }
    }
    else if(sameResourcesCanTouch===false){ //generates a map where no same resources can touch
        for (let i = 0; i < 19; i++) {
            const neighbours = mapTiles[i].getNeighboursIndexes().map(index => mapTiles[index].getType());
            const hexType = getRandomHexType(hexTypes.filter(type => !neighbours.includes(type)), remainingFieldNumber);
            mapTiles[i].setType(hexType);
            remainingFieldNumber.set(hexType, remainingFieldNumber.get(hexType) - 1);
        }

    }

    return mapTiles;
}



function fillMaxFieldNumber():Map<string, number>{
    let maxFieldNumber = new Map<string, number>();
    maxFieldNumber.set("Desert", 1);
    maxFieldNumber.set("Forest", 4);
    maxFieldNumber.set("Mountain", 3);
    maxFieldNumber.set("Field", 4);
    maxFieldNumber.set("Hill", 3);
    maxFieldNumber.set("Pasture", 4);
    return maxFieldNumber;
}

export function getRandomHexType(hexTypes: string[], remainingFieldNumber:Map<string,number>): string {
    const randomIndex = Math.floor(Math.random() * hexTypes.length);
    if(remainingFieldNumber.get(hexTypes[randomIndex]) === 0){
        return getRandomHexType(hexTypes, remainingFieldNumber);
    }
    
    return hexTypes[randomIndex];
}

