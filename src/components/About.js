import React from "react";
import { FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiFirebase, SiJavascript, SiTailwindcss } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import GrefelFace from "../assets/grefel-nable.jpg";

const About = () => {
  return (
    <section id="about" className="h-screen bg-primary pt-12">
      <div className="section-center lg:flex justify-between">
        <article className="mb-4 lg:max-w-xl">
          <h2 className="mb-4">About Me</h2>
          {/* about text  */}
          <p className="mb-4">
            Hi my full name is Grefel Expedito Leo Nable and I'm a frontend
            developer. I have no real world experience but I'm constantly
            building web apps that will hone my skills. When encountered with
            roadblocks or bugs when coding, I always think of it as an
            opportunity to test my skills of where I am in my ability to code.
            One of the feedback that I hear from my past colleagues is that I'm
            easy to work with.
          </p>
          <p className="mb-4">
            I learned how to code last year of fall and here I am now looking to
            take job which I'm confident that I will give value to the company.
          </p>
          <h3 className="mb-4">Skills</h3>
          {/*  col 1  */}
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-[3rem] text-violet-900">
                <FaHtml5 />
              </p>
              <p>HTML</p>
            </div>
            <div>
              <p className="text-[3rem] text-violet-900">
                <FaCss3 />
              </p>
              <p>CSS</p>
            </div>
            <div>
              <p className="text-[3rem] text-violet-900">
                <SiJavascript />
              </p>
              <p>Javascript</p>
            </div>
          </div>
          {/*  col 2 */}
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-[3rem] text-violet-900">
                <FaReact />
              </p>
              <p>React.js</p>
            </div>
            <div>
              <p className="text-[3rem] text-violet-900">
                <FaSass />
              </p>
              <p>SCSS/Sass</p>
            </div>
            <div>
              <p className="text-[3rem] text-violet-900">
                <SiTailwindcss />
              </p>
              <p>TailwindCSS</p>
            </div>
          </div>
          {/* col 3 */}
          <div className="flex justify-between">
            <div>
              <p className="text-[3rem] text-violet-900">
                <SiFirebase />
              </p>
              <p>Firebase</p>
            </div>
          </div>
        </article>
        <article className="lg:w-[400px] pt-12">
          {/* <!-- grefel image --> */}
          <div className="hidden lg:block w-[250px] mx-auto mb-6 relative custom-border">
            <img src={GrefelFace} alt="" className="rounded-xl relative" />
          </div>
          {/* <!-- hire me btn --> */}
          <a
            href="mailto: felnable@gmail.com"
            className="bg-slate-900 w-36 h-36 rounded-full hidden md:grid items-center text-center inner-border mx-auto ease-in-out duration-300 hover:scale-110 hover:shadow-lg hover:border-violet-500
            "
          >
            <p className="text-white tracking-wide">
              Hire Me
              <BsArrowUpRight className="inline text-amber-300 ml-2" />
            </p>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
