import React from "react";
import { LuHeartHandshake } from "react-icons/lu";
import { FaHandHoldingHeart } from "react-icons/fa";
import Services from "../Services/Services";

const About = ({}) => {
  return (
    <div data-scroll data-scroll-speed='0.2' className="w-full overflow-hidden flex flex-col px-6 md:px-20 lg:px-40 xl:px-72 py-20 md:py-32">
      {/* Logo & Tagline */}
      <div className="flex items-center gap-2">
        <img
          className="w-16 md:w-20"
          src="/images/logowotext.png"

          alt="viroh-logo"
        />
        <p className="font-inter tracking-tighter text-navy text-base md:text-lg font-semibold">
          <span className="font-bold ">Viroh: </span>Overall place for development
        </p>
      </div>

      {/* About Us Section */}
      <div className="mt-6 md:w-5/6 lg:w-2/3">
        <h1 className="text-4xl md:text-6xl font-dm text-navy font-semibold tracking-tight">
          About Us
        </h1>
        <p className="font-inter mt-6 md:mt-10 text-justify text-base md:text-lg tracking-tight text-navy">
          <span className="font-bold">VIROH: a place for overall development</span> was formed in 2014 with aim of
          nurturing the abilities of children with special needs.
        </p>
        <p className="font-inter mt-4 md:mt-10 text-justify text-base md:text-lg tracking-tight text-navy">
          Gradually, it has grown into an organization which is empowering
          children, adolescents and adults with special needs. We support
          individuals with autism spectrum disorder <span className="font-bold">(ASD)</span>, attention deficit
          hyperactivity disorder <span className="font-bold">(ADHD)</span>, intellectual disability, down syndrome,
          cerebral palsy, hearing impairment, visual impairment, and other
          developmental disabilities.
        </p>
      </div>

      {/* Icons Section */}
      
      
    </div>
  );
};

export default About;
