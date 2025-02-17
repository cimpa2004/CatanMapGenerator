import { render } from 'preact';
import { RoundedColoredButtonWithText } from './Buttons/RoundedColoredButtonWithText';
import './index.less';
import { DesertHex } from './Hexagons/DesertHex';
import { FieldHex } from './Hexagons/FieldHex';
import { ForestHex } from './Hexagons/ForestHex';
import { HillHex } from './Hexagons/HillHex';
import { MountainHex } from './Hexagons/MountainHex';
import { PastureHex } from './Hexagons/Pasture';
import { OptionsPanel } from './Containers/OptionsPanel';


export function App() {
	return (
		<div>
			{/*<RoundedColoredButtonWithText text="Hello" color="red" onClick={() => {}} callback={() => {}} />
			<DesertHex/>
			<FieldHex/>
			<ForestHex/>
			<HillHex/>
			<MountainHex/>
			<PastureHex/>*/}
			<OptionsPanel/>
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
