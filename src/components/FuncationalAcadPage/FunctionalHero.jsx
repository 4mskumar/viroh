import React from 'react'

const FunctionalHero = () => {
    return (
        <div className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl md:text-5xl font-dm text-navy tracking-tight mb-8 text-center md:text-left">
                    Functional Academics
                </h1>
                <a href="/contact" className="text-base text-white font-semibold text-navy font-inter tracking-tight px-7 py-3 rounded-lg bg-mustard hover:bg-mustard/80 transition-all duration-300">Book now</a>
            </div>

            <div className="w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/3 h-full">
                        <img
                            src="/images/funstinalacad.png"
                            className="w-full h-full object-cover rounded-xl hover:rounded-[4rem] duration-700 transition-all"
                            alt="Special Education"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-5">
                        
                            <p
                                // key={index}
                                className="text-lg text-justify md:text-xl lg:text-2xl tracking-tight font-inter text-navy font-medium"
                            >
                                At Viroh, we focus on teaching practical academic skills tailored to real-life needs. Our Functional Academics program supports children in building essential literacy, numeracy, and daily living skills — enabling greater independence at home, school, and in the community. Learning is individualized, inclusive, and empowering.


                            </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunctionalHero