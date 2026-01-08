import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav';
import StickyNav from '../components/Nav/StickyNav';
import PsyEducation from '../components/PsyEd/PsyEducation';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

const PsyEd = () => {
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
        <PsyEducation />
        <Footer />
    </div>
  )
}

export default PsyEd