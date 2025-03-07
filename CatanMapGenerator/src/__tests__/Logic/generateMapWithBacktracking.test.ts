import { generateMapWithBacktracking } from "../../Logic/generateMapWithBacktracking";
import { getNeighboursFromIndex } from "../../Logic/getNeighboursFromIndex";
import { MapTile } from "../../Logic/Tiles/MapTile";
function createMapTiles(): MapTile[] {
    const mapTiles: MapTile[] = [];
    for (let i = 0; i < 19; i++) {
        mapTiles.push(new MapTile());
        mapTiles[i].setIndex(i);
        mapTiles[i].setNeighboursIndexes(getNeighboursFromIndex(i));
    }
    return mapTiles;
}

const hexTypes = ["Forest", "Hill", "Mountain", "Pasture", "Field"];

describe("generateMapWithBacktracking", () => {
    it("Testing rules", () => {
        const remainingFieldNumber = new Map<string, number>([
            ["Forest", 4],
            ["Hill", 3],
            ["Mountain", 3],
            ["Pasture", 4],
            ["Field", 4],
            ["Desert", 1]
        ]);
        const mapTiles = createMapTiles();
        expect(!generateMapWithBacktracking(mapTiles, hexTypes, remainingFieldNumber, 0)).toBe(false);
        for (let [type, count] of remainingFieldNumber) {
            expect(count).toBe(0);
        }
    });

    it("Testing backtracking to not make tiles touch", () => {
        for (let i = 0; i < 1000; i++) {
            const remainingFieldNumber = new Map<string, number>([
                ["Forest", 4],
                ["Hill", 3],
                ["Mountain", 3],
                ["Pasture", 4],
                ["Field", 4],
                ["Desert", 1]
            ]);
            const mapTiles = createMapTiles();
            generateMapWithBacktracking(mapTiles, hexTypes, remainingFieldNumber, 0);
            for (let tile of mapTiles) {
                let value: string = tile.getType();
                for (let neighbourIndex of tile.getNeighboursIndexes()) {
                    let neighbourValue = mapTiles[neighbourIndex].getType();
                    expect(neighbourValue).not.toBe(value);
                }

            }
        }
    });
});