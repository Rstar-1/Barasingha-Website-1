import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import FeatherIcon from "feather-icons-react";

const Service = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");
  const [cmsdata3, setcmsdata3] = useState("");
  const [cmsdata4, setcmsdata4] = useState("");
  const [cmsdata5, setcmsdata5] = useState("");
  const [cmsdata6, setcmsdata6] = useState("");
  const [cmsdata7, setcmsdata7] = useState("");
  const [cmsdata8, setcmsdata8] = useState("");

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[24]);
    setcmsdata2(response.data[25]);
    setcmsdata3(response.data[26]);
    setcmsdata4(response.data[27]);
    setcmsdata5(response.data[28]);
    setcmsdata6(response.data[29]);
    setcmsdata7(response.data[30]);
    setcmsdata8(response.data[31]);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
  }, []);

  return (
    <div className="bgforth ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="flex sm-block justify-center">
          <h4 className="textprimary font-600 mtpx1 mbpx1 fsize35 sm-fsize23">
            {cmsdata.title}
            <span className="textwhite mlpx5">{cmsdata2.title}</span>
          </h4>
        </div>
        <div className="grid-cols-3 sm-grid-cols-1 mtpx50 sm-mtpx20 gap-12">
          <Fade top cascade>
            <div className="borderprimary p40 sm-p20 rounded-5">
              <div className="service-dot flex justify-center bgprimary rounded-10 items-center">
                <FeatherIcon icon="user" size={22} className="textwhite" />
              </div>
              <h5 className="textwhite font-600 sm-font-400 sm-fsize20 mtpx20 mbpx1 fsize25">
                {cmsdata3.title}
              </h5>
              <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16  sm-fsize13">
                {cmsdata4.title}
              </p>
            </div>
          </Fade>
          <Fade top cascade>
            <div className="borderprimary p40 sm-p20 rounded-5">
              <div className="service-dot flex justify-center bgprimary rounded-10 items-center">
                <FeatherIcon icon="user" size={22} className="textwhite" />
              </div>
              <h5 className="textwhite font-600 sm-font-400 sm-fsize20 mtpx20 mbpx1 fsize25">
                {cmsdata5.title}
              </h5>
              <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16  sm-fsize13">
                {cmsdata6.title}
              </p>
            </div>
          </Fade>
          <Fade top cascade>
            <div className="borderprimary p40 sm-p20 rounded-5">
              <div className="service-dot flex justify-center bgprimary rounded-10 items-center">
                <FeatherIcon icon="user" size={22} className="textwhite" />
              </div>
              <h5 className="textwhite font-600 sm-font-400 sm-fsize20 mtpx20 mbpx1 fsize25">
                {cmsdata7.title}
              </h5>
              <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16  sm-fsize13">
                {cmsdata8.title}
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Service;
