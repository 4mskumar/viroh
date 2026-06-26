import gsap from "gsap";
import React, { useRef, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";
import { serviceTitle } from "../../data/servicesData";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const bottomBor = useRef([]);

  const handleMouseEnter = (ind) => {
    setHoveredIndex(ind);

    gsap.fromTo(
      bottomBor.current[ind],
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.35,
        ease: "power3.out",
      },
    );
  };

  const handleMouseLeave = (ind) => {
    gsap.to(bottomBor.current[ind], {
      scaleX: 0,
      duration: 0.3,
      ease: "power3.inOut",
    });

    setHoveredIndex(null);
  };

  return (
  <header className="w-full sticky top-0 z-[999] border-b border-[#E9E1D7] relative overflow-visible">
    {/* Gradient Layer */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white" />

    {/* Blur Layer */}
    <div className="absolute inset-0 backdrop-blur-xl" />

    {/* ================= NAVBAR ================= */}
    <nav className="relative z-20 px-6 md:px-16 lg:px-28 xl:px-40 py-3 flex items-center justify-between">
      {/* LOGO */}
      <a href="/" className="w-20 md:w-24 shrink-0">
        <img
          className="w-full h-full object-cover"
          src="/images/virohlogo.jpeg"
          alt="Viroh Logo"
        />
      </a>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-12 text-[15px] font-inter font-medium text-[#2A2A2A]">
        {["Home", "About", "Services", "Contact"].map((val, ind) => {
          if (val === "Services") {
            return (
              <div
                key={ind}
                className="relative"
                onMouseEnter={() => handleMouseEnter(ind)}
                onMouseLeave={() => handleMouseLeave(ind)}
              >
                <button className="relative flex items-center gap-1 pb-1">
                  {val}

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      hoveredIndex === ind ? "rotate-180" : ""
                    }`}
                  />

                  <div
                    ref={(el) => (bottomBor.current[ind] = el)}
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#C48F6A] origin-left scale-x-0"
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 top-[140%] w-[340px] rounded-3xl border border-[#E8DED2] bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-4 transition-all duration-300 ${
                    hoveredIndex === ind
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="flex flex-col">
                    {serviceTitle.map((service, subInd) => {
                      const Icon = service.logo;

                      return (
                        <a
                          key={subInd}
                          href={`/${service.path}`}
                          className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-[#F8F4EE] ${
                            subInd !== serviceTitle.length - 1
                              ? "border-b border-[#F1EAE2]"
                              : ""
                          }`}
                        >
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: `#${service.color}20`,
                            }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{
                                color: `#${service.color}`,
                              }}
                            />
                          </div>

                          <p className="text-[15px] font-medium text-[#2A2A2A] group-hover:text-[#C48F6A] transition-colors">
                            {service.title}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <a
              key={ind}
              href={val === "Home" ? "/" : `/${val.toLowerCase()}`}
              className="relative pb-1"
              onMouseEnter={() => handleMouseEnter(ind)}
              onMouseLeave={() => handleMouseLeave(ind)}
            >
              {val}

              <div
                ref={(el) => (bottomBor.current[ind] = el)}
                className="absolute bottom-0 left-0 h-[2px] w-full bg-[#C48F6A] origin-left scale-x-0"
              />
            </a>
          );
        })}
      </div>

      {/* CTA */}
      <div className="hidden md:block">
        <a href="/counseling-home">
          <button className="px-6 py-3 rounded-full bg-[#D8B6A4] hover:bg-[#CFA18A] transition-all duration-300 text-sm font-semibold font-inter text-[#1F1F1F] hover:scale-[1.03]">
            Free Counselling
          </button>
        </a>
      </div>

      {/* MOBILE BUTTON */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-[#2A2A2A] z-30"
      >
        {menuOpen ? (
          <HiX className="text-3xl" />
        ) : (
          <HiOutlineMenuAlt3 className="text-3xl" />
        )}
      </button>
    </nav>

    {/* ================= MOBILE MENU ================= */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden relative border-t border-[#EFE7DD] overflow-y-auto max-h-[calc(100vh-80px)]"
        >
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white" />

          {/* Blur */}
          <div className="absolute inset-0 backdrop-blur-xl" />

          {/* Content */}
          <div className="relative z-20 px-6 py-6 flex flex-col gap-1">
            <a
              href="/"
              className="py-4 text-lg font-medium text-[#2A2A2A]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="/about"
              className="py-4 text-lg font-medium text-[#2A2A2A]"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            {/* Services */}
            <div className="border-y border-[#EFE7DD] py-2">
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="w-full flex items-center justify-between py-3 text-lg font-medium text-[#2A2A2A]"
              >
                Services

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    mobileServices ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-4 flex flex-col gap-2">
                      {serviceTitle.map((service, index) => {
                        const Icon = service.logo;

                        return (
                          <a
                            key={index}
                            href={`/${service.path}`}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-4 rounded-2xl px-3 py-3 hover:bg-[#F8F4EE] transition-all duration-300"
                          >
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{
                                backgroundColor: `#${service.color}20`,
                              }}
                            >
                              <Icon
                                className="w-5 h-5"
                                style={{
                                  color: `#${service.color}`,
                                }}
                              />
                            </div>

                            <span className="text-[15px] text-[#2A2A2A] font-medium">
                              {service.title}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="/contact"
              className="py-4 text-lg font-medium text-[#2A2A2A]"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            {/* CTA */}
            <a
              href="/counseling-home"
              onClick={() => setMenuOpen(false)}
              className="mt-4"
            >
              <button className="w-full py-4 rounded-full bg-[#D8B6A4] hover:bg-[#CFA18A] transition-all duration-300 text-[#1F1F1F] font-semibold font-inter">
                Free Counselling
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </header>
);
};

export default Nav;
