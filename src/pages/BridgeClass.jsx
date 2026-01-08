import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav'
// import StickyNav from '../components/StickyNav/StickyNav'
import Footer from '../components/Footer/Footer'
import BridgeClassPage from '../components/BridgeClassPage/BridgeClassPage';
import StickyNav from '../components/Nav/StickyNav';

const BridgeClass = () => {
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
        <BridgeClassPage />
        <Footer />
    </div>
)
}

export default BridgeClass