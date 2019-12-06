import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Expense from './components/Expense';
import Cashin from './components/Cashin';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App(){
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/expense" component={Expense} />
          <Route path="/cashin" component={Cashin} />
        </Switch>
        
      </div>
    </BrowserRouter>
    
    );
  }
  
  export default App;
  