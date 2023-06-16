import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainTable from './components/MainTable';

export default function App() {
  return (
    <div className="App">
      <body>
        <h1>Self-Checkout Board</h1>
        <button>Morning</button>
        <button>Lunchtime</button>
        <button>Evening</button>
        <button>Reset</button>
        <MainTable/>
      </body>
    </div>
  );
}