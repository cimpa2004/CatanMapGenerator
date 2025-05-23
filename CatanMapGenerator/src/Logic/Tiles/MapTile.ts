export class MapTile {
    private type: string;
    private value: number;
    private neighboursIndexes: number[] = [];
    private index: number = -1;

    public getType(): string {
        return this.type;
    }
    setType(type: string): void {
        if(type === "Desert" || type === "Forest" || type === "Mountain" 
            || type === "Field" || type === "Hill" || type === "Pasture" 
            || type === "INVALID") {
            this.type = type;
        }
        else throw new Error("Invalid type");
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    
    constructor(type: string = "INVALID", value: number = -1) {
        this.type = type;
        this.value = value;
    }

    public setNeighboursIndexes(neighboursIndexes: number[]): void {
        this.neighboursIndexes = neighboursIndexes;
    }

    public getNeighboursIndexes(): number[] {
        return this.neighboursIndexes;
    }

    public printNeighboursIndexes(): void {
        console.log(this.neighboursIndexes);
    }

    public setIndex(index: number): void {
        this.index = index;
    }

    public getIndex(): number {
        return this.index;
    }
}

