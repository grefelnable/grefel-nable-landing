import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaPlay,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import GrefelHoodie from "../assets/grefel-hoodie-remove-bg.png";

const Hero = () => {
  return (
    <header id="home" className="hero h-fit min-h-screen bg-base-200">
      <div className="section-center flex flex-col justify-between lg:flex-row-reverse ">
        <div className="relative hidden lg:block">
          <img src={GrefelHoodie} className="object-cover mask mask-hexagon" />
        </div>

        <div>
          <h3>I'm</h3>
          <h1 className="text-[9rem] font-bold">GREFEL</h1>
          <h2 className="mb-8">Frontend Developer</h2>
          <div className="mb-20 flex gap-4">
            <a
              href="mailto: felnable@gmail.com"
              className="bg-violet-500 text-white px-5 py-3 rounded-xl tracking-wide shadow-md border-2 border-violet-500 ease-in-out duration-300 hover:shadow-2xl hover:bg-transparent hover:text-slate-900 "
            >
              Let's talk
              <FaPaperPlane className="inline ml-4" />
            </a>
            {/* learn about me */}
            <div
              className="tooltip tooltip-info tooltip-right"
              data-tip="---> Learn more about me"
            >
              <a
                href="https://www.youtube.com/watch?v=hh7dIrtHlbc"
                target="_blank"
                className="bg-primary hover:bg-white text-white w-14 h-14 rounded-full grid items-center justify-center text-2xl ease-in-out duration-300 hover:scale-125 hover:text-violet-500
                shadow-lg hover:shadow-xl"
              >
                <FaPlay />
              </a>
            </div>
          </div>

          <p className="capitalize mb-4 tracking-wider">Check out my</p>
          {/* hero social icons */}
          <ul className="flex gap-6 text-slate-900 text-2xl">
            <li className="btn-social">
              <a
                href="https://www.linkedin.com/in/grefel-nable/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="btn-social">
              <a href="https://github.com/grefelnable" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li className="btn-social">
              <a
                href="https://www.youtube.com/channel/UCkY2ed8qf0OlLjEjWXsVJbw"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </li>
            <li className="btn-social">
              <a href="https://twitter.com/grefel_nable" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li className="btn-social">
              <a href="https://www.instagram.com/grefelcodes/" target="_blank">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Hero;
