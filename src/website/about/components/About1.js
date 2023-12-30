import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import about from "../../../assets/lock.png";

const About1 = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");
  const [cmsdata3, setcmsdata3] = useState("");

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[39]);
    setcmsdata2(response.data[40]);
    setcmsdata3(response.data[41]);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
  }, []);

  return (
    <div className="bgforth ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block w-full mtpx35 gap-12">
          <div className="w-40 sm-w-full prpx40 sm-prpx1">
            <img
              src={about}
              alt="about1"
              className="about1-img object-contain"
            />
          </div>
          <div className="w-60 sm-w-full">
            <Fade right cascade>
              <h2 className="textprimary font-600 mtpx20 mbpx1 sm-fsize20 fsize35">
                {cmsdata.title}
                <span className="textwhite mlpx5">{cmsdata2.title}</span>
              </h2>
              <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16 sm-fsize13">
                {cmsdata3.title}
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
