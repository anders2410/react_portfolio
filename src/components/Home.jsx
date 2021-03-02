import React from "react";
import Projects from "./Projects";
import About from "./About";
import profile_picture from "../img/square_profile_picture.jpg";
import Footer from "./Footer";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <main>
      <section className="relative flex justify-center bg-gray-100 p-40">
        <img
          className="relative inset-1 z-20 w-32 h-32 lg:w-64 lg:h-64 mr-8 shadow-xl"
          style={{ width: "300px", height: "300px" }}
          src={profile_picture}
          alt="Anders Holt Knudsen"
        />
        <div className="flex flex-col">
          <h1 className="text-8xl text-gray-600">
            Hi, I am
            <br />
            <strong className="text-black">Anders Holt</strong>
          </h1>
          <p className="text-right bg-red-700 p-2 mt-4 text-2xl font-bold font-mono">
            aspiring software dev
          </p>
        </div>
      </section>
      {/*<section className="relative bg-gray-800 flex justify-center min-w-min pb-16 pt-8 lg:pt-16 px-8">
        <h1 className="p-40 text-6xl text-gray-700 font-bold cursive leading-none lg:leading-snug home-name">
          Hallo, I'm Anders.
        </h1>
      </section>*/}
      <Technologies />
      <About />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
