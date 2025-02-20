export class MapTile {
    private type: string;
    private value: number;
    private Neighbours: MapTile[] = [];

    public getType(): string {
        return this.type;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getNeighbours(): MapTile[] {
        return this.Neighbours;
    }

    public addNeighbour(neighbour: MapTile): void {
        this.Neighbours.push(neighbour);
    }
    
    constructor(type: string, value: number) {
        this.type = type;
        this.value = value;
    }

    public toString(): string {
        return this.type + " " + this.value;
    }



}