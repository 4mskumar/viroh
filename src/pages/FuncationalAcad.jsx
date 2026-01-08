import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import StickyNav from '../components/Nav/StickyNav';

import ServiceNav from '../components/Services/ServiceNav'
import Footer from '../components/Footer/Footer'
import FunctionalHero from '../components/FuncationalAcadPage/FunctionalHero'

const FuncationalAcad = () => {
    const [showStickyNav, setShowStickyNav] = useState(false);
      
    useEffect(() => {
    const handleScroll = () => {
        setShowStickyNav(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className=''>
        <Nav />
        {showStickyNav && <StickyNav />}
        {/* <Carousel /> */}
        <FunctionalHero />
        <Footer />
    </div>
)
}

export default FuncationalAcad