import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar.jsx';
import Feature from './components/Feature.jsx';

import {Panel} from 'react-bootstrap';

class App extends React.Component {
    render(){
    	let data = ["es6", "react", "browserify", "react-bootstrap"];
        return(
        	<div>
	            <NavBar />
	        	<Panel header={<h3>Features</h3>} bsStyle="success">
	        		{data.map((obj, i) =>
	        			<Feature key={i} name={obj} />
	        		)}
	        	</Panel>
	        </div>
            );
    }
}

ReactDOM.render(<App />, document.getElementById('App'));


