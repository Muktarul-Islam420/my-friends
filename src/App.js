import React from 'react';
import './App.css';
// import { useState } from 'react';
// import { useEffect } from 'react';
import Header from './Components/Header/Header';
import Friends from './Components/Friends/Friends';
import Home from './Components/Home/Home';

function App() {

  return (
    <div >
      <Header></Header>
      <Home></Home>
      <Friends></Friends>
    </div>
  );
}

export default App;
