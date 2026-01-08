import React from 'react';

const Mission = () => {
  return (
    <div className="w-full px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 2xl:px-60 py-20 bg-blue-50 flex flex-col items-center text-navy">
      <div className="w-16 sm:w-20">
        <img src="/images/logowotext.png" alt="logo" className="w-full h-auto object-contain" />
      </div>

      <h1 className="font-dm mt-5 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-center">
        Mission
      </h1>

      <div className="mt-7 space-y-6 text-base sm:text-lg font-inter font-medium text-center max-w-5xl">
        <p>
        <span className='font-bold'>VIROH: A place for overall development</span>, dedicated to supporting children with special needs, their families, educators, and mainstream teachers. With three core divisions—Intervention, Training, and Publication—VIROH nurtures learning, growth, and empowerment. We train compassionate professionals, strengthen life and academic skills, and publish practical resources to address real-world challenges in special education.
        </p>

        <p className="text-lg sm:text-xl italic underline">
          LET'S BE RESPONSIBLE AND CHANGE PEOPLE'S NEGATIVE & HOPELESS ATTITUDE TOWARDS DISABILITIES.
        </p>
      </div>
    </div>
  );
};

export default Mission;
