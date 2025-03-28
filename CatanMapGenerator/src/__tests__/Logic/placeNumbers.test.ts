import { getNeighboursFromIndex } from "../../Logic/getNeighboursFromIndex";
import { placeNumbers } from "../../Logic/placeNumbers";
import { MapTile } from "../../Logic/Tiles/MapTile";

function createMapTiles(): MapTile[] {
    const mapTiles: MapTile[] = [];
    for (let i = 0; i < 18; i++) {
        mapTiles.push(new MapTile("Forest", -1));
        mapTiles[i].setIndex(i);
        mapTiles[i].setNeighboursIndexes(getNeighboursFromIndex(i));
    }
    mapTiles.push(new MapTile("Desert", -1));
    return mapTiles;
}

describe("placeNumbers", () => {
    it("GoodNumberCanTouch = true, BadNumbersCanTouch=true, SameNumberCanTouch=true, randomGenerate= false", () => {
        const allNumberTokens = new Map<number, number>([
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
        const mapTiles = createMapTiles();
        placeNumbers(mapTiles, true, true, true, false);
        for (let tile of mapTiles) {
            if (tile.getType() === "Desert") {
                expect(tile.getValue()).toBe(-1);
                continue;
            }
            let value = tile.getValue();
            if (allNumberTokens.has(value)) {
                allNumberTokens.set(value, allNumberTokens.get(value) - 1);
            }
        }
        for (let [num, count] of allNumberTokens) {
            expect(count).toBe(0);
        }
    });

    it("GoodNumberCanTouch = false, BadNumbersCanTouch=false, SameNumberCanTouch=false, randomGenerate= false", () => {
        for (let i = 0; i < 1000; i++) {
            const allNumberTokens = new Map<number, number>([
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
            const mapTiles = createMapTiles();
            placeNumbers(mapTiles, false, false, false, false);
            for (let tile of mapTiles) {
                if (tile.getType() === "Desert") {
                    continue;
                }
                let value: number = tile.getValue();
                for (let neighbourIndex of tile.getNeighboursIndexes()) {
                    let neighbourValue = mapTiles[neighbourIndex].getValue();
                    //check for SameNumberCanTouch
                    expect(neighbourValue).not.toBe(value);
                    //check for BadNumbersCanTouch
                    if (value === 2 || value === 12) {
                        expect(neighbourValue).not.toBe(2);
                        expect(neighbourValue).not.toBe(12);
                    }
                    //check for GoodNumberCanTouch
                    if (value === 6 || value === 8) {
                        expect(neighbourValue).not.toBe(6);
                        expect(neighbourValue).not.toBe(8);
                    }
                }
                if (allNumberTokens.has(value)) {
                    allNumberTokens.set(value, allNumberTokens.get(value) - 1);
                }
            }
            for (let [num, count] of allNumberTokens) {
                expect(count).toBe(0);
            }
        }
    });
});