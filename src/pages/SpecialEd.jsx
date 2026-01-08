import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav';
import StickyNav from '../components/Nav/StickyNav';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import Sedu from '../components/SpedcialEd/Sedu';

const SpecialEd = () => {
        const [showStickyNav, setShowStickyNav] = useState(false);
    
        useEffect(() => {
        const handleScroll = () => {
            setShowStickyNav(window.scrollY > 100);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        }, []);
  return (
    <div>
                <Nav />
        {showStickyNav && <StickyNav />}
        {/* <Carousel /> */}
        <Sedu />
        <Footer />
    </div>
  )
}

export default SpecialEd