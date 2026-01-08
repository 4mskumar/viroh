import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import SlideInButton from '../Button/SlideInButton';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { serviceTitle } from '../../data/servicesData';

const Nav = () => {
  const [index, setIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const bottomBor = useRef([]);

  const handleMouseEnter = (ind) => {
    setIndex(ind);
    gsap.fromTo(
      bottomBor.current[ind],
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.3,
        ease: 'power2.out'
      }
    );
  };

  const handleMouseLeave = (ind) => {
    gsap.to(bottomBor.current[ind], {
      scaleX: 0,
      duration: 0.3,
      ease: 'power2.in'
    });
    setIndex(null);
  };

  return (
    <div className='w-full px-6 md:px-52 py-3 flex items-center justify-between relative z-50'>
      {/* Logo */}
      <div className='w-20 md:w-24'>
        <a href="/">
        <img
          className='w-full h-full object-cover'
          src='/images/virohlogo.jpeg'
          alt='logo'
          />
          </a>
      </div>

      {/* Desktop Nav */}
      {/* Desktop Nav */}
<div className='hidden relative md:flex text-lg font-inter tracking-tighter gap-16 text-navy font-bold items-center'>
  {['Home', 'About', 'Services', 'Contact'].map((val, ind) => {
    if (val === 'Services') {
      return (
        <div
          key={ind}
          className='relative'
          onMouseEnter={() => handleMouseEnter(ind)}
          onMouseLeave={() => handleMouseLeave(ind)}
        >
          <a
            href={`/${val}`}
            className='relative pb-1'
          >
            {val}
            <div
              ref={(el) => (bottomBor.current[ind] = el)}
              className='absolute bottom-0 left-0 h-[2px] w-full bg-crimson origin-left scale-x-0'
            ></div>
          </a>

          {/* Dropdown menu */}
          {index === ind && (
            <div className='absolute w-[300%] mt-2 py-2 px-3 rounded-md border bg-slate-100 flex flex-col gap-2 top-full left-0 shadow z-10'>
              {serviceTitle.map((val, subInd) => (
                <a
                  key={subInd}
                  className={`text-base font-medium ${
                    subInd !== serviceTitle.length - 1
                      ? 'border-b pb-2 border-slate-300'
                      : ''
                  }`}
                  href={`/${val.path}`}
                >
                  {val.title}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Normal nav items
    return (
      <a
        key={ind}
        href={`/${val}`}
        className='relative pb-1'
        onMouseEnter={() => handleMouseEnter(ind)}
        onMouseLeave={() => handleMouseLeave(ind)}
      >
        {val}
        <div
          ref={(el) => (bottomBor.current[ind] = el)}
          className='absolute bottom-0 left-0 h-[2px] w-full bg-crimson origin-left scale-x-0'
        ></div>
      </a>
    );
  })}
</div>


      {/* Mobile Hamburger */}
      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiX className='text-3xl text-navy' />
          ) : (
            <HiOutlineMenuAlt3 className='text-3xl text-navy' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden'>
          {['Home', 'About', 'Services', 'Contact'].map((val, ind) => (
            <a
              key={ind}
              href={`/${val}`}
              className='text-navy text-lg font-semibold'
              onClick={() => setMenuOpen(false)}
            >
              {val}
            </a>
          ))}
          <SlideInButton />
        </div>
      )}
    </div>
  );
};

export default Nav;
