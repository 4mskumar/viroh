import React from 'react'

const SpeechHero = () => {
  return (
    <div className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">
      <div className="flex justify-between items-center">
      <h1 className="text-3xl md:text-5xl font-dm text-navy tracking-tight mb-8 text-center md:text-left">
        Speech and Language
      </h1>
      <a href="/contact" className="text-base text-white font-semibold text-navy font-inter tracking-tight px-7 py-3 rounded-lg bg-mustard hover:bg-mustard/80 transition-all duration-300">Book now</a>
      </div>

      <div className="w-full mt-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 h-full">
            <img
              src="/images/speech.png"
              className="w-full h-full object-cover rounded-xl hover:rounded-[4rem] duration-700 ease-in-out transition-all"
              alt="NIOS Support at Viroh"
            />
          </div>

          {/* Text Section */}
          {/* Text Section */}
<div className="w-full lg:w-1/2">
  <h2 className="text-2xl md:text-3xl font-semibold text-navy font-inter tracking-tight mb-6">
    Building Communication with Confidence
  </h2>

  <p className="text-lg text-justify md:text-xl lg:text-2xl tracking-tight font-inter text-navy font-medium leading-relaxed">
    At Viroh, our Speech and Language Therapy program focuses on helping
    individuals develop effective communication skills and improve their
    ability to express themselves confidently. We support children,
    adolescents, and individuals with speech delays, language disorders,
    communication difficulties, articulation concerns, and social
    communication challenges in a compassionate and encouraging environment.
  </p>

  <p className="text-lg text-justify md:text-xl lg:text-2xl mt-6 tracking-tight font-inter text-navy font-medium leading-relaxed">
    Our therapy sessions are personalized according to individual needs and
    aim to strengthen speech clarity, language development, listening skills,
    comprehension, and social interaction. Through structured interventions
    and engaging activities, we help individuals build confidence,
    independence, and meaningful communication in their everyday lives.
  </p>
</div>
        </div>
      </div>
    </div>

  )
}

export default SpeechHero
