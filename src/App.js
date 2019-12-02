import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Expense from './components/Expense';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Expense />
    </div>
  );
}


export default App;
