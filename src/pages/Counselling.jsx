import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FluidGlass from "../components/BlobCursor";
import BlobCursor from "../components/BlobCursor";

gsap.registerPlugin(ScrollTrigger);

const Counselling = () => {
  const message = encodeURIComponent(
    "Hello, I want to know more about counselling sessions.",
  );

  const whatsappLink = `https://wa.me/8700736147?text=${message}`;

  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HERO REVEAL
      gsap.from(".hero-label", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.1,
      });

      gsap.from(".hero-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-buttons", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".hero-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
      });

      // FLOATING TYPOGRAPHY PARALLAX
      gsap.to(".floating-word", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // SERVICES INTRO
      gsap.from(".services-intro", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-intro",
          start: "top 80%",
        },
      });

      // SERVICE CARDS
      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      });

      // QUOTE SECTION
      gsap.from(".bottom-quote", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bottom-quote",
          start: "top 85%",
        },
      });
    }, container);


    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="w-full bg-[#F7F3EE] relative text-[#1F1F1F] overflow-hidden"
    >
      {/* ================= HERO / ABOUT ================= */}
      <section className="relative px-6 md:px-16 lg:px-28 xl:px-40 py-24 md:py-32">
        {/* Top Label */}
        <p className="uppercase hero-label tracking-[0.25em] text-xs md:text-sm font-inter text-[#8A8178]">
          Counseling & Emotional Support
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-10">
          {/* Left Content */}
          <div className="relative">
            {/* Decorative Text */}
            <p className="absolute floating-word -top-10 left-0 text-[6rem] md:text-[9rem] font-dm italic text-[#E7DED2] leading-none select-none pointer-events-none">
              listen
            </p>

            <h1 className="relative hero-title text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] font-inter">
              Preeti.
            </h1>

            <div className="w-24 h-[2px] bg-[#C8B6A6] mt-8 mb-8" />

            <p className="text-lg hero-text md:text-xl leading-relaxed font-inter text-[#4B4B4B] max-w-xl">
              RCI-registered Rehabilitation Therapist, Special Educator, Parent
              Coach, and Mental Health Professional supporting individuals and
              families since 2012.
            </p>

            <p className="mt-6 hero-text text-base md:text-lg leading-relaxed text-[#6A625B] font-inter max-w-xl">
              Rooted in empathy, emotional well-being, and acceptance,
              counseling at VIROH creates a safe and supportive space for
              children, adults, parents, couples, and families.
            </p>

            {/* CTA */}
            <div className="mt-10 flex hero-buttons gap-4">
              <button className="px-8  py-4 rounded-full bg-[#D9B8A8] hover:bg-[#CFA391] transition-all duration-300 text-[#1F1F1F] font-medium font-inter">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="px-6 py-3 rounded-full bg-[#25D366] text-white font-medium"
                >
                  Book Session
                </a>
              </button>

              <button className="px-8 py-4 rounded-full border border-[#D8CFC4] hover:bg-[#EFE7DD] transition-all duration-300 text-[#4B4B4B] font-medium font-inter">
                <a href="/">Visit Viroh</a>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Background Block */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-[#ECE4DA] rounded-[3rem]" />

            {/* Image */}
            <div className="relative hero-image overflow-hidden rounded-[3rem]">
              <img
                src="/images/preeti1.jpeg"
                alt="Preeti"
                className="w-full h-[32rem] md:h-[42rem] object-cover grayscale"
              />
            </div>

            {/* Small Floating Label */}
            <div className="absolute -bottom-6 -left-6 bg-[#FDFBF8] border border-[#E5DBCF] px-6 py-4 rounded-2xl shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8A8178] font-inter">
                Since 2012
              </p>

              <h3 className="text-xl font-semibold mt-1 font-dm">
                Supporting Growth
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="relative services-section px-6 md:px-16 lg:px-28 xl:px-40 py-32 overflow-hidden bg-[#F4F0EA]">
        {/* Background Typography */}
        <div className="absolute floating-word inset-0 overflow-hidden pointer-events-none select-none">
          <h1 className="absolute  top-10 left-10 text-[5rem] md:text-[10rem] font-dm italic text-[#E7DED2] leading-none">
            heal
          </h1>

          <h1 className="absolute top-1/3 right-0 text-[5rem] md:text-[11rem] font-dm italic text-[#EDE4D8] leading-none">
            breathe
          </h1>

          <h1 className="absolute bottom-10 left-1/4 text-[5rem] md:text-[10rem] font-dm italic text-[#E9DFD3] leading-none">
            grow
          </h1>
        </div>

        {/* Top Intro */}
        <div className="relative z-10 max-w-4xl">
          <p className="uppercase services-intro tracking-[0.3em] text-xs md:text-sm font-inter text-[#8A8178]">
            Areas of Support
          </p>

          <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-5xl services-intro md:text-7xl leading-[0.95] font-dm tracking-tight text-[#1F1F1F] max-w-3xl">
              Holding space for healing, growth, and emotional well-being.
            </h2>

            <p className="max-w-md services-intro text-base md:text-lg font-inter leading-relaxed text-[#6E655D]">
              Counseling at VIROH is rooted in empathy, acceptance, and
              emotional support — creating a safe space where individuals and
              families feel heard, understood, and supported through life’s
              challenges.
            </p>
          </div>
        </div>

        {/* Main Layout */}
        <div className="relative z-10 mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Phrase Column */}
          <div className="lg:col-span-3">
            <div className="sticky top-32 space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#8A8178] font-inter">
                  We believe
                </p>

                <h3 className="mt-3 text-3xl md:text-4xl leading-tight font-dm text-[#2A2A2A]">
                  Emotional support begins with being truly heard.
                </h3>
              </div>

              <div className="w-16 h-[2px] bg-[#D8CFC4]" />

              <p className="text-base leading-relaxed font-inter text-[#6E655D]">
                Every individual’s journey is unique. Therapy and counseling are
                approached with compassion, dignity, patience, and emotional
                safety.
              </p>
            </div>
          </div>

          {/* Right Services */}
          <div className="lg:col-span-9">
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-10">
              {/* Card */}
              <div className="group service-card border border-[#E5DBCF] bg-[#F9F6F1] hover:bg-[#F6F1EA] transition-all duration-500 rounded-[2rem] p-10">
                <p className="text-xs uppercase tracking-[0.25em] text-[#A09084] font-inter">
                  Emotional Well-being
                </p>

                <ul className="mt-8 space-y-5">
                  {[
                    "Anxiety",
                    "Stress",
                    "Overthinking",
                    "Burnout",
                    "Self-esteem",
                    "Confidence",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between text-2xl md:text-3xl font-dm text-[#2A2A2A]"
                    >
                      {item}

                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#B8A89A]">
                        —
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card */}
              <div className="group service-card border border-[#E5DBCF] bg-[#F9F6F1] hover:bg-[#F6F1EA] transition-all duration-500 rounded-[2rem] p-10">
                <p className="text-xs uppercase tracking-[0.25em] text-[#A09084] font-inter">
                  Relationships & Family
                </p>

                <ul className="mt-8 space-y-5">
                  {[
                    "Couples Counseling",
                    "Breakups",
                    "Family Concerns",
                    "Parenting Support",
                    "Communication Challenges",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between text-2xl md:text-3xl font-dm text-[#2A2A2A]"
                    >
                      {item}

                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#B8A89A]">
                        —
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card */}
              <div className="group border border-[#E5DBCF] bg-[#F9F6F1] hover:bg-[#F6F1EA] transition-all duration-500 rounded-[2rem] p-10">
                <p className="text-xs uppercase tracking-[0.25em] text-[#A09084] font-inter">
                  Emotional Healing
                </p>

                <ul className="mt-8 space-y-5">
                  {[
                    "Trauma",
                    "Grief",
                    "Shame",
                    "Guilt",
                    "Emotional Regulation",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between text-2xl md:text-3xl font-dm text-[#2A2A2A]"
                    >
                      {item}

                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#B8A89A]">
                        —
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card */}
              <div className="group border border-[#E5DBCF] bg-[#F9F6F1] hover:bg-[#F6F1EA] transition-all duration-500 rounded-[2rem] p-10">
                <p className="text-xs uppercase tracking-[0.25em] text-[#A09084] font-inter">
                  Self Growth
                </p>

                <ul className="mt-8 space-y-5">
                  {[
                    "Self-discovery",
                    "Body Image",
                    "Work Stress",
                    "Life Skills",
                    "Personal Growth",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between text-2xl md:text-3xl font-dm text-[#2A2A2A]"
                    >
                      {item}

                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#B8A89A]">
                        —
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="relative z-10 mt-32 border-t border-[#DED4C8] pt-12 flex flex-col lg:flex-row gap-10 justify-between items-start">
          <h3 className="text-3xl bottom-quote md:text-5xl leading-tight font-dm max-w-3xl text-[#2A2A2A]">
            Healing doesn’t always mean fixing — sometimes it means feeling safe
            enough to begin.
          </h3>

          <button className="px-8 py-4 rounded-full bg-[#D8B6A4] hover:bg-[#CFA18A] transition-all duration-300 text-[#1F1F1F] font-medium font-inter">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              // className="px-6 py-3 rounded-full bg-[#25D366] text-white font-medium"
            >
              Book Session
            </a>
          </button>
        </div>
      </section>
      <BlobCursor
        blobType="circle"
        fillColor="#aa733f"
        trailCount={2}
        sizes={[20, 20]}
        innerSizes={[27, 27]}
        innerColor="#ffdbbf"
        opacities={[0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={3}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
      />
    </div>
  );
};

export default Counselling;
