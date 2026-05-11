import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { serviceTitle } from "../../data/servicesData"; // Adjust the path as needed

const StickyNav = () => {
  const stickyRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveringServices, setHoveringServices] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      stickyRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
    );
  }, []);

  return (
    <div
      ref={stickyRef}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 md:px-52 py-2 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="w-20">
        <a href="/">
          <img
            className="w-full h-full object-cover"
            src="/images/virohlogo.jpeg"
            alt="logo"
          />
        </a>
      </div>

      {/* Desktop Nav */}
      {/* Desktop Nav */}
      <div className="hidden md:flex text-lg font-inter tracking-tighter gap-10 text-navy font-bold items-center">
        {["Home", "About", "Services", "Contact"].map((val, ind) => {
          if (val === "Services") {
            return (
              <div
                key={ind}
                className="relative"
                onMouseEnter={() => setHoveringServices(true)}
                onMouseLeave={() => setHoveringServices(false)}
              >
                <a
                  href="/Services"
                  className="hover:text-crimson transition duration-200"
                >
                  {val}
                </a>

                {/* Dropdown */}
                {hoveringServices && (
                  <div className="absolute w-[300%] mt-3 py-3 px-4 rounded-2xl border border-slate-200 bg-white flex flex-col gap-3 top-full left-0 shadow-2xl z-10">
                    {serviceTitle.map((val, subInd) => (
                      <a
                        key={subInd}
                        className={`text-base font-medium hover:text-crimson transition-colors ${
                          subInd !== serviceTitle.length - 1
                            ? "border-b pb-2 border-slate-200"
                            : ""
                        }`}
                        href={`/${val.path}`}
                      >
                        {val.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <a
              href={`/${val}`}
              key={ind}
              className="hover:text-crimson transition duration-200"
            >
              {val}
            </a>
          );
        })}

        {/* CTA Button */}
        <a href="/contact">
          <button className="bg-crimson text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:scale-105 hover:bg-navy transition-all duration-300">
            Free Counselling
          </button>
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiX className="text-3xl text-navy" />
          ) : (
            <HiOutlineMenuAlt3 className="text-3xl text-navy" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
          {["Home", "About", "Services", "Contact"].map((val, ind) => (
            <a
              key={ind}
              href={`/${val}`}
              className="text-navy text-lg font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {val}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default StickyNav;
