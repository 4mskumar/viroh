import React from "react";
import { serviceTitle } from "../../data/servicesData";
import { Marquee } from "../ui/marquee";
import { motion } from "framer-motion";

const Services = () => {
  const scrollingItems = [...serviceTitle, ...serviceTitle];

  return (
    <div className="w-full relative overflow-hidden py-8 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40">
      <div className="w-20 sm:w-32 lg:w-40 absolute top-0 left-0 z-50 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="w-20 sm:w-32 lg:w-40 absolute top-0 right-0 z-50 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <Marquee pauseOnHover repeat={4} className="[--duration:90s]">
        {scrollingItems.map((service, index) => {
          const Icon = service.logo;

          return (
            <div
              key={index}
              className="mx-4 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm whitespace-nowrap"
            >
              <div
                className="flex items-center justify-center rounded-xl p-3"
                style={{
                  backgroundColor: `#${service.color}20`,
                }}
              >
                <Icon
                  className="w-8 h-8"
                  style={{ color: `#${service.color}` }}
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="font-inter text-base md:text-lg font-semibold text-navy tracking-tight">
                {service.title}
              </h3>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Services;
