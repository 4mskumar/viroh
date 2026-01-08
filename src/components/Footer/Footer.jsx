import React from "react";
import { serviceTitle } from "../../data/servicesData";

const Footer = () => {
  return (
    <div className="relative w-full px-6 md:px-16 lg:px-36 xl:px-72 py-16 bg-black text-white">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?cs=srgb&dl=pexels-cdc-library-3992949.jpg&fm=jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 justify-between">
        {/* Left: Logo and Socials */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          <img src="/images/logowotext.png" className="w-24 md:w-28" alt="Viroh Logo" />
          <p className="text-base md:text-lg font-inter tracking-tight font-semibold">
            Let's tap and manifest our unlimited potential.
          </p>
          <div className="flex gap-6 mt-2 text-2xl">
            <a
              href="https://www.facebook.com/viroh.development"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition"
            >
              fb
            </a>
            <a
              href="https://instagram.com/viroh_development?igshid=754j54qxgr7a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition"
            >
              in
            </a>
          </div>
        </div>

        {/* Middle: Important Links */}
        <div className="lg:w-1/3">
          <h1 className="font-dm text-2xl md:text-3xl tracking-tighter mb-4">
            Important Links
          </h1>
          <div className="flex flex-col gap-2">
            {serviceTitle.map((val, ind) => (
              <a
                key={ind}
                className="cursor-pointer hover:text-mustard transition-all font-inter tracking-tight"
                href={`/${val.path.toLowerCase()}`}
              >
                {val.title}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="lg:w-1/3">
          <h1 className="font-dm text-2xl md:text-3xl tracking-tighter mb-4">
            Contact Us
          </h1>
          <p className="text-base md:text-lg font-inter tracking-tight mb-3">
            <strong>VIROH:</strong> A place for overall development <br />
            A-7, First Floor, Prabhat Apartments, near HDFC Bank, Devli Road, Khanpur, New Delhi - 110062
          </p>
          <div className="text-base md:text-lg font-inter tracking-tight">
            <p className="font-semibold">Contact:</p>
            <p>
              <a href="tel:+918700736147" className="hover:text-mustard transition-all font-inter tracking-tight">87007 36147</a> <br />
              <a href="tel:+919310776947" className="hover:text-mustard transition-all font-inter tracking-tight">93107 76947</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
