import React from "react";

import heroImg from "../images/hero.png";

const Hero = () => (
  <div className="pt-24">
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <h1 className="my-4 text-5xl font-bold leading-tight">WaffleHacks</h1>
        <p className="leading-normal text-2xl mb-8">
          We're hackers with hearts
        </p>

        <a
          href="#"
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          Register Now!
        </a>
      </div>

      <div className="w-full md:w-3/5 py-6 text-center">
        <img
          className="w-full md:w-4/5 z-50"
          src={heroImg}
          alt="people surrounded by books and screens"
        />
      </div>
    </div>
  </div>
);

export default Hero;
