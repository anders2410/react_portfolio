import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Projects = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      slug,
      date,
      place,
      mainImage{
        asset->{
          _id,
          url
        }
      },
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
    <main className="bg-gray-800 py-20 px-12">
      <section className="container mx-auto">
        <h1 className="text-gray-100 text-5xl flex justify-center mb-6 font-bold">
          My Projects
        </h1>
        <h2 className="text-2xl text-gray-200 flex justify-center mb-12">
          A selection of all the projects I have worked on
        </h2>
        <section className="grid grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project) => (
              <article className="flex flex-col justify-between rounded-lg shadow-xl bg-white">
                <div>
                  <img
                    className="w-full rounded-t-lg h-56"
                    src={project.mainImage.asset.url}
                    alt={project.title}
                  />
                  <section className="p-6">
                    <h5 className="text-red-800 text-sm font-bold pb-1">
                      {project.projectType}
                    </h5>
                    <h4 className="text-gray-800 text-xl font-bold mb-2 hover:text-red-700">
                      {project.title}
                    </h4>
                    <div className="text-gray-500 text-xs space-x-4">
                      <p className="my-2 text-base text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="">
                      <img />
                    </div>
                  </section>
                </div>
                <div className="flex flex-wrap pt-2 p-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium bg-gray-200 py-1 px-2 rounded text-black align-middle mr-2 font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Projects;
