import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom';
import Lenis from 'lenis'
import LocomotiveScroll from 'locomotive-scroll';
import Contact from './pages/Contact';
import PsyEd from './pages/PsyEd';
import SpecialEd from './pages/SpecialEd';
import NIOS from './pages/NIOS';
import SkillPage from './pages/SkillPage';
import CounsellingPage from './pages/CounsellingPage';
import ServicesPage from './pages/ServicesPage';
import DonateNow from './pages/DonateNow';
import SpeechAndLanguage from './pages/SpeechAndLanguage';
import BridgeClass from './pages/BridgeClass';
import PreVocationalPage from './pages/PreVocationalPage';
import PreReading from './pages/PreReading';
import FuncationalAcad from './pages/FuncationalAcad';
import OccupationalTherapyPage from './pages/OccupationalTherapyPage';
import MakeupPage from './pages/MakeupPage';
import ParentPage from './pages/ParentPage';
import Counselling from './pages/Counselling';

const App = () => {

  // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

const locomotiveScroll = new LocomotiveScroll()

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  // console.log(e);
});

  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/about' element={<AboutPage />}/>              
        <Route path='/contact' element={<Contact />}/>              
        <Route path='/psycho-educational' element={<PsyEd />}/>              
        <Route path='/special-education' element={<SpecialEd />}/>              
        <Route path='/nios' element={<NIOS />}/>              
        <Route path='/skill-training' element={<SkillPage />}/>              
        <Route path='/counseling' element={<CounsellingPage />}/>              
        <Route path='/donate' element={<DonateNow />}/>              
        <Route path='/speech-language' element={<SpeechAndLanguage />}/>              
        <Route path='/bridge-classes' element={<BridgeClass />}/>              
        <Route path='/pre-vocational' element={<PreVocationalPage />}/>              
        <Route path='/pre-reading' element={<PreReading />}/>              
        <Route path='/functional-academics' element={<FuncationalAcad />}/>              
        <Route path='/occupational-therapy' element={<OccupationalTherapyPage />}/>              
        <Route path='/vocational-training' element={<MakeupPage />}/>              
        <Route path='/parental-child-counseling' element={<ParentPage />}/>              
        <Route path='/counseling-home' element={<Counselling />}/>              
      </Routes>
    </div>
  );
};

export default App;
