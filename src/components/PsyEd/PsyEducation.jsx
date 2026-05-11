import React from "react";

const PsyEducation = () => {
  return (
    <div className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">
      <div className="flex justify-between items-center">

      <h1 className="text-4xl md:text-5xl font-dm text-navy tracking-tight mb-10 text-center md:text-left">
        Psycho-Educational Assessments
      </h1>
      <a
          href="/contact"
          className="inline-block text-base font-semibold font-inter px-7 py-3 rounded-lg bg-mustard text-navy hover:bg-mustard/80 transition"
        >
          Book now
        </a>
      </div>
      

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16">
        <div className="w-full lg:w-1/3 h-full">
          <img
            src="/images/psed.png"
            className="w-full h-full object-cover rounded-xl hover:rounded-[4rem] duration-700 transition-all"
            alt="Psycho Assessment"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-lg text-justify md:text-xl lg:text-2xl tracking-tight font-inter text-navy font-medium">
            Psycho-educational assessment is performed by registered clinical
            psychologists. The assessment identifies the areas of strength and
            weakness a child may face in academics.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-1/2">
          <p className="text-lg text-justify md:text-xl lg:text-2xl tracking-tight font-inter text-navy font-medium">
            It provides a learning profile and a deeper understanding of their
            educational abilities and areas of difficulty. It helps identify
            learning disabilities, difficulties, and other challenges affecting
            the learning process. At our centre, we not only identify the
            challenges but also guide you with the reasons and remedies for each
            concern your child may be facing.
          </p>
        </div>
        <div className="w-full lg:w-1/3 h-full">
          <img
            src="/images/psed2.png"
            className="w-full h-full object-cover rounded-xl hover:rounded-[4rem] duration-700 transition-all"
            alt="Psycho Analysis"
          />
        </div>
      </div>
    </div>
  );
};

export default PsyEducation;
