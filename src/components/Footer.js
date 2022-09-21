import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [getYear, setGetYear] = useState(new Date().getFullYear());

  return (
    <footer className="p-10 bg-slate-800">
      {/* <!-- social icon links --> */}
      <ul className="flex justify-center gap-6 text-amber-500 text-2xl mb-4">
        <li className="btn-social-footer">
          <a href="https://www.linkedin.com/in/grefel-nable/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li className="btn-social-footer">
          <a href="https://github.com/grefelnable" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li className="btn-social-footer">
          <a
            href="https://www.youtube.com/channel/UCkY2ed8qf0OlLjEjWXsVJbw"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </li>
        <li className="btn-social-footer">
          <a href="https://twitter.com/grefel_nable" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li className="btn-social-footer">
          <a href="https://www.instagram.com/grefelcodes/" target="_blank">
            <FaInstagram />
          </a>
        </li>
      </ul>
      {/* <!-- copyright --> */}
      <p className="text-center text-slate-400">
        &copy; <span>{getYear}</span> Grefel Nable. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
