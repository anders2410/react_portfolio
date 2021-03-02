import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import anders_desert_view from "../img/anders_desert_view.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name, 
        bio, 
        "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  console.log(author);
  if (!author) return <div>Loading...</div>;

  return (
    <main className="bg-gray-200">
      <div className="p-10 container mx-auto">
        <section className="bg-gray-100 rounded-xl shadow-2xl lg:flex p-20">
          <img
            src={anders_desert_view}
            className="rounded shadow-2xl mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col">
            <h1 className="text-6xl text-gray-700 mb-4 font-bold">Who am I?</h1>
            <span className="prose lg:prose-xl text-gray-600 text-xl whitespace-pre-line">
              <BlockContent
                blocks={author.bio}
                projectId="jn8ejrao"
                dataset="production"
                serializers={{ hardBreak: false }}
              />
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
