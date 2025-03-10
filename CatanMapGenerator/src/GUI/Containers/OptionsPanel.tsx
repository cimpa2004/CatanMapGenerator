import "./OptionsPanel.less";
import { RoundedColoredButtonWithText } from "../Buttons/RoundedColoredButtonWithText";
import { useState } from "preact/hooks"; 
import { OptionsState } from "../..";

type OptionPanelProps = {
    options: OptionsState;
    setOptions: (options: OptionsState) => void;
};


export function OptionsPanel({ options, setOptions }: Readonly<OptionPanelProps>) {
    // Use state to track options properly
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
        setOptionsState((prev) => ({ ...prev, [target.name]: target.checked }));
    };

    const handleSmartGenerate = () => {
        setOptions({ ...optionsState, _updateTime: Date.now() });
    };
    const handleModularGenerateAndClear = (_onlyTiles:boolean,_onlyNumbers:boolean,_clear:boolean) => {
        setOptions({ ...optionsState, onlyTiles:_onlyTiles,onlyNumbers:_onlyNumbers,clear:_clear});
    };

    return (
        <div class="optionsPanel">
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
            <RoundedColoredButtonWithText text="Regenerate numbers" color="#0015FF" onClick={() => {handleModularGenerateAndClear(false,true,false)}} callback={() => { }} />
            {/* does this even make sense?  */}
            <RoundedColoredButtonWithText text="Regenerate tiles" color="#0015FF" onClick={() => {handleModularGenerateAndClear(true,false,false) }} callback={() => { }} />
            <RoundedColoredButtonWithText text="Clear" color="#FF0000" onClick={() => {handleModularGenerateAndClear(false,false,true) }} callback={() => { }} />
        </div>
    );
}
