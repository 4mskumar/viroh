import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";
import { serviceTitle } from "../../data/servicesData";

const StickyNav = () => {
  const stickyRef = useRef();

  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveringServices, setHoveringServices] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      stickyRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <header
      ref={stickyRef}
      className="fixed top-0 left-0 w-full z-[999] backdrop-blur-xl bg-white/80 border-b border-[#EAE2D8]"
    >
      <nav className="px-6 md:px-16 lg:px-28 xl:px-40 py-3 flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <a href="/" className="w-20 md:w-24 shrink-0">
          <img
            className="w-full h-full object-cover"
            src="/images/virohlogo.jpeg"
            alt="logo"
          />
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-inter font-semibold text-[#2A2A2A]">
          {["Home", "About", "Services", "Contact"].map((val, ind) => {
            if (val === "Services") {
              return (
                <div
                  key={ind}
                  className="relative"
                  onMouseEnter={() => setHoveringServices(true)}
                  onMouseLeave={() => setHoveringServices(false)}
                >
                  <button className="flex items-center gap-1 hover:text-[#C48F6A] transition-colors duration-300">
                    {val}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        hoveringServices ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown */}
                  <div
                    className={`absolute top-[140%] left-0 w-[350px] rounded-3xl border border-[#EAE2D8] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-4 transition-all duration-300 ${
                      hoveringServices
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
                            className={`group flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-[#F8F4EE] transition-all duration-300 ${
                              subInd !== serviceTitle.length - 1
                                ? "border-b border-[#F1EBE3]"
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
                className="hover:text-[#C48F6A] transition-colors duration-300"
              >
                {val}
              </a>
            );
          })}

          {/* CTA */}
          <a href="/counseling-home">
            <button className="px-6 py-3 rounded-full bg-[#D8B6A4] hover:bg-[#CFA18A] transition-all duration-300 text-sm font-semibold text-[#1F1F1F] hover:scale-[1.03] shadow-sm">
              Free Counselling for Mental Health
            </button>
          </a>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#2A2A2A]"
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
            className="overflow-hidden md:hidden bg-white border-t border-[#EFE7DD]"
          >
            <div className="px-6 py-6 flex flex-col">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="py-4 text-lg font-medium text-[#2A2A2A]"
              >
                Home
              </a>

              <a
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="py-4 text-lg font-medium text-[#2A2A2A]"
              >
                About
              </a>

              {/* SERVICES */}
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
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
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
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
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
                onClick={() => setMenuOpen(false)}
                className="py-4 text-lg font-medium text-[#2A2A2A]"
              >
                Contact
              </a>

              {/* MOBILE CTA */}
              <a
                href="/counseling-home"
                onClick={() => setMenuOpen(false)}
                className="mt-5"
              >
                <button className="w-full py-4 rounded-full bg-[#D8B6A4] hover:bg-[#CFA18A] transition-all duration-300 text-[#1F1F1F] font-semibold">
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

export default StickyNav;