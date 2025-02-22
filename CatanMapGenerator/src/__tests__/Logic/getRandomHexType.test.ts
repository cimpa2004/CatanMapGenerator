import { getRandomHexType } from "../../Logic/getRandomHexType";

describe("getRandomHexType", () => {
    it("get a random hextpye", () => {
        const hexTypes = ["Desert", "Forest", "Mountain", "Field", "Hill", "Pasture"];
        const remainingFieldNumber = new Map<string, number>([
            ["Desert", 1],
            ["Forest", 4],
            ["Mountain", 3],
            ["Field", 4],
            ["Hill", 3],
            ["Pasture", 4],
        ]);
        const hexType = getRandomHexType(hexTypes, remainingFieldNumber);
        expect(hexTypes).toContain(hexType);
    });
});