import { render } from 'preact';
import './index.less';
import { CatanMap } from './GUI/Containers/Map';
import { OptionsPanel } from './GUI/Containers/OptionsPanel';
import { useState, useEffect } from 'preact/hooks';
import { MapGenerator } from './Logic/GenerateMap';

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

class Temp {
    private nightMode: boolean = false;
    private mapGenerator: MapGenerator = MapGenerator.getInstance();
    private mapTiles: any[] = this.mapGenerator.generateMap(false, false, false, false, false, false, false, false);
    private memory: any[] = this.mapTiles;

    public getNightMode(): boolean {
        return this.nightMode;
    }

    public setNightMode(nightMode: boolean): void {
        if (this.nightMode !== nightMode) {
            this.nightMode = nightMode;
            if (nightMode) {
                this.memory = this.mapTiles; 
            } else {
                this.mapTiles = this.memory;
            }
        }
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
    const [temp] = useState(() => new Temp());
    const [nightMode, setNightMode] = useState(false);
    const [mapTiles, setMapTiles] = useState(temp.getMapTiles());

    useEffect(() => {
        temp.setNightMode(nightMode);
        setMapTiles(temp.getMapTiles()); // Update map tiles immediately when night mode changes
    }, [nightMode]);

    useEffect(() => {
        temp.generateMap(options);
        setMapTiles(temp.getMapTiles()); // Update map tiles immediately when options change
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
