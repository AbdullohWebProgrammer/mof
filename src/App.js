import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import SideBar from './components/sideBar';
import Header from './components/header';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Storage from './components/storage';
import Shopping from './components/shopping';
import DefaultPage from './components/defaultPage';

function App() {
  window.addEventListener('load', () => {    
    let vh = window.outerHeight * 0.01;
    document.documentElement.style.setProperty('--height', `${vh}px`);
    if(window.innerWidth < 500) {      
      document.documentElement.style.setProperty('--sideBar', '0px');
    }
  });
  window.addEventListener('resize', () => {
    let vh = window.outerHeight * 0.01;
    document.documentElement.style.setProperty('--height', `${vh}px`);
    if(window.innerWidth < 500) {      
      document.documentElement.style.setProperty('--sideBar', '0px');
    }
  });
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={[<SideBar/>, <Header/>, <Navbar/>, <Dashboard/>]}/>
        <Route path="/storage" element={[<SideBar/>, <Header/>, <Navbar/>, <Storage/>]}/>
        <Route path="/shopping" element={[<SideBar/>, <Header/>, <Navbar/>, <Shopping/>]}/>
        <Route path="*" element={[<SideBar/>, <Header/>, <Navbar/>, <DefaultPage/>]}/>
      </Routes>
    </Router>
  );
}

export default App;
