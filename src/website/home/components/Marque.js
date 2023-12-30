import React, { useState, useEffect } from "react";
import axios from "axios";

const Marque = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[0]);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
  }, []);

  return (
    <div className=" bgprimary">
      <div className=" container mx-auto overflow-hidden">
        <div className="marquee">
          <p className="textwhite para p2 sm-p1 sm-fsize13 fsize14">
            {cmsdata.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marque;
