import React, { useState, useEffect } from "react";
import axios from "axios";

const Banner = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[77]);
    setcmsdata2(response.data[78]);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
  }, []);

  return (
    <div className="relative bgprimary h-banner w-full">
      <div className="absolute top-0 w-full h-banner flex items-center justify-center">
        <div className="w-70">
          <h2 className="fsize35 mtpx1 mbpx1 textwhite text-center font-600">
            {cmsdata.title}
          </h2>
          <p className="textwhite font-500 mtpx5 text-center sm-text-justify mbpx1 fsize16">
            {cmsdata2.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
