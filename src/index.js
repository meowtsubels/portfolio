import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.css';
import Home from './components/Home.js';
import exp from './assets/contents/exp_content';
import craft from './assets/contents/craft_contents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Home 
		exp={exp} 
		craft={craft}
	/>,
	document.getElementById('root'));
registerServiceWorker();
