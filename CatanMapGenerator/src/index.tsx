import { render } from 'preact';
import './index.less';
import { CatanMap } from './GUI/Containers/Map';
import { OptionsPanel } from './GUI/Containers/OptionsPanel';
import { useState, useEffect } from 'preact/hooks';

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
    const [nightMode, setNightMode] = useState(false);
    const [mapStaysTheSame, setMapStaysTheSame] = useState(false);

    useEffect(() => {
        if (nightMode) {
            setMapStaysTheSame(true);
            requestAnimationFrame(() => setMapStaysTheSame(false));
        }
    }, [nightMode]);

    return (
        <div class="main">
            <OptionsPanel options={options} setOptions={setOptions} nightMode={nightMode} setNightMode={setNightMode} />
            <CatanMap {...options} nightMode={nightMode} mapStaysTheSame={mapStaysTheSame} />
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
