import React from 'react';
import { serviceTitle } from '../../data/servicesData';
import TiltedCard from '../TiltedCard';

const FALLBACK_COLORS = [
  { bg: '#FFB3B3', text: '#7A2020' }, // soft red
  { bg: '#FFD6A5', text: '#6B3E00' }, // pastel orange
  { bg: '#FFE599', text: '#5A4700' }, // pastel yellow
  { bg: '#C7F9CC', text: '#1B5E20' }, // mint green
  { bg: '#85E0C9', text: '#0A4F3A' }, // aqua mint
  { bg: '#B5EAD7', text: '#1D4D40' }, // pastel teal
  { bg: '#A0E7E5', text: '#0F4C5C' }, // soft cyan
  { bg: '#89D8F5', text: '#0C3D5A' }, // sky blue
  { bg: '#BDE0FE', text: '#1E3A5F' }, // baby blue
  { bg: '#B3C7F7', text: '#243B6B' }, // lavender blue
];

// Generates a solid-color square SVG as a data URI for imageSrc
const coloredSvg = (color) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="176" height="176"><rect width="176" height="176" fill="${color}"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const ServiceNav = () => {
  return (
    <div className="flex w-full flex-wrap px-6 md:px-20 lg:px-40 gap-8 justify-center py-10">
      {serviceTitle.map((val, ind) => {
        const { bg, text: textColor } = FALLBACK_COLORS[ind % FALLBACK_COLORS.length];

        return (
          <a
            key={ind}
            href={`/${val.path}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <TiltedCard
              imageSrc={coloredSvg(bg)}
              altText={val.title}
              containerHeight="176px"
              containerWidth="176px"
              imageHeight="176px"
              imageWidth="176px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div
                  style={{
                    width: '176px',
                    height: '176px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '16px',
                    boxSizing: 'border-box',
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: 1.4,
                      color: textColor,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {val.title}
                  </span>
                </div>
              }
            />
          </a>
        );
      })}
    </div>
  );
};

export default ServiceNav;