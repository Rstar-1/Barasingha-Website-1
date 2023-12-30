import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

const About2 = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");
  const [cmsdata3, setcmsdata3] = useState("");
  // CMS Image UseState Data
  const [cmsimagedata, setcmsimagedata] = useState("");

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[41]);
    setcmsdata2(response.data[42]);
    setcmsdata3(response.data[43]);
  };
 const getcmsimagedata = async () => {
   const response = await axios({
     method: "get",
     url: "http://localhost:8000/api/getimagealldata",
   });
   setcmsimagedata(response.data[7]);
 };

  // Render API
  useEffect(() => {
    getcmsdata();
    getcmsimagedata();
  }, []);

  return (
    <div className="bg-second ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block w-full sm-mtpx1 mtpx35 gap-12">
          <div className="w-60 sm-w-full prpx40 sm-prpx1">
            <Fade left cascade>
              <h2 className="textprimary font-600 mtpx20 mbpx1 fsize35 sm-fsize20">
                {cmsdata.title}
                <span className="textwhite mlpx5">{cmsdata2.title}</span>
              </h2>
              <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16 sm-fsize13">
                {cmsdata3.title}
              </p>
            </Fade>
          </div>
          <div className="w-40 sm-mtpx30 sm-w-full">
            <img
              src={cmsimagedata.picture}
              alt="about2"
              className="about2-img object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
