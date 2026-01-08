import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import StickyNav from '../components/Nav/StickyNav'
import Footer from '../components/Footer/Footer'
import ParentHero from '../components/ParentPage/ParentHero'

const ParentPage = () => {
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
        <ParentHero />
        <Footer />
    </div>
)
}

export default ParentPage