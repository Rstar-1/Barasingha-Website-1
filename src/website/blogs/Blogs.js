import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "./components/Banner";
import BlogBox from "./components/BlogBox";
import ConnectEver from "../common/ConnectEver";
import axios from "axios";

const Blogs = () => {
  const [seodata, setseodata] = useState("");

  const getseodata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getseodata",
    });
    setseodata(response.data[3]);
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
      <BlogBox />
      <ConnectEver />
    </div>
  );
};

export default Blogs;
