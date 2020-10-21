import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import BeerCard from './Components/BeerCard/BeerCard'
import './App.css';
function App() {
  
  return (
    <div className="App">
    
    <Header/>
    <Main/>
    <BeerCard/>
    </div>
  );
}

export default App;
