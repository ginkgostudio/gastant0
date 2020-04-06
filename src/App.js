import React from 'react';
import './App.css';
import Expense from './components/Expense';
import Cashin from './components/Cashin';
import Dashboard from './components/Dashboard';
import Invoice from './components/Invoice';
import AllExpenses from './components/AllExpenses'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomAppBar from './components/layout/BottomAppBar';

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<div className="App">
					<BottomAppBar />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/expense" component={Expense} />
						<Route path="/cashin" component={Cashin} />
						<Route path="/invoice" component={Invoice} />
						<Route path="/allexpenses" component={AllExpenses} />
					</Switch>
				</div>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
