import React from "react";
import Form from "./Form";
import { Separator } from "../ui/separator";
import SpotlightCard from "../SpotlightCard";

const MovingAhead = () => {
  const message = encodeURIComponent(
    "Hello, I want to know more about counselling sessions.",
  );

  const whatsappLink = `https://wa.me/8700736147?text=${message}`;
  return (
    <div
      data-scroll
      data-scroll-speed="-0.05"
      className="px-6 md:px-20 lg:px-72 py-20"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <img src="/images/logowotext.png" className="w-16 md:w-20" alt="" />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold font-dm tracking-tight text-navy text-center">
          Moving Ahead Together
        </h1>
        <p className="font-inter text-navy font-medium text-center text-sm md:text-md mt-3 max-w-2xl">
          We use a humanistic, child-centred therapy approach to help children
          with diverse needs grow in confidence while feeling deeply loved and
          accepted.
        </p>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* WhatsApp Card */}
        <SpotlightCard className="flex flex-col  items-center justify-center gap-3 p-6 min-w-[180px]">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <img src="/images/wa.svg" className="w-9 h-9" alt="WhatsApp" />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-zinc-200">Chat with us</p>
            <p className="text-xs text-gray-200 mt-0.5">
              We usually reply instantly
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            // className="px-6 py-3 rounded-full bg-[#25D366] text-white font-medium"
          >
            <span className="mt-1 px-4 py-1.5 rounded-full bg-green-500 text-white text-xs font-semibold tracking-wide">
              Open WhatsApp
            </span>
          </a>
        </SpotlightCard>

        {/* OR Separator */}
        <div className="flex lg:flex-col items-center gap-3">
          <Separator
            className="w-16 lg:w-px lg:h-16"
            orientation="horizontal"
          />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            or
          </span>
          <Separator
            className="w-16 lg:w-px lg:h-16"
            orientation="horizontal"
          />
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center gap-2">
          <img
            className="object-cover h-[10rem] w-[10rem] rounded-xl shadow-md"
            src="/images/qr.jpeg"
            alt="QR Code"
          />
          <p className="text-xs text-gray-500 font-medium">Scan to connect</p>
        </div>
      </div>
    </div>
  );
};

export default MovingAhead;
