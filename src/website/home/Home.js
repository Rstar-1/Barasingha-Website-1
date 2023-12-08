import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "./components/Banner";
import Service from "./components/Service";
import AboutEver from "./components/AboutEver";
import Projects from "./components/Projects";
import BlogEver from "./components/BlogEver";
import ConnectEver from "../common/ConnectEver";
import CardsEver from "./components/CardsEver";
import Brands from "./components/Brands";
import Marque from "./components/Marque";
import axios from "axios";

const Home = () => {
  const [seodata, setseodata] = useState("");

  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getseodata",
    });
    setseodata(response.data[0]);
  };
  useEffect(() => {
    getdata();
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
