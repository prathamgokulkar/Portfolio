import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="scrollspyHero" className="bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
          <div className="lg:w-1/2 text-center lg:text-left ml-0 lg:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Hey, I'm <br />
              <span className="text-secondary my-2 inline-block">
                Prathamesh Gokulkar
              </span>
            </h1>
            <p className="text-lg mb-6 text-white">
              I build web apps with Python & React.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-secondary rounded-full px-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
                <Link to="contact" smooth="true" duration={500}>
                  Contacts
                </Link>
              </button>
              <button className="btn btn-outline rounded-full px-4 border-white text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
                <Link to="projects" smooth="true" duration={500}>
                  View Projects
                </Link>
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 text-center ">
            <img
              src="/assets/hero-home.png"
              alt="Hero"
              loading="lazy"
              className="w-full h-auto max-w-md mx-auto"
              style={{
                WebkitMaskImage: "url(/assets/hero-blob-1.svg)",
                maskImage: "url(/assets/hero-blob-1.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskSize: "cover",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
