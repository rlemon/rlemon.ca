import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import Home from '../components/Home';
const router = (
	<Router
		history={browserHistory}
	>
		<Route
			path='/'
			component={Layout}
		>
			<IndexRoute
				key='router-home'
				component={Home}
			/>
		</Route>
	</Router>
);

export default router;