import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "./components/Banner";
import About1 from "./components/About1";
import About2 from "./components/About2";
import ConnectEver from "../common/ConnectEver";
import axios from "axios";

const About = () => {
  const [seodata, setseodata] = useState("");

  const getseodata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getseodata",
    });
    setseodata(response.data[1]);
  };
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
