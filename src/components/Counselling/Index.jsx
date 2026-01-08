import React from "react";

const Index = () => {
  return (
    <div className="px-6 md:px-20 lg:px-36 xl:px-72 py-20">
      <div className="flex justify-between items-center">
      <h1 className="text-3xl md:text-5xl font-dm text-navy tracking-tight mb-8 text-center md:text-left">
        Counseling Sessions
      </h1>
      <a href="/contact" className="text-base text-white font-semibold text-navy font-inter tracking-tight px-7 py-3 rounded-lg bg-mustard hover:bg-mustard/80 transition-all duration-300">Book now</a>
      </div>
      <div className="w-full mt-10">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-navy font-inter tracking-tighter mb-6">
              Counseling Sessions at Viroh
            </h2>
            <p className="text-base text-justify md:text-xl tracking-tighter font-inter text-navy font-medium">
              At Viroh, we believe emotional wellness is key to every child’s success. Our counseling sessions provide a safe and nurturing space where children and parents can openly express themselves, address challenges, and build stronger relationships under the guidance of our compassionate counselors.
            </p>
            <p className="text-base text-justify md:text-xl mt-6 tracking-tighter font-inter text-navy font-medium">
              These sessions are tailored to each family's needs, focusing on emotional regulation, behavioral support, and strengthening communication. By involving both children and parents, we ensure a collaborative approach that fosters understanding, growth, and lasting positive change at home and in school.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/counseling.png"
              className="w-full rounded-xl hover:rounded-[4rem] duration-700 ease-in-out transition-all object-cover"
              alt="Counseling"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
