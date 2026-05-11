import React from "react";
import Services from "../Services/Services";

const About = () => {
  return (
    <div data-scroll data-scroll-speed='0.2' className="w-full overflow-hidden flex flex-col px-6 md:px-20 lg:px-40 xl:px-72 py-20 md:py-32">
      
      {/* Logo & Tagline */}
      <div className="flex items-center gap-2">
        <img className="w-16 md:w-20" src="/images/logowotext.png" alt="viroh-logo" />
        <p className="font-inter tracking-tighter text-navy text-base md:text-lg font-semibold">
          <span className="font-bold">Viroh: </span>A Place for Overall Development
        </p>
      </div>

      {/* Heading */}
      <div className="mt-6 md:w-5/6 lg:w-2/3">
        <h1 className="text-4xl md:text-6xl font-dm text-navy font-semibold tracking-tight">
          About Us
        </h1>
      </div>

      {/* Body */}
      <div className="mt-6 md:mt-10 flex flex-col gap-4 md:w-5/6 font-inter text-base md:text-lg tracking-tight text-navy">
        <p className="text-justify">
          <span className="font-bold">VIROH: A Place for Overall Development</span> was established in 2014 with the vision of nurturing the unique abilities of children with special needs. Over the years, it has grown into a multidisciplinary organization empowering children, adolescents, and adults with developmental challenges to lead more independent, confident, and meaningful lives.
        </p>
        <p className="text-justify">
          We support individuals with <span className="font-bold">Autism Spectrum Disorder (ASD)</span>, <span className="font-bold">ADHD</span>, Intellectual Disability, Down Syndrome, Cerebral Palsy, Hearing & Visual Impairment, Learning Disabilities, Speech & Language Delays, and other developmental conditions.
        </p>
        <p className="text-justify">
          We believe in a <span className="font-bold">holistic and individualized approach</span> — where every child is understood, accepted, and guided according to their strengths. Our team works closely with families, schools, and caregivers to encourage growth in communication, academics, behaviour, social interaction, emotional well-being, and daily living skills.
        </p>
      </div>

      {/* Services List */}
      <div className="mt-8 md:w-5/6">
        <p className="font-inter font-semibold text-navy text-sm uppercase tracking-widest mb-4">
          Our Services Include
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
          {[
            "Occupational Therapy",
            "Speech & Language Therapy",
            "Behavioural Therapy",
            "Special Education",
            "Remedial Education",
            "Sensory Integration Therapy",
            "Play Therapy",
            "Psychological Counseling",
            "Parent Counseling & Guidance",
            "Social Skills Training",
            "Early Intervention Programs",
            "Life Skills & Functional Training",
            "Group Therapy Sessions",
            "Pre-vocational & Vocational Training",
            "Inclusive Education Support",
          ].map((service, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-navy flex-shrink-0" />
              <span className="font-inter text-navy text-sm md:text-base tracking-tight">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <p className="mt-8 md:w-5/6 font-inter text-base md:text-lg tracking-tight text-navy text-justify">
        Our aim is not only to provide therapy but to build <span className="font-bold">confidence, independence, and emotional resilience</span> in every individual. At VIROH, we strive to create an inclusive space where abilities are celebrated and every individual is empowered to reach their fullest potential.
      </p>

    </div>
  );
};

export default About;