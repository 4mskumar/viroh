import React, { useEffect, useState } from 'react'
import NIOPage from '../components/Nios/NIOPage';
import Carousel from '../components/Carousel/Carousel';
import StickyNav from '../components/Nav/StickyNav';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const NIOS = () => {
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
          <NIOPage />
          <Footer />
      </div>
  )
}

export default NIOS