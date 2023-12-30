import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

const Banner = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");
  const [cmsdata3, setcmsdata3] = useState("");
  const [cmsdata4, setcmsdata4] = useState("");
  // CMS Image UseState Data
  const [cmsimagedata, setcmsimagedata] = useState("");
  const [cmsimagedata2, setcmsimagedata2] = useState("");

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[1]);
    setcmsdata2(response.data[2]);
    setcmsdata3(response.data[3]);
    setcmsdata4(response.data[4]);
  };
  const getcmsimagedata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getimagealldata",
    });
    setcmsimagedata(response.data[0]);
    setcmsimagedata2(response.data[1]);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
    getcmsimagedata()
  }, []);

  return (
    <div className="ptpx80 pbpx80 sm-ptpx25 sm-pbpx25 bgforth flex items-center">
      <div className="container mx-auto">
        <div className="flex sm-block w-full items-center">
          <div className="w-50 sm-w-full">
            <Fade left cascade>
              <h2 className="textsecondary font-600 sm-font-400 text-left sm-text-justify mbpx1 fsize25 sm-fsize16">
                {cmsdata.title}
              </h2>
              <h3 className="textprimary font-600 sm-font-400 mtpx9 leading mbpx1 fsize50 sm-fsize24">
                {cmsdata2.title}
                <span className="mlpx5 textwhite">{cmsdata3.title}</span>
              </h3>
              <p className="textwhite font-500 sm-font-400   mtpx13 sm-fsize13 text-left mbpx1 fsize16">
                {cmsdata4.title}
              </p>

              <div className="flex items-center gap-10">
                <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx12 pbpx12 sm-ptpx10 sm-pbpx10 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize16 sm-fsize13 bgprimary">
                  Connect
                </button>
                <button className="cursor-pointer font-500 rounded-5 ptpx12 pbpx12 sm-ptpx10 sm-pbpx10 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize16 sm-fsize13 primarybtn">
                  About Us
                </button>
              </div>
            </Fade>
          </div>
          <div className="w-50 sm-w-full sm-mtpx50 relative">
            <img
              src={cmsimagedata2.picture}
              alt="banner"
              className="banner-img object-contain"
            />
            <img
              src={cmsimagedata.picture}
              alt="gol"
              className="gol-img absolute top-0 right-0 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
