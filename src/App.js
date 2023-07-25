import logo from './logo.svg';
import './App.css';
import bgvid from './video/video.mp4'
import bvid from './video/vidd.mp4'
import bb from './video/wrld.mp4'
import WebsiteDatainside from './components/WebsiteData';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Stories from './components/Stories';
import { Story1 } from './components/Story1';
import About from './components/About';
import Pictures from './components/Pictures';

// import viddo from "./vidd.mp4"
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/stories' element={<Stories/>}></Route>
        <Route path='/stories/story1' element={<Story1/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/pictures' element={<Pictures/>}></Route>
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
