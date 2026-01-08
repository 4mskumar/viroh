import React from "react";

const Sedu = () => {
  return (
    <section className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
        <h1 className="text-3xl md:text-5xl font-dm text-navy tracking-tight">
          Special Education
        </h1>

        <a
          href="/contact"
          className="inline-block text-base font-semibold font-inter px-7 py-3 rounded-lg bg-mustard text-navy hover:bg-mustard/80 transition"
        >
          Book now
        </a>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-14 items-start">
        
        {/* Image */}
        <div className="w-full lg:w-1/3">
          <img
            src="/images/specialEd.png"
            alt="Special Education support"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6 text-navy font-inter">
          
          <p className="text-lg md:text-xl leading-relaxed">
            Special education is designed to support children with diverse
            learning, developmental, emotional, physical, or behavioral needs—
            so they can learn, grow, and participate meaningfully alongside
            others.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Rather than forcing a child to fit into a rigid system, special
            education adapts teaching methods, curriculum, and environments to
            match how each child learns best.
          </p>

          {/* What makes it different */}
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              What makes special education different?
            </h2>

            <ul className="space-y-3 text-lg md:text-xl">
              <li>• Individualised support and personalised goals (IEPs)</li>
              <li>• Flexible and adaptive teaching strategies</li>
              <li>• Integrated therapy support (speech, occupational, behavioural)</li>
              <li>• Focus on strengths, not just difficulties</li>
              <li>• Emphasis on confidence, self-worth, and independence</li>
            </ul>
          </div>

          {/* Services */}
          <div className="mt-6 border-t border-navy/10 pt-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Academic Support Services at Viroh
            </h2>

            <ul className="space-y-3 text-lg md:text-xl">
              <li>
                • <span className="font-semibold">Functional Academics</span> – 
                Life-based learning for children with high support needs
              </li>
              <li>
                • <span className="font-semibold">School Readiness</span> – 
                Building foundations for smooth mainstream inclusion
              </li>
              <li>
                • <span className="font-semibold">Pre-Reading & Pre-Writing</span> – 
                Early literacy and writing readiness
              </li>
              <li>
                • <span className="font-semibold">Bridge Classes</span> – 
                Targeted support to close academic gaps
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sedu;
