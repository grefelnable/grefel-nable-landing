import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projectsFile } from "../projects-data";

const Projects = () => {
  const [projects, setProjects] = useState(projectsFile);

  React.useEffect(() => {
    console.log(projects);
  }, []);
  return (
    <section
      id="projects"
      className="h-fit min-h-screen pt-12 bg-base-100 pb-12"
    >
      <div className="section-center">
        <h2 className="text-primary mb-6">Projects</h2>
        {/* project cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => {
            const { id, name, img, description, preview, code } = project;
            return (
              <article className="card min-h-16 shadow-xl image-full ease-in-out duration-300 hover:scale-105 hover:shadow-2xl">
                <figure>
                  <img src={`${img}`} alt="Shoes" />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title capitalize text-white tracking-widest">
                    {name}
                  </h2>
                  <p>{description}</p>
                  <div className="card-actions justify-end">
                    {preview && (
                      <a
                        href={preview}
                        target="_blank"
                        className="btn btn-secondary"
                      >
                        Live
                      </a>
                    )}

                    <a
                      href={code}
                      target="_blank"
                      className="btn bg-violet-500 border-violet-500 hover:bg-violet-800 hover:border-violet-800 text-white text-2xl"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
