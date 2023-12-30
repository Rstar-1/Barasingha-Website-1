import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

const AboutEver = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");
  const [cmsdata3, setcmsdata3] = useState("");
  const [cmsdata4, setcmsdata4] = useState("");
  const [cmsdata5, setcmsdata5] = useState("");
  const [cmsdata6, setcmsdata6] = useState("");
  const [cmsdata7, setcmsdata7] = useState("");
  const [cmsdata8, setcmsdata8] = useState("");
  const [cmsdata9, setcmsdata9] = useState("");
  // CMS Image UseState Data
  const [cmsimagedata, setcmsimagedata] = useState("");

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[14]);
    setcmsdata2(response.data[15]);
    setcmsdata3(response.data[16]);
    setcmsdata4(response.data[17]);
    setcmsdata5(response.data[18]);
    setcmsdata6(response.data[19]);
    setcmsdata7(response.data[20]);
    setcmsdata8(response.data[21]);
    setcmsdata9(response.data[22]);
  };
  const getcmsimagedata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getimagealldata",
    });
    setcmsimagedata(response.data[2]);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
    getcmsimagedata();
  }, []);

  return (
    <div className="bgforth ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block w-full mtpx35 gap-12">
          <div className="w-50 sm-w-full prpx40 sm-prpx1">
            <img
              src={cmsimagedata.picture}
              alt="about"
              className="w-full aboutleft-img object-contain"
            />
          </div>
          <div className="w-50 sm-w-full">
            <Fade right cascade>
              <h2 className="textprimary font-600 mtpx20 mbpx1 fsize35 sm-fsize20">
                {cmsdata.title}
                <span className="textwhite mlpx5">{cmsdata2.title}</span>
              </h2>
              <p className="textwhite font-500 mtpx13 sm-fsize13 text-left sm-text-justify mbpx1 fsize16">
                {cmsdata3.title}
              </p>
            </Fade>
            <Fade bottom cascade>
              <div className="grid-cols-1 gap-12 mtpx20">
                <div className="bg-glass2 p17 sm-p10 rounded-5 flex sm-block items-center gap-12">
                  <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 sm-fsize16 mbpx1 rounded-5">
                    {cmsdata4.title}
                  </h3>
                  <p className="textwhite mlpx5 sm-fsize13 sm-mtpx5 font-500 text-left sm-text-justify fsize14">
                    {cmsdata5.title}
                  </p>
                </div>
                <div className="bg-glass2 p17 sm-p10 rounded-5 flex sm-block items-center gap-12 mtpx10">
                  <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 sm-fsize16 mbpx1 rounded-5">
                    {cmsdata6.title}
                  </h3>
                  <p className="textwhite mlpx5 sm-fsize13 sm-mtpx5 font-500 text-left sm-text-justify fsize14">
                    {cmsdata7.title}
                  </p>
                </div>
                <div className="bg-glass2 p17 sm-p10 rounded-5 flex sm-block items-center gap-12 mtpx10">
                  <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 sm-fsize16 mbpx1 rounded-5">
                    {cmsdata8.title}
                  </h3>
                  <p className="textwhite mlpx5 sm-fsize13 sm-mtpx5 font-500 text-left sm-text-justify fsize14">
                    {cmsdata9.title}
                  </p>
                </div>
              </div>
            </Fade>
            <button className="border-0 cursor-pointer sm-fsize13 font-500 textwhite rounded-5 ptpx12 pbpx12 sm-ptpx9 sm-pbpx9 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx35 fsize16 bgprimary">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEver;
