import React from "react";
import Posts from "./Posts";
import Projects from "./Projects";
import About from "./About";

const Home = () => {
  return (
    <main>
      <section className="relative bg-gray-200 flex justify-center min-h-min pb-16 pt-8 lg:pt-16 px-8">
        <h1 className="text-6xl text-gray-700 font-bold cursive leading-none lg:leading-snug home-name">
          Hallo, I'm Anders.
        </h1>
      </section>
      <section className="relative bg-gray-800 flex justify-center min-w-min pb-16 pt-8 lg:pt-16 px-8">
        <h1 className="p-40 text-6xl text-gray-700 font-bold cursive leading-none lg:leading-snug home-name">
          Hallo, I'm Anders.
        </h1>
      </section>
      <About />
      <Projects />
    </main>
  );
};

export default Home;
