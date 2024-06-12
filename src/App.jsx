import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  return (
    <div className="App">
      <>
        <Navbar />
        <Body />
      </>
    </div>
  )
}

export default App