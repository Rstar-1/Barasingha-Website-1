import React, { useState, useEffect } from "react";
import axios from "axios";

const Banner = () => {
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");

  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextdata",
    });
    setcmsdata(response.data[55]);
    setcmsdata2(response.data[56]);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="relative bgprimary h-banner w-full">
      <div className="absolute top-0 w-full h-banner flex items-center justify-center">
        <div className="w-70 sm-w-full sm-prpx4 sm-plpx4">
          <h2 className="fsize35 mtpx1 mbpx1 textwhite sm-fsize20 text-center font-600">
            {cmsdata.title}
          </h2>
          <p className="textwhite font-500 mtpx5 text-center sm-fsize13 mbpx1 fsize16">
            {cmsdata2.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
