import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav';
import StickyNav from '../components/Nav/StickyNav';
import EmbededMap from '../components/Map/EmbededMap';
import MovingAhead from '../components/Form/MovingAhead';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

const Contact = () => {
    const [showStickyNav, setShowStickyNav] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
        setShowStickyNav(window.scrollY > 100);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className='w-full min-h-screen'>
        <Nav />
        {showStickyNav && <StickyNav />}
        {/* <Carousel /> */}
        <MovingAhead />
        <EmbededMap />
        <Footer />
    </div>
  )
}

export default Contact