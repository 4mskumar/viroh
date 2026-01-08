import React from "react";

const PreVocationalHero = () => {
  return (
    <section className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
        <h1 className="text-3xl md:text-5xl font-dm text-navy tracking-tight">
          Pre-Vocational Training
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
            src="/images/prevoc.png"
            alt="Pre-Vocational Training at Viroh"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6 text-navy font-inter">

          <p className="text-lg md:text-xl leading-relaxed">
            Pre-vocational training prepares children with special needs for
            future work and independent living by developing essential work
            readiness skills, functional abilities, and positive work habits.
            At Viroh, learning is practical, structured, and aligned with real
            life.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Through guided activities and routine-based learning, children are
            supported to build confidence, responsibility, and independence—
            laying the foundation for vocational training and meaningful
            participation in daily life.
          </p>

          {/* Focus Areas */}
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              What we focus on
            </h2>

            <ul className="space-y-3 text-lg md:text-xl">
              <li>• Following instructions and completing tasks</li>
              <li>• Attention, time awareness, and task endurance</li>
              <li>• Fine-motor and functional hand skills</li>
              <li>• Communication and social interaction in work settings</li>
              <li>• Behaviour regulation, flexibility, and responsibility</li>
              <li>• Simple vocational and daily-life activities</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreVocationalHero;
