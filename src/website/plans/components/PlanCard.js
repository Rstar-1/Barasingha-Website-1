import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";
import FeatherIcon from "feather-icons-react";
import Basicuser from "./popup/Basicuser";
import Premiumuser from "./popup/Premiumuser";
import SuperPremiumuser from "./popup/SuperPremiumuser";
import plan from "../../../assets/plan.svg";

const PlanCard = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");
  const [cmsdata3, setcmsdata3] = useState("");
  const [cmsdata4, setcmsdata4] = useState("");
  const [cmsdata5, setcmsdata5] = useState("");
  const [cmsdata6, setcmsdata6] = useState("");
  // CMS Image UseState Data
  const [cmsimagedata, setcmsimagedata] = useState("");
  const [cmsimagedata2, setcmsimagedata2] = useState("");
  const [cmsimagedata3, setcmsimagedata3] = useState("");

  // Plans UseState Data
  const [getplansdata, setplansdata] = useState([]);
  const [getplansdata2, setplansdata2] = useState([]);
  const [getplansdata3, setplansdata3] = useState([]);

  // Basic Popup
  const [Basic, setBasic] = useState(false);
  // Premium Popup
  const [Premium, setPremium] = useState(false);
  // Super Premium Popup
  const [SuperPremium, setSuperPremium] = useState(false);

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[46]);
    setcmsdata2(response.data[47]);
    setcmsdata3(response.data[48]);
    setcmsdata4(response.data[49]);
    setcmsdata5(response.data[50]);
    setcmsdata6(response.data[51]);
  };
  const getcmsimagedata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getimagealldata",
    });
    setcmsimagedata(response.data[8]);
    setcmsimagedata2(response.data[9]);
    setcmsimagedata3(response.data[10]);
  };
  const getplandata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getplanalldata",
    });
    setplansdata(response.data);
  };
  const getplandatatwo = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getplanalltwodata",
    });
    setplansdata2(response.data);
  };
  const getplandatathree = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getplanallthirddata",
    });
    setplansdata3(response.data);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
    getcmsimagedata();
    getplandata();
    getplandatatwo();
    getplandatathree();
  }, []);

  return (
    <div className="bg-second ptpx40 pbpx40">
      {/* ============== Basic Popup ============== */}
      {Basic ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow w-50 sm-w-full absolute center-absolute rounded-5 overflow-hidden">
            <div className="p15 border-primary bgprimary">
              <div className="flex items-center justify-between gap-4">
                <p className="textwhite fsize15 font-500">Basic User</p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={20}
                  onClick={() => setBasic(false)}
                />
              </div>
            </div>
            <Basicuser />
          </div>
        </div>
      ) : null}
      {/* ============== Basic Popup ============== */}

      {/* ============== Premium Popup ============== */}
      {Premium ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow w-50 sm-w-full absolute center-absolute rounded-5 overflow-hidden">
            <div className="p15 bgprimary">
              <div className="flex items-center justify-between gap-4">
                <p className="textwhite fsize15 font-500">Premium User</p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={20}
                  onClick={() => setPremium(false)}
                />
              </div>
            </div>
            <Premiumuser />
          </div>
        </div>
      ) : null}
      {/* ============== Premium Popup ============== */}

      {/* ============== SuperPremium Popup ============== */}
      {SuperPremium ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow w-50 sm-w-full absolute center-absolute rounded-5 overflow-hidden">
            <div className="p15 bgprimary">
              <div className="flex items-center justify-between gap-4">
                <p className="textwhite fsize15 font-500">Super Premium User</p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={20}
                  onClick={() => setSuperPremium(false)}
                />
              </div>
            </div>
            <SuperPremiumuser />
          </div>
        </div>
      ) : null}
      {/* ============== SuperPremium Popup ============== */}

      <div className="container mx-auto">
        <Fade bottom cascade>
          <div className="grid-cols-3 sm-grid-cols-1 gap-12">
            <div className="p30 sm-p18 bgwhite rounded-10 shadow relative">
              <img
                src={cmsimagedata.picture}
                alt="copper"
                className="plan-img bg-ec p5 rounded-full"
              />
              <div>
                <small className="textgray fsize14 sm-fsize13 font-500">
                  {cmsdata.title}
                </small>
                <h2 className="textprimary fsize24 mtpx3 mbpx1 sm-fsize20 font-600">
                  {cmsdata2.title}
                </h2>
                <div className="mtpx10 grid-cols-1 gap-9">
                  {getplansdata.map((e) => (
                    <div className="flex items-start gap-5">
                      <FeatherIcon
                        icon="check"
                        className="textsuccess mtpx5"
                        size={18}
                      />
                      <p className="fsize15 sm-fsize13 font-600 texttertiary">
                        {e.plan}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mtpx20">
                  <button
                    className="border-0 cursor-pointer sm-fsize13 font-500 textwhite rounded-5 w-full ptpx10 pbpx10 plpx35 prpx35 fsize15 bgprimary"
                    onClick={() => setBasic(true)}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <img
                  src={plan}
                  alt="copper"
                  className="side-img p5 rounded-full"
                />
              </div>
            </div>
            <div className="p30 sm-p18 bgwhite rounded-10 shadow relative">
              <img
                src={cmsimagedata2.picture}
                alt="copper"
                className="plan-img bg-ec p5 rounded-full"
              />
              <div>
                <small className="textgray fsize14 sm-fsize13 font-500">
                  {cmsdata3.title}
                </small>
                <h2 className="textprimary fsize24 sm-fsize20 mtpx3 mbpx1 font-600">
                  {cmsdata4.title}
                </h2>
                <div className="mtpx10 grid-cols-1 gap-9">
                  {getplansdata2.map((e) => (
                    <div className="flex items-start gap-5">
                      <FeatherIcon
                        icon="check"
                        className="textsuccess mtpx5"
                        size={18}
                      />
                      <p className="fsize15 sm-fsize13 font-600 texttertiary">
                        {e.plan}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mtpx20">
                  <button
                    className="border-0 cursor-pointer font-500 sm-fsize13 textwhite rounded-5 w-full ptpx10 pbpx10 plpx35 prpx35 fsize15 bgprimary"
                    onClick={() => setPremium(true)}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <img
                  src={plan}
                  alt="copper"
                  className="side-img p5 rounded-full"
                />
              </div>
            </div>
            <div className="p30 sm-p18 bgwhite rounded-10 shadow relative">
              <img
                src={cmsimagedata3.picture}
                alt="copper"
                className="plan-img bg-ec p5 rounded-full"
              />
              <div>
                <small className="textgray fsize14 sm-fsize13 font-500">
                  {cmsdata5.title}
                </small>
                <h2 className="textprimary fsize24 sm-fsize20 mtpx3 mbpx1 font-600">
                  {cmsdata6.title}
                </h2>
                <div className="mtpx10 grid-cols-1 gap-9">
                  {getplansdata3.map((e) => (
                    <div className="flex items-start gap-5">
                      <FeatherIcon
                        icon="check"
                        className="textsuccess mtpx5"
                        size={18}
                      />
                      <p className="fsize15 sm-fsize13 font-600 texttertiary">
                        {e.plan}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mtpx20">
                  <button
                    className="border-0 cursor-pointer sm-fsize13 font-500 textwhite rounded-5 w-full ptpx10 pbpx10 plpx35 prpx35 fsize15 bgprimary"
                    onClick={() => setSuperPremium(true)}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0">
                <img
                  src={plan}
                  alt="copper"
                  className="side-img p5 rounded-full"
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default PlanCard;
