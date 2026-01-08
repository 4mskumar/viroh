import React from 'react'

const MakeupHero = () => {
    return (
        <div className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl md:text-5xlw-1/2 font-dm text-navy tracking-tight mb-8 text-center md:text-left">
                    Vocational Training in Makeup Artistry & Hair Dressing
                </h1>
                <a href="/contact" className="text-base text-white font-semibold text-navy font-inter tracking-tight px-7 py-3 rounded-lg bg-mustard hover:bg-mustard/80 transition-all duration-300">Book now</a>
            </div>

            <div className="w-full mt-5">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/3 h-full">
                        <img
                            src="https://thumbs.dreamstime.com/b/makeup-courses-abstract-concept-vector-illustration-artist-training-beauty-treatment-school-certificate-cosmetics-masterclass-270073205.jpg"
                            className="w-full h-full object-cover rounded-xl hover:rounded-[4rem] duration-700 transition-all"
                            alt="VoaattonionTraining in Make p Araistry & Hair Dressiigng in Makeup Artistry & Hair Dressing"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-5">
                        
                            <p
                                // key={index}
                                className="text-lg text-justify md:text-xl lg:text-2xl tracking-tight font-inter text-navy font-medium"
                            >
                                At Viroh, we empower individuals with hands-on training in makeup artistry and hair dressing — combining creativity with skill development. Our vocational program includes grooming basics, hairstyling, makeup techniques, hygiene practices, and client interaction. With personalized guidance and practical sessions, learners gain the confidence and competence to explore employment or independent work in the beauty industry.


                            </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeupHero