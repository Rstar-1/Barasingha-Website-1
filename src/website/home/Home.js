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
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="http://localhost:3001/home" />
        <meta name="title" content="H" />
        <meta name="description" content="This is a description of my page" />
        <meta name="keywords" content="Website" />
        <meta name="author" content="Barasingha" />
        <meta property="og:title" content="My Page Title" />
        <meta
          property="og:description"
          content="This is a description of my page"
        />
        <meta property="og:url" content="https://example.com/my-page" />
      </Helmet>
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
