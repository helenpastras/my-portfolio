import { useState } from 'react'
import { useNavigate, Route, Routes } from 'react-router';

import './App.css'

// imports

import NavBar from './components/NavBar/NavBar';
import About from './components/About/AboutMe';
import Spotlight from './components/Spotlight/Spotlight';
import EngProjects from './components/Projects/EngProjects';
import PrdProjects from './components/Projects/PrdProjects';
import Playbook from './components/Playbook/Playbook';
import Music from './components/Music/MusicAndInspo';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

function App() {
  
  return (
    <>
      <NavBar/>
      <main>
        <About />
        <Spotlight />
        <EngProjects />
        <PrdProjects />
        <Playbook />
        <Music />
        <Resume />
        <Contact />
      </main>
      <Routes>
        <Route path="/" element={<main><h2>TLDR</h2></main>} />
      </Routes>
    </>
  )
};

export default App
