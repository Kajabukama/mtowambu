import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={ theme.bg }>
      <header className="App-header">
        <img src={ logo } alt="logo" width="250" className="logo"/>
        <h1>Mto wa Mbu <br/>Cultural Tourism</h1>
      </header>
    </div>
  );
}

const bg = require('./assets/imgs/bg.jpg');
const logo = require("./assets/imgs/logo-ctp.png");
const theme = {
  bg : {
    backgroundImage: 'url('+ bg +')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}
export default App;
