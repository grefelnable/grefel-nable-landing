import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="hero h-fit min-h-screen bg-primary">
      <div className="hero-content section-center flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h2 className="mb-6">Contact Me</h2>
          <p className="text-center mb-6">
            If you are looking to get ahold of me, you can send me an email at
            <a
              href="mailto: felnable@gmail.com"
              className="text-violet-600 ease-in-out duration-300 hover:scale-110 ml-1"
            >
              felnable@gmail.com
            </a>
            .
          </p>

          <p className="text-center">
            You can also reach me on Instagram at{" "}
            <a
              href="https://www.instagram.com/grefelcodes/"
              className="text-violet-600 ease-in-out duration-300 hover:scale-110 ml-1"
            >
              Grefel Codes
            </a>
            .
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Message"
            ></textarea>

            <div className="form-control mt-6">
              <button className="btn btn-primary tracking-widest text-violet-800">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
