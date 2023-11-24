import React, { useState, useEffect } from "react";
import copper from "../../../assets/copper.png";
import plan from "../../../assets/plan.svg";
import silver from "../../../assets/silver.png";
import gold from "../../../assets/gold.png";
import FeatherIcon from "feather-icons-react";
import axios from "axios";

const PlanCard = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [getuserdata2, setUserdata2] = useState([]);
  const [getuserdata3, setUserdata3] = useState([]);

  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getplandata",
    });
    setUserdata(response.data);
  };
  const getdatatwo = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getplantwodata",
    });
    setUserdata2(response.data);
  };
  const getdatathree = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getplanthirddata",
    });
    setUserdata3(response.data);
  };
  useEffect(() => {
    getdata();
    getdatatwo();
    getdatathree();
  }, []);
  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="grid-cols-3 gap-12">
          <div className="p30 bgwhite rounded-10 shadow relative">
            <img
              src={copper}
              alt="copper"
              className="plan-img bg-ec p5 rounded-full"
            />
            <div>
              <small className="textgray fsize14 font-500">Small Plans</small>
              <h2 className="textdark fsize24 mtpx3 mbpx1 font-600">
                Basic Plans
              </h2>
              <div className="mtpx10 grid-cols-1 gap-9">
                {getuserdata.map((e) => (
                  <div className="flex items-center gap-5">
                    <FeatherIcon
                      icon="check"
                      className="textsuccess"
                      size={18}
                    />
                    <p className="fsize15 font-600 texttertiary">{e.plan}</p>
                  </div>
                ))}
              </div>
              <div className="mtpx20">
                <button className="border-0 cursor-pointer font-500 textwhite rounded-5 w-full ptpx10 pbpx10 plpx35 prpx35 fsize15 bgprimary">
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
          <div className="p30 bgwhite rounded-10 shadow relative">
            <img
              src={silver}
              alt="copper"
              className="plan-img bg-ec p5 rounded-full"
            />
            <div>
              <small className="textgray fsize14 font-500">Small Plans</small>
              <h2 className="textdark fsize24 mtpx3 mbpx1 font-600">
                Basic Plans
              </h2>
              <div className="mtpx10 grid-cols-1 gap-9">
                {getuserdata2.map((e) => (
                  <div className="flex items-center gap-5">
                    <FeatherIcon
                      icon="check"
                      className="textsuccess"
                      size={18}
                    />
                    <p className="fsize15 font-600 texttertiary">{e.plan}</p>
                  </div>
                ))}
              </div>
              <div className="mtpx20">
                <button className="border-0 cursor-pointer font-500 textwhite rounded-5 w-full ptpx10 pbpx10 plpx35 prpx35 fsize15 bgprimary">
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
          <div className="p30 bgwhite rounded-10 shadow relative">
            <img
              src={gold}
              alt="copper"
              className="plan-img bg-ec p5 rounded-full"
            />
            <div>
              <small className="textgray fsize14 font-500">Small Plans</small>
              <h2 className="textdark fsize24 mtpx3 mbpx1 font-600">
                Basic Plans
              </h2>
              <div className="mtpx10 grid-cols-1 gap-9">
                {getuserdata3.map((e) => (
                  <div className="flex items-center gap-5">
                    <FeatherIcon
                      icon="check"
                      className="textsuccess"
                      size={18}
                    />
                    <p className="fsize15 font-600 texttertiary">{e.plan}</p>
                  </div>
                ))}
              </div>
              <div className="mtpx20">
                <button className="border-0 cursor-pointer font-500 textwhite rounded-5 w-full ptpx10 pbpx10 plpx35 prpx35 fsize15 bgprimary">
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
      </div>
    </div>
  );
};

export default PlanCard;
