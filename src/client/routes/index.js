import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import Home from '../components/Home';
import ThreeD from '../components/ThreeD';
import Programming from '../components/Programming';
import Crafty from '../components/Crafty';
import Contact from '../components/Contact';
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
			<Route
				path='3d'
				component={ThreeD}
			/>
			<Route
				path='programming'
				component={Programming}
			/>
			<Route
				path='crafty'
				component={Crafty}
			/>
			<Route
				path='contact'
				component={Contact}
			/>
		</Route>
	</Router>
);

export default router;