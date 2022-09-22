import React, { useState } from "react";
import { projectsFile } from "../projects-data";

const Projects = () => {
  const [projects, setProjects] = useState(projectsFile);

  React.useEffect(() => {
    console.log(projects);
  }, []);
  return (
    <section
      id="projects"
      className="h-screen pt-12 bg-[url(https://placeimg.com/640/480/tech)] bg-no-repeat bg-cover"
    >
      <div className="section-center">
        <h2 className="text-primary mb-6">Projects</h2>
        {/* project cards */}
        <div>
          {projects.map((project) => {
            const { id, name, img, description, preview, code } = project;
            return (
              <article key={id}>
                <div className="card w-96 glass">
                  <figure>{/* <img src= alt="car!" /> */}</figure>
                  <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Learn now!</button>
                    </div>
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
