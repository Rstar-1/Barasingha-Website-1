import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
// Pages
import Marque from "./components/Marque";
import Banner from "./components/Banner";
import Brands from "./components/Brands";
import CardsEver from "./components/CardsEver";
import AboutEver from "./components/AboutEver";
import Projects from "./components/Projects";
import Service from "./components/Service";
import BlogEver from "./components/BlogEver";
import ConnectEver from "../common/ConnectEver";

const Home = () => {
  // SEO UseState Data
  const [seodata, setseodata] = useState("");

  // API Call
  const getseodata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getseodata",
    });
    setseodata(response.data[0]);
  };

  // Render API
  useEffect(() => {
    getseodata();
  }, []);

  return (
    <div>
      <Helmet>
        <title>{seodata.metatitle}</title>
        <meta name="description" content={seodata.metadescription} />
        <meta name="keywords" content={seodata.metakeyword} />
        <meta name="author" content={seodata.metaauthor} />
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
