import React, { useState, useEffect } from "react";
import sanityClient from "../client";

const Projects = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags}`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  console.log(projectData);

  return (
    <main className="bg-gray-800 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-gray-100 text-5xl flex justify-center p-6 font-bold">
          My Projects
        </h1>
        <h2 className="text-lg text-gray-200 flex justify-center mb-12">
          A section of all my projects
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-7000">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    className="text-red-500 font-bold hover:underline hover:text-red-400"
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View The Project{" "}
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Projects;
