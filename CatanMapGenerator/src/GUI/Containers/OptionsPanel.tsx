import "./OptionsPanel.less";
import {RoundedColoredButtonWithText} from"../Buttons/RoundedColoredButtonWithText"
type OptionPanelProps = {

};

export function OptionsPanel({}: Readonly<OptionPanelProps>) {
    return <div class="optionsPanel">
        <RoundedColoredButtonWithText text="Random Generate" color="#0015FF" onClick={() => {}} callback={() => {}} />
        <div class="extraInfoText">*will ignore all options for costum map generation please use smart generate</div>
        <div class="options">
            <table>
            <thead>{/* only here so sonarint does not cry 
            !!Should remove padding couse it adds empty space!!*/} 
                <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Good numbers can touch</td>
                    <td><input type="checkbox"/></td>
                </tr>
                <tr>
                    <td>Bad numbers can touch</td>
                    <td><input type="checkbox"/></td>
                </tr>
                <tr>
                    <td>Same numbers can touch</td>
                    <td><input type="checkbox"/></td>
                </tr>
                <tr>
                    <td>Same resources can touch</td>
                    <td><input type="checkbox"/></td>
                </tr></tbody>
            </table>
        </div>
        <RoundedColoredButtonWithText text="Smart generate" color="#FF0000" onClick={() => {}} callback={() => {}} />
        <RoundedColoredButtonWithText text="Regenerate numbers" color="#0015FF" onClick={() => {}} callback={() => {}} />
        <RoundedColoredButtonWithText text="Regenerate tiles" color="#0015FF" onClick={() => {}} callback={() => {}} />
        <RoundedColoredButtonWithText text="Clear" color="#FF0000" onClick={() => {}} callback={() => {}} />
    </div>
}