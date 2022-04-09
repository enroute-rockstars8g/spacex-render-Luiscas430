import React from 'react';
import './styles/App.css';
import { Mortydex } from './components/characters/component';
import { NavBar } from './components/navbar/component';

function App() {
  return (
    <>
    <NavBar />
    <div className="row">
      <div className="column"><Mortydex /></div>
      <div className="column"><Mortydex /></div>
      <div className="column"><Mortydex /></div>
    </div>
      

    </>
  );
}

export default App;
