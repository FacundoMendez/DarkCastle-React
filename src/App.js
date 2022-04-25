import React from 'react';
import './App.css';
import PreloadCarga from './components/home/preload/PreloadCarga';
import HeaderMain from './components/home/header/HeaderMain';
import Main from './components/home/main/Main';

function App() {
  return (
    <div className='app'>

      <div className='header'>
          <PreloadCarga />
          <HeaderMain />
      </div>

      <div className='Main'>
          <Main />
      </div>

    </div>

  )
}

export default App;
