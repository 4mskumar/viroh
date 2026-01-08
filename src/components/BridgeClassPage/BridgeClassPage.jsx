import React from "react";

const BridgeClassPage = () => {
  return (
    <section className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
        <h1 className="text-3xl md:text-5xl font-dm text-navy tracking-tight">
          Bridge Classes
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
            src="/images/bridgeclass.png"
            alt="Bridge Classes at Viroh"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6 text-navy font-inter">

          <p className="text-lg md:text-xl leading-relaxed">
            Bridge Classes help academically weak children and children with
            special needs close learning gaps through personalised, supportive
            teaching. The focus is on strengthening core skills, adapting pace
            and methods, and rebuilding confidence—so children can progress
            steadily and move forward in their learning journey.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            At Viroh, learning is broken down step-by-step. Children are taught
            in a way that makes sense to them, without pressure or comparison,
            ensuring clarity, confidence, and readiness for the next stage of
            education.
          </p>

          {/* What We Do */}
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              What we do in Bridge Classes
            </h2>

            <ul className="space-y-3 text-lg md:text-xl">
              <li>
                • Identify individual learning gaps through detailed assessment
              </li>
              <li>
                • Re-teach core concepts in literacy and numeracy step-by-step
              </li>
              <li>
                • Use multisensory, child-centred teaching approaches
              </li>
              <li>
                • Strengthen pre-learning and foundational academic skills
              </li>
              <li>
                • Adapt pace, materials, and strategies to each child’s needs
              </li>
              <li>
                • Build confidence, independence, and learning readiness
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BridgeClassPage;
