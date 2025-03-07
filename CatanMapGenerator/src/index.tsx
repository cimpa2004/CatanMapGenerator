import { render } from 'preact';
import './index.less';
import { CatanMap } from './GUI/Containers/Map';


export function App() {
	return (
		<div>
			{/*<OptionsPanel/>*/}

			<CatanMap badNumbersCanTouch={false} goodNumbersCanTouch={true} 
			sameNumbersCanTouch={true} sameResourcesCanTouch={false} randomGenerate={false}/>
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
