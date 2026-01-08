import React, { useState } from 'react';
import { serviceTitle } from '../../data/servicesData';

const ServiceNav = () => {
  const [index, setIndex] = useState(null);

  return (
    <div className="flex w-full flex-wrap px-6 md:px-20 lg:px-40 gap-8 justify-center py-10">
      {serviceTitle.map((val, ind) => {
        // const Icon = val.logo;

        return (
          <a
            key={ind}
            href={`/${val.path}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIndex(ind)}
            onMouseLeave={() => setIndex(null)}
            className="focus:outline-none"
          >
            <div
              style={{
                backgroundColor:
                  ind === index ? `#${val.hoverColor}` : `#${val.color}`,
              }}
              className="
                w-44
                h-44
                flex
                flex-col
                items-center
                justify-center
                text-center
                text-white
                font-semibold
                rounded-xl
                shadow-md
                transition
                duration-300
                ease-in-out
                hover:scale-105
                focus-visible:ring-4
                focus-visible:ring-black/20
              "
            >
              {/* <Icon className="text-3xl mb-3" aria-hidden="true" /> */}

              <span className="text-lg px-3 leading-snug">
                {val.title}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ServiceNav;
