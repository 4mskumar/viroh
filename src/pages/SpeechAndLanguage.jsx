import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav';
import StickyNav from '../components/Nav/StickyNav';
import Footer from '../components/Footer/Footer';
import SpeechHero from '../components/SpeechPage/SpeechHero';

const SpeechAndLanguage = () => {
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
        <SpeechHero />
        <Footer />
    </div>
)
}

export default SpeechAndLanguage
