import React from "react"

const Hero = () => (
  <div className="pt-24 bg-hero-pattern min-h-screen">
    <div className="container mx-auto px-4 flex items-center ">
      <div className="container mx-auto px-4 content-around text-center">
        <h1 className="my-4 text-5xl font-bold leading-tight pt-12">
          WaffleHacks
        </h1>
        <p className="leading-normal text-2xl mb-8 pb-8">
          We're hackers with hearts
        </p>

        <a
          href="https://apply.wafflehacks.tech"
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          Register Now!
        </a>
      </div>
      {/*
      <div className="w-full md:w-3/5 py-6 text-center">
        <img
          className="w-full md:w-4/5 z-50"
          src={bgImg}
          alt="people being happy hacking"
        />
      </div>

			container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center

			flex flex-col w-full md:w-5/5 justify-center items-start text-center md:text-center

							<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>

			*/}
    </div>
  </div>
)

export default Hero
