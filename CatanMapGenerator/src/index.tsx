import { render } from 'preact';
import './index.less';
import { CatanMap } from './GUI/Containers/Map';
import { OptionsPanel } from './GUI/Containers/OptionsPanel';
import { useState, useEffect } from 'preact/hooks';
import { MapGenerator } from './Logic/GenerateMap';
import { MapTile } from './Logic/Tiles/MapTile';

export type OptionsState = {
    goodNumbersCanTouch: boolean;
    badNumbersCanTouch: boolean;
    sameNumbersCanTouch: boolean;
    sameResourcesCanTouch: boolean;
    randomGenerate: boolean;
    onlyTiles: boolean;
    onlyNumbers: boolean;
    clear: boolean;
    _updateTime: number;
};

class MapViewStateHandler {
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

export function App() {
    const [options, setOptions] = useState<OptionsState>({
        goodNumbersCanTouch: false,
        badNumbersCanTouch: false,
        sameNumbersCanTouch: false,
        sameResourcesCanTouch: false,
        randomGenerate: false,
        onlyTiles: false,
        onlyNumbers: false,
        clear: false,
        _updateTime: Date.now()
    });
    const [mapViewStateHandler] = useState(() => new MapViewStateHandler());
    const [nightMode, setNightMode] = useState(false);
    const [mapTiles, setMapTiles] = useState(mapViewStateHandler.getMapTiles());

    useEffect(() => {
        mapViewStateHandler.setNightMode(nightMode);
        setMapTiles([...mapViewStateHandler.getMapTiles()]); 
    }, [nightMode]);

    useEffect(() => {
        mapViewStateHandler.generateMap(options);
        setMapTiles([...mapViewStateHandler.getMapTiles()]); 
    }, [options]);

    return (
        <div class="main">
            <OptionsPanel options={options} setOptions={setOptions} nightMode={nightMode} setNightMode={setNightMode} />
            <CatanMap mapTiles={mapTiles} nightMode={nightMode} />
        </div>
    );
}

function Resource(props) {
    return (
        <a href={props.href} target="_blank" class="resource">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </a>
    );
}

render(<App />, document.getElementById('app'));
