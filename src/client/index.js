import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';

import stores from './stores';
import routes from './routes';

import './styles/styles.scss';

const root = document.createElement('div');
root.id = 'app-root';
root.classList.add('app-root');
document.body.appendChild(root);

configure({ enforceActions: 'always' });

ReactDOM.render(
	<Provider {...stores}>
		{routes}
	</Provider>, 
	root
);