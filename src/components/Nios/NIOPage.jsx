import React from "react";

const NIOPage = () => {
  return (
    <section className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
        <h1 className="text-3xl md:text-5xl font-dm text-navy tracking-tight">
          National Institute of Open Schooling (NIOS)
        </h1>

        <a
          href="/contact"
          className="inline-block text-base font-semibold font-inter px-7 py-3 rounded-lg bg-mustard text-navy hover:bg-mustard/80 transition"
        >
          Book now
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-14 items-start">

        {/* Image */}
        <div className="w-full lg:w-1/3">
          <img
            src="/images/nios.png"
            alt="NIOS academic support at Viroh"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6 text-navy font-inter">

          <p className="text-lg md:text-xl leading-relaxed">
            The National Institute of Open Schooling (NIOS) is a flexible
            education system in India designed for learners who need an
            alternative to regular schooling.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            NIOS allows children to learn at their own pace, choose subjects
            based on their strengths, and balance academics alongside therapy,
            health, or emotional needs.
          </p>

          {/* Why NIOS */}
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Why NIOS is valuable for children with special needs
            </h2>

            <ul className="space-y-3 text-lg md:text-xl">
              <li>• Flexible pace and curriculum suited to individual readiness</li>
              <li>• Reduced academic pressure with focus on understanding</li>
              <li>• Choice of academic and vocational subjects based on strengths</li>
              <li>• Therapy-friendly schedules that allow balance and consistency</li>
              <li>• Inclusive assessments with supportive accommodations</li>
              <li>• Government-recognised certification for higher education and employment</li>
            </ul>
          </div>

          {/* Programs */}
          <div className="mt-6 border-t border-navy/10 pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              NIOS programs supported at Viroh
            </h2>

            <ul className="space-y-3 text-lg md:text-xl">
              <li>
                • <span className="font-semibold">Open Basic Education (OBE)</span> – 
                Levels A, B, and C for foundational learning
              </li>
              <li>
                • <span className="font-semibold">Secondary Course</span> – 
                Equivalent to Class 10 with flexible subjects and exam schedules
              </li>
              <li>
                • <span className="font-semibold">Senior Secondary Course</span> – 
                Equivalent to Class 12 with academic and career-oriented streams
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NIOPage;
