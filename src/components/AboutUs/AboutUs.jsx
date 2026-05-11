import React, { useEffect } from "react";
import { TiFlowChildren } from "react-icons/ti";
import gsap from "gsap";
import TiltedCard from "../TiltedCard";

const AboutUs = () => {
  useEffect(() => {
    gsap.fromTo(
      "#bgOverlay",
      {
        y: 10,
        x: 0,
        yoyo: true,
      },
      {
        y: -3,
        x: 3,
        duration: 2,
        ease: "back.inOut",
        repeat: -1,
        yoyo: true,
      },
    );
  }, []);

  return (
    <div
      data-scroll
      data-scroll-speed="0.1"
      className="w-full overflow-hidden relative flex flex-col px-6 md:px-20 lg:px-32 xl:px-52 py-20 md:py-32"
    >
      {/* Logo & Tagline */}
      <div className="flex items-center gap-3">
        <img
          className="w-16 md:w-20"
          src="/images/logowotext.png"
          alt="viroh-logo"
        />
        <p className="font-inter tracking-tighter text-navy text-base md:text-lg font-semibold">
          <span className="font-bold">Viroh: </span>
          Overall place for development
        </p>
      </div>

      {/* About Us */}
      <div className="mt-10 md:w-5/6 lg:w-2/3">
        <h1 className="text-4xl md:text-6xl font-dm text-navy font-semibold tracking-tight">
          About Us
        </h1>

        <p className="font-inter text-justify mt-6 text-base md:text-lg leading-8 tracking-tight text-navy">
          <span className="font-bold">
            VIROH: A Place for Overall Development
          </span>{" "}
          was formed in 2014 with the aim of nurturing the abilities of children
          with special needs.
        </p>

        <p className="font-inter text-justify mt-5 text-base md:text-lg leading-8 tracking-tight text-navy">
          Over the years, it has grown into an organization empowering children,
          adolescents, and adults with special needs. We support individuals
          with Autism Spectrum Disorder (ASD), Attention Deficit Hyperactivity
          Disorder (ADHD), Intellectual Disability, Down Syndrome, Cerebral
          Palsy, Hearing Impairment, Visual Impairment, and other developmental
          disabilities through holistic therapeutic and developmental
          interventions.
        </p>
      </div>

      {/* Founder Section */}
      <div className="mt-24 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Image */}
        <div className="w-full lg:w-[35%] flex justify-center">
          <TiltedCard
            imageSrc="/images/preeti1.jpeg"
            altText="Preeti"
            captionText="Founder - Preeti"
            containerHeight="450px"
            containerWidth="100%"
            imageHeight="450px"
            imageWidth="100%"
            rotateAmplitude={10}
            scaleOnHover={1.03}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-[65%]">
          <h1 className="text-4xl md:text-6xl font-dm text-navy font-semibold tracking-tight">
            Founder
          </h1>

          <p className="font-inter text-justify mt-8 text-base md:text-lg leading-8 tracking-tight text-navy">
            <span className="font-bold">Preeti</span> is an RCI-registered
            Rehabilitation Therapist, Special Educator, Parent Coach, Happiness
            Coach, and Mental Health Professional working with individuals with
            diverse needs and their families since 2012, and actively practicing
            in the field of mental health since 2024. She follows a humanistic
            approach rooted in empathy, acceptance, emotional well-being, and
            the belief that every individual has unique potential.
          </p>

          <p className="font-inter text-justify mt-5 text-base md:text-lg leading-8 tracking-tight text-navy">
            She is the Director of{" "}
            <span className="font-bold">
              VIROH: A Place for Overall Development
            </span>
            , an intervention centre dedicated to supporting children,
            adolescents, and adults with special needs through holistic
            therapeutic and developmental interventions.
          </p>

          <p className="font-inter text-justify mt-5 text-base md:text-lg leading-8 tracking-tight text-navy">
            Preeti is associated with reputed schools in Delhi as a Special
            Educator Consultant and also collaborates with NGOs and families to
            support individuals with developmental, emotional, and learning
            challenges. Her work focuses on communication, academics, social
            skills, emotional regulation, independence, and overall personality
            development, while also guiding parents and caregivers in managing
            stress, anxiety, and behavioral concerns.
          </p>

          <p className="font-inter text-justify mt-5 text-base md:text-lg leading-8 tracking-tight text-navy">
            She conducts counseling sessions, parent guidance programs, and
            workshops for parents, educators, therapists, and young
            professionals in the fields of disability and mental health. Her
            areas of expertise include inclusive education, behavior management,
            emotional well-being, parenting support, confidence building, and
            life skills development.
          </p>

          <p className="font-inter text-justify mt-5 text-base md:text-lg leading-8 tracking-tight text-navy">
            Preeti is also an authorized author with Educreation Publication and
            has authored two handbooks,
            <span className="font-bold"> “A Snap of Math” </span>
            and
            <span className="font-bold"> “Take a Flight”</span>. In addition,
            she is a qualified makeup artist who advocates for inclusive
            opportunities in the beauty and fashion industry for individuals
            with special needs, encouraging creativity, vocational exposure, and
            independence.
          </p>

          <p className="font-inter text-justify mt-5 text-base md:text-lg leading-8 tracking-tight text-navy">
            Her mission is to empower individuals with special needs and support
            their families with compassion, dignity, and acceptance, helping
            them recognize their strengths and move towards greater independence
            and fulfillment in life.
          </p>
        </div>
      </div>

      {/* Our Team */}
      <div className="mt-28 flex flex-col lg:flex-row gap-10 lg:gap-16 items-end">
        {/* Content */}
        <div className="w-full lg:w-[65%]">
          <h1 className="text-4xl md:text-6xl font-dm text-navy font-semibold tracking-tight">
            Our Team
          </h1>

          <p className="font-inter text-justify mt-8 text-base md:text-lg leading-8 tracking-tight text-navy">
            Our team at <span className="font-bold">VIROH</span> is committed,
            compassionate, and dedicated to creating a supportive environment
            for every individual and family we work with.
          </p>

          <p className="font-inter text-justify mt-5 text-base md:text-lg leading-8 tracking-tight text-navy">
            We strongly believe in the philosophy of humanity, respect, empathy,
            and acceptance, ensuring that every child and individual is valued
            for their unique strengths and potential.
          </p>

          <p className="font-inter text-justify mt-5 text-base md:text-lg leading-8 tracking-tight text-navy">
            Our multidisciplinary team works collaboratively to provide holistic
            care and intervention tailored to individual needs. The team
            comprises experienced Clinical Psychologists, Counseling
            Psychologists, Counsellors, Special Educators, Occupational
            Therapists, Physiotherapists, Speech and Language Therapists,
            Parenting Coaches, and Life Skill Coaches.
          </p>
        </div>

        {/* Team Image */}
          <div className="w-full lg:w-[35%] flex justify-center">
            <TiltedCard
              imageSrc="/images/team.jpeg"
              altText="Preeti"
              captionText="Founder - Preeti"
              containerHeight="450px"
              containerWidth="100%"
              imageHeight="400px"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.03}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </div>
      </div>

      {/* Background Overlay */}
      <div
        id="bgOverlay"
        className="absolute text-[40rem] md:text-[50rem] z-[-1] top-10 right-0 text-slate-200 opacity-40"
      >
        <TiFlowChildren />
      </div>
    </div>
  );
};

export default AboutUs;
