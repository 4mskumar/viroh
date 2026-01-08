import React, { useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import gsap from 'gsap';

const Carousel = () => {

  const images = [
    {
      image: '/images/image1.png',
      head: 'This is a safe place to be who you are',
      para: 'You’re accepted, valued, and free to grow—just as you are.'
    },
    {
      image: '/images/image2.jpg',
      head: "It's okay to be different",
      para: 'We celebrate differences—they make us stronger.'
    },
    {
      image: '/images/image3.jpg',
      head: 'Disability is not inability',
      para: 'With the right support, every ability shines.'
    }
  ];
  
     
      
      useEffect(() => {
        gsap.to('#carousel', {
          scaleX: '100%',
          duration: 1,
          ease: 'power3 .inOut'
        })
      }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div id='carousel' className='scale-x-0  origin-center'>
      <Slider {...settings}>
        {images.map((val, ind) => (
          <div key={ind} className='w-full overflow-hidden relative h-[70vh]'>
            <div className='w-full h-full  flex flex-col justify-center text-white items-center'>
              <p className='text-3xl text-center text-mustard font-inter tracking-tighter z-[40]'>{val.para}</p>
              <h1 className='text-8xl text-center font-dm z-[40]'>{val.head}</h1>
            </div>
            <img
              src={val.image}
              className='w-full opacity-75 absolute z-0 top-0 left-0 h-full object-cover'
              alt=""
              style={{ zIndex: -1 }}
            />
            <div className='absolute inset-0 bg-black/50 w-full h-full' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
