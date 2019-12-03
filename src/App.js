import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Expense from './components/Expense';
import 'materialize-css/dist/css/materialize.min.css';

function App(){
  return(

      <div className="App">
      <Navbar />
      <Expense />
      </div>
    );
}

export default App;
