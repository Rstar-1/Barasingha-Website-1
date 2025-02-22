import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
//Pages
import Banner from "./components/Banner";
import ConnectForm from "./components/ConnectForm";

const Connect = () => {
  // SEO UseState Data
  const [seodata, setseodata] = useState("");

  // API Call
  const getseodata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getseodata",
    });
    setseodata(response.data[5]);
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
      <ConnectForm />
    </div>
  );
};

export default Connect;
