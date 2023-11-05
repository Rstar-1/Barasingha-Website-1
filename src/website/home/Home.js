import React from "react";
import Banner from "./components/Banner"
import Service from "./components/Service";
import AboutEver from "./components/AboutEver";
import Projects from "./components/Projects";
import BlogEver from "./components/BlogEver";
import ConnectEver from "../common/ConnectEver";
import CardsEver from "./components/CardsEver";
import Brands from "./components/Brands";
import Marque from "./components/Marque";

const Home = () => {
  return (
    <div>
      <Marque />
      <Banner />
      <Brands />
      <CardsEver />
      <AboutEver />
      <Projects />
      <Service />
      <BlogEver />
      <ConnectEver />
    </div>
  );
};

export default Home;
