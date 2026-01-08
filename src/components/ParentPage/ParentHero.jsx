import React from "react";

const ParentHero = () => {
  return (
    <section className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
        <h1 className="text-3xl md:text-5xl font-dm text-navy tracking-tight">
          Positive Parent Coaching
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
            src="https://img.freepik.com/free-vector/hand-drawn-co-parenting-illustration_23-2150778279.jpg?semt=ais_hybrid&w=740"
            alt="Parent coaching and family support"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6 text-navy font-inter">

          <p className="text-lg md:text-xl leading-relaxed">
            At Viroh, we believe parents are a child’s strongest support system.
            Parent coaching empowers caregivers with practical tools, emotional
            guidance, and personalised strategies to better understand their
            child’s needs.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Rather than focusing only on the child, this program strengthens
            parent capacity—helping caregivers respond with confidence, clarity,
            and consistency in everyday situations.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            By aligning strategies used in therapy with the home environment,
            parent coaching reduces stress, improves outcomes, and supports
            lasting progress in a child’s development.
          </p>

          {/* Key Focus */}
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              How parent coaching helps
            </h2>

            <ul className="space-y-3 text-lg md:text-xl">
              <li>• Understanding a child’s behaviour and emotional needs</li>
              <li>• Building consistent routines and responses at home</li>
              <li>• Strengthening communication between parent and child</li>
              <li>• Reducing daily stress and uncertainty</li>
              <li>• Supporting therapy goals beyond the clinic</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParentHero;
