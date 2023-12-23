import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
//Pages
import Banner from "./components/Banner";
import About1 from "./components/About1";
import About2 from "./components/About2";
import ConnectEver from "../common/ConnectEver";

const About = () => {
  // SEO UseState Data
  const [seodata, setseodata] = useState("");

  // API Call
  const getseodata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getseodata",
    });
    setseodata(response.data[1]);
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
      <Banner />
      <About1 />
      <About2 />
      <ConnectEver />
    </div>
  );
};

export default About;
