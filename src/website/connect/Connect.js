import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "./components/Banner";
import ConnectForm from "./components/ConnectForm";
import axios from "axios";

const Connect = () => {
  const [seodata, setseodata] = useState("");

  const getseodata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getseodata",
    });
    setseodata(response.data[5]);
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
      <ConnectForm />
    </div>
  );
};

export default Connect;
