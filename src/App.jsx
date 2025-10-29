import { useState } from 'react'
import { useNavigate, Route, Routes } from 'react-router';

import './App.css'

import NavBar from './components/NavBar/NavBar';

function App() {
  
  return (
    <>
      <NavBar/>
      <h1>Helen Pastras Portfolio</h1>
      <h2>tba</h2>
      <Routes>
        <Route path="/" element={<main><h2>TLDR</h2></main>} />
      </Routes>
    </>
  )
};

export default App
