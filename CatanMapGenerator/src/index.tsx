import { render } from 'preact';
import './index.less';
import { CatanMap } from './GUI/Containers/Map';


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
			
			{/*<OptionsPanel/>*/}

			<CatanMap badNumbersCanTouch={true} goodNumbersCanTouch={false} 
			sameNumbersCanTouch={true} sameResourcesCanTouch={true} randomGenerate={false}/>
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
