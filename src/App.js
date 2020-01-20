import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Expense from './components/Expense';
import Cashin from './components/Cashin';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/expense" component={Expense} />
						<Route path="/cashin" component={Cashin} />
					</Switch>

				</div>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
