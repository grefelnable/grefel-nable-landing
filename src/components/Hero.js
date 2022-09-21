import React from "react";

const Hero = () => {
  return (
    <header className="hero min-h-screen bg-base-200">
      <div className="section-center">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h3>I'm</h3>
            <h1 className="text-[9rem] font-bold">GREFEL</h1>
            <h2>Frontend Developer</h2>
            <a
              href="mailto: felnable@gmail.com"
              class="bg-violet-500 text-white px-5 py-3 rounded-xl mb-20 tracking-wide shadow-md border-2 border-violet-500 ease-in-out duration-300 hover:shadow-2xl hover:bg-transparent hover:text-slate-900 "
            >
              Let's talk{" "}
              <span class="ml-2">
                <i class="fa-solid fa-paper-plane"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
