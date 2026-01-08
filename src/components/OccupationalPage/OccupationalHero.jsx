import React from "react";

const OccupationalHero = () => {
  return (
    <section className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
        <h1 className="text-3xl md:text-5xl font-dm text-navy tracking-tight">
          Occupational Therapy
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
            src="/images/occtherapy.png"
            alt="Occupational therapy session"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6 text-navy font-inter">

          <p className="text-lg md:text-xl leading-relaxed">
            Occupational Therapy (OT) helps children develop the skills needed
            for everyday life, so they can participate more independently at
            home, school, and in the community.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Occupational therapy focuses on <span className="font-semibold">doing</span> —
            helping a child learn how to play, learn, care for themselves, and
            manage daily routines comfortably and confidently.
          </p>

          {/* OT helps with */}
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              What does occupational therapy help with?
            </h2>

            <ul className="space-y-3 text-lg md:text-xl">
              <li>• Fine motor skills (writing, cutting, buttoning, grasping)</li>
              <li>• Sensory processing (noise, touch, movement, textures)</li>
              <li>• Attention and self-regulation</li>
              <li>• Daily living skills (eating, dressing, toileting)</li>
              <li>• Motor planning and coordination</li>
              <li>• Emotional and behavioural regulation</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Speech Therapy Section */}
      <div className="mt-20 border-t border-navy/10 pt-14">

        <h2 className="text-3xl md:text-4xl font-dm text-navy tracking-tight mb-6">
          Speech, Language & Communication Therapy
        </h2>

        <div className="flex flex-col gap-6 text-navy font-inter max-w-3xl">

          <p className="text-lg md:text-xl leading-relaxed">
            Speech, Language & Communication Therapy (SLCT) helps children
            understand, express, and use communication effectively—so they can
            connect, learn, and participate confidently in daily life.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            It supports children in speaking, understanding language, using
            gestures or alternative communication, and interacting socially in
            ways that suit their abilities and needs.
          </p>

          <div className="mt-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              What does this therapy help with?
            </h3>

            <ul className="space-y-3 text-lg md:text-xl">
              <li>• Speech clarity (sounds, pronunciation, fluency)</li>
              <li>• Language skills (understanding, vocabulary, sentences)</li>
              <li>• Functional communication (asking, expressing needs)</li>
              <li>• Social communication (eye contact, turn-taking)</li>
              <li>• Alternative communication (AAC, visuals, gestures)</li>
              <li>• Feeding and oral-motor skills (where appropriate)</li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
};

export default OccupationalHero;
