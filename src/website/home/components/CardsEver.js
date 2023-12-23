import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

const CardsEver = () => {
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

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextdata",
    });
    setcmsdata(response.data[4]);
    setcmsdata2(response.data[5]);
    setcmsdata3(response.data[6]);
    setcmsdata4(response.data[7]);
    setcmsdata5(response.data[8]);
    setcmsdata6(response.data[9]);
    setcmsdata7(response.data[10]);
    setcmsdata8(response.data[11]);
    setcmsdata9(response.data[12]);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
  }, []);

  return (
    <div className="bgforth ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <Fade bottom cascade>
          <div className="grid-cols-3 sm-grid-cols-1 gap-12 items-start">
            <div className="rounded-10 plpx25 prpx25 ptpx80 pbpx80 mlpx20 mrpx20 sm-mlpx10 sm-mrpx10 sm-ptpx40 sm-pbpx40 sm-plpx15 sm-prpx15 bg-fa">
              <small className="textsecondary font-500 mtpx13 text-left sm-text-justify mbpx1 sm-fsize12 fsize14">
                {cmsdata.title}
              </small>
              <h5 className="textprimary font-600 mtpx5 sm-mtpx1 mbpx1 fsize30 sm-fsize23">
                {cmsdata2.title}
              </h5>
              <p className="textgray font-500 mtpx13 sm-mtpx5 text-left sm-text-justify mbpx1 fsize16 sm-fsize13">
                {cmsdata3.title}
              </p>
              <button className="border-0 cursor-pointer sm-fsize13 font-500 textwhite rounded-5 sm-ptpx7  sm-pbpx7   sm-prpx20 sm-plpx20 ptpx12 pbpx12 plpx35 prpx35 mtpx25 sm-mtpx15 fsize16 bgprimary">
                About Us
              </button>
            </div>
            <div className="rounded-10 plpx25 prpx25 ptpx80 pbpx80 mlpx20 mrpx20 sm-mlpx10 sm-mrpx10 sm-ptpx40 sm-pbpx40 sm-plpx15 sm-prpx15 bg-fa mtpx100 sm-mtpx10">
              <small className="textsecondary font-500 mtpx13 text-left sm-text-justify mbpx1 sm-fsize12 fsize14">
                {cmsdata4.title}
              </small>
              <h5 className="textprimary font-600 mtpx5 sm-mtpx1 mbpx1 fsize30 sm-fsize23">
                {cmsdata5.title}
              </h5>
              <p className="textgray font-500 mtpx13 sm-mtpx5 text-left sm-text-justify mbpx1 fsize16 sm-fsize13">
                {cmsdata6.title}
              </p>
              <button className="border-0 cursor-pointer sm-fsize13 font-500 textwhite rounded-5 sm-ptpx7  sm-pbpx7   sm-prpx20 sm-plpx20 ptpx12 pbpx12 plpx35 prpx35 mtpx25 sm-mtpx15 fsize16 bgprimary">
                About Us
              </button>
            </div>
            <div className="rounded-10 plpx25 prpx25 ptpx80 pbpx80 mlpx20 mrpx20 sm-mlpx10 sm-mrpx10 sm-ptpx40 sm-pbpx40 sm-plpx15 sm-prpx15 bg-fa mtpx170 sm-mtpx10">
              <small className="textsecondary font-500 mtpx13 text-left sm-text-justify mbpx1 sm-fsize12 fsize14">
                {cmsdata7.title}
              </small>
              <h5 className="textprimary font-600 mtpx5 sm-mtpx1 mbpx1 fsize30 sm-fsize23">
                {cmsdata8.title}
              </h5>
              <p className="textgray font-500 mtpx13 sm-mtpx5 text-left sm-text-justify mbpx1 fsize16 sm-fsize13">
                {cmsdata9.title}
              </p>
              <button className="border-0 cursor-pointer sm-fsize13 font-500 textwhite rounded-5 sm-ptpx7  sm-pbpx7   sm-prpx20 sm-plpx20 ptpx12 pbpx12 plpx35 prpx35 mtpx25 sm-mtpx15 fsize16 bgprimary">
                About Us
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CardsEver;
