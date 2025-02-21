import { MapTile } from "./Tiles/MapTile";

export function generateMap(goodNumbersCanTouch:boolean,badNumbersCanTouch:boolean,
                    sameNumbersCanTouch:boolean,sameResourcesCanTouch:boolean):MapTile[]{
    const hexagonPattern = [3, 4, 5, 4, 3];
    let remainingFieldNumber = fillMaxFieldNumber();
    const hexTypes = ["Desert", "Forest", "Mountain", "Field", "Hill", "Pasture"];
    let mapTiles:MapTile[] = [];

    if(sameResourcesCanTouch===false){
        //TODO normal resource generation
    }
    else{
        for(let i = 0; i<19; i++){
            mapTiles.push(new MapTile(getRandomHexType(hexTypes, remainingFieldNumber), -1));
            remainingFieldNumber.set(mapTiles[i].getType(), remainingFieldNumber.get(mapTiles[i].getType())-1);
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

