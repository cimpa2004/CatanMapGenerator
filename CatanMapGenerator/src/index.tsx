import { render } from 'preact';
import './index.less';
import { CatanMap } from './GUI/Containers/Map';
import { OptionsPanel } from './GUI/Containers/OptionsPanel';
import { useState, useEffect } from 'preact/hooks';
import { MapViewStateHandler } from './Logic/MapViewStateHandler';

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
