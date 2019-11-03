import React from 'react';
import './App.css';
import HomePage from './components/pages/Home/home-page';
import Footer from './components/shared/footer/footer';

function App() {
  return (
    <div className="main-wrapper">
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
