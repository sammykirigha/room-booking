import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Details from './pages/Details';
import Home from './pages/Home';

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/details/:id" component={Details} />
			</Switch>
		</div>
	);
};

export default App;
