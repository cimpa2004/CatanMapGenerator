import "./OptionsPanel.less";
import { RoundedColoredButtonWithText } from "../Buttons/RoundedColoredButtonWithText";
import { useState } from "preact/hooks";
import { OptionsState } from "../..";

type OptionPanelProps = {
    options: OptionsState;
    setOptions: (options: OptionsState) => void;
    nightMode: boolean;
    setNightMode: (nightMode: boolean) => void;
};


export function OptionsPanel({ options, setOptions,nightMode,setNightMode }: Readonly<OptionPanelProps>) {
    const [optionsState, setOptionsState] = useState<OptionsState>({
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

    const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const newState = { ...optionsState, [target.name]: target.checked };
        setOptionsState(newState);
    };

    const handleSmartGenerate = () => {
        setOptions({ ...optionsState, _updateTime: Date.now() });
    };
    const handleModularGenerateAndClear = (_onlyTiles: boolean, _onlyNumbers: boolean, _clear: boolean) => {
        setOptions({ ...optionsState, onlyTiles: _onlyTiles, onlyNumbers: _onlyNumbers, clear: _clear });
    };


    return (
        <div class="optionsPanel">
            <div class="Title">Catan map generator</div>
            <div class="Options_container">
                <RoundedColoredButtonWithText
                    text="Random Generate"
                    color="#0015FF"
                    onClick={() => {
                        setOptions({
                            goodNumbersCanTouch: false,
                            badNumbersCanTouch: false,
                            sameNumbersCanTouch: false,
                            sameResourcesCanTouch: false,
                            randomGenerate: true,
                            onlyTiles: false,
                            onlyNumbers: false,
                            clear: false,
                            _updateTime: Date.now()
                        });
                    }}
                    callback={() => { }}
                />
                <div class="extraInfoText">
                    *Will ignore all options for custom map generation, please use Smart Generate*
                </div>
                <div class="options">
                    <table>
                        <tbody>
                            <tr>
                                <td>6 & 8 can touch</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="goodNumbersCanTouch"
                                        checked={optionsState.goodNumbersCanTouch}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>2 & 12 can touch</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="badNumbersCanTouch"
                                        checked={optionsState.badNumbersCanTouch}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Same numbers can touch</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="sameNumbersCanTouch"
                                        checked={optionsState.sameNumbersCanTouch}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Same resources can touch</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        name="sameResourcesCanTouch"
                                        checked={optionsState.sameResourcesCanTouch}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <RoundedColoredButtonWithText text="Smart generate" color="#FF0000" onClick={handleSmartGenerate} callback={() => { }} />
                <RoundedColoredButtonWithText text="Regenerate numbers" color="#0015FF" onClick={() => { handleModularGenerateAndClear(false, true, false) }} callback={() => { }} />
                <RoundedColoredButtonWithText text="Regenerate tiles" color="#0015FF" onClick={() => { handleModularGenerateAndClear(true, false, false) }} callback={() => { }} />
                                <div class="darkModeSwitch">
                    <label class="switch">
                        <input
                            type="checkbox"
                            name="nightMode"
                            checked={nightMode}
                            onChange={() => setNightMode(!nightMode)}
                        />
                        <span class="slider round"></span>
                    </label>
                    <span class="darkModeLabel">Tile Switch</span>
                </div>
            </div>
        </div>
    );
}
