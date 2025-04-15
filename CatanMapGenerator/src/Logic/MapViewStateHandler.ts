import { OptionsState } from "..";
import { MapGenerator } from "./GenerateMap";

export class MapViewStateHandler {
    private nightMode: boolean = false;
    private mapGenerator: MapGenerator = MapGenerator.getInstance();
    private mapTiles: any[] = this.mapGenerator.generateMap(false, false, false, false, false, false, false, false);

    public getNightMode(): boolean {
        return this.nightMode;
    }

    public setNightMode(nightMode: boolean): void {
        this.nightMode = nightMode;
    }

    public getMapTiles(): any[] {
        return this.mapTiles;
    }

    public generateMap(options: OptionsState): void {
        this.mapTiles = this.mapGenerator.generateMap(
            options.goodNumbersCanTouch,
            options.badNumbersCanTouch,
            options.sameNumbersCanTouch,
            options.sameResourcesCanTouch,
            options.randomGenerate,
            options.onlyTiles,
            options.onlyNumbers,
            options.clear
        );
    }
}