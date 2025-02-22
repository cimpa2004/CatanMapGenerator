import { getNeighboursFromIndex } from "../../Logic/getNeighboursFromIndex";

describe('getNeighboursFromIndex', () => {
    it('get neighbours from index 0', () => {
        expect(getNeighboursFromIndex(0)).toEqual([1, 3, 4]);
    });

    it('get neighbours from index 1', () => {
        expect(getNeighboursFromIndex(1)).toEqual([0, 2, 4, 5]);
    });

    it('get neighbours from index 2', () => {
        expect(getNeighboursFromIndex(2)).toEqual([1, 5, 6]);
    });

    it('get neighbours from index 3', () => {
        expect(getNeighboursFromIndex(3)).toEqual([0, 4, 7, 8]);
    });

    it('get neighbours from index 4', () => {
        expect(getNeighboursFromIndex(4)).toEqual([0, 1, 3, 5, 8, 9]);
    });

    it('get neighbours from index 5', () => {
        expect(getNeighboursFromIndex(5)).toEqual([1, 2, 4, 6, 9, 10]);
    });

    it('get neighbours from index 6', () => {
        expect(getNeighboursFromIndex(6)).toEqual([2, 5, 10, 11]);
    });

    it('get neighbours from index 7', () => {
        expect(getNeighboursFromIndex(7)).toEqual([3, 8, 12]);
    });

    it('get neighbours from index 8', () => {
        expect(getNeighboursFromIndex(8)).toEqual([3, 4, 7, 9, 12, 13]);
    });

    it('get neighbours from index 9', () => {
        expect(getNeighboursFromIndex(9)).toEqual([4, 5, 8, 10, 13, 14]);
    });

    it('get neighbours from index 10', () => {
        expect(getNeighboursFromIndex(10)).toEqual([5, 6, 9, 11, 14, 15]);
    });

    it('get neighbours from index 11', () => {
        expect(getNeighboursFromIndex(11)).toEqual([6, 10, 15]);
    });

    it('get neighbours from index 12', () => {
        expect(getNeighboursFromIndex(12)).toEqual([7, 8, 13, 16]);
    });
    it('get neighbours from index 13', () => {
        expect(getNeighboursFromIndex(13)).toEqual([8, 9, 12, 14, 16, 17]);
    });
    it('get neighbours from index 14', () => {      
        expect(getNeighboursFromIndex(14)).toEqual([9, 10, 13, 15, 17, 18]);
    });
    it('get neighbours from index 15', () => {
        expect(getNeighboursFromIndex(15)).toEqual([10, 11, 14, 18]);
    });
    it('get neighbours from index 16', () => {
        expect(getNeighboursFromIndex(16)).toEqual([12, 13, 17]);
    });
    it('get neighbours from index 17', () => {
        expect(getNeighboursFromIndex(17)).toEqual([13, 14, 16, 18]);
    });
    it('get neighbours from index 18', () => {
        expect(getNeighboursFromIndex(18)).toEqual([14, 15, 17]);
    });
    it('get neighbours from index -1', () => {
        expect(()=>getNeighboursFromIndex(-1)).toThrow('Invalid index');
    });
});