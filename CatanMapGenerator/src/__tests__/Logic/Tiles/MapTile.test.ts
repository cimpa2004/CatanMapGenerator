import { MapTile } from '../../../Logic/Tiles/MapTile';

describe('MapTile', () => {
  it('default constuctor', () => {
    const tile = new MapTile();
    expect(tile.getType()).toBe('INVALID');
    expect(tile.getValue()).toBe(-1);
  });

  it('get type', () => {
    const tile = new MapTile();
    tile.setType('Forest');
    expect(tile.getType()).toBe('Forest');
  });

  it('expecter error for bad type', () => {
    const tile = new MapTile();
    expect(() => tile.setType('InvalidType')).toThrow('Invalid type');
  });

  it('set value', () => {
    const tile = new MapTile();
    tile.setValue(5);
    expect(tile.getValue()).toBe(5);
  });

  it('add neigbours', () => {
    const tile1 = new MapTile();
    const tile2 = new MapTile();
    tile1.addNeighbour(tile2);
    expect(tile1.getNeighbours()).toContain(tile2);
  });

  it('set neigbours indexes', () => {
    const tile = new MapTile();
    tile.setNeighboursIndexes([1, 2, 3]);
    expect(tile.getNeighboursIndexes()).toEqual([1, 2, 3]);
  });

  it('set index', () => {
    const tile = new MapTile();
    tile.setIndex(5);
    expect(tile.getIndex()).toBe(5);
  });

  it('print neighbours', () => {
    const tile = new MapTile();
    tile.setNeighboursIndexes([1, 2, 3]);
    console.log = jest.fn();
    tile.printNeighboursIndexes();
    expect(console.log).toHaveBeenCalledWith([1, 2, 3]);
  });
});