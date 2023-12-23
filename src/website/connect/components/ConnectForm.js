import React, { useState, useEffect } from "react";
import axios from "axios";
import gol from "../../../assets/new2.png";
import FeatherIcon from "feather-icons-react";

const ConnectForm = () => {
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
  const [cmsdata10, setcmsdata10] = useState("");

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextdata",
    });
    setcmsdata(response.data[57]);
    setcmsdata2(response.data[58]);
    setcmsdata3(response.data[59]);
    setcmsdata4(response.data[60]);
    setcmsdata5(response.data[61]);
    setcmsdata6(response.data[62]);
    setcmsdata7(response.data[63]);
    setcmsdata8(response.data[64]);
    setcmsdata9(response.data[65]);
    setcmsdata10(response.data[66]);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
  }, []);

  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="grid-cols-3 sm-grid-cols-1 gap-12 ptpx30 sm-ptpx20 sm-pbpx20 pbpx50">
          <div className="text-center">
            <img src={gol} alt="gol" className="connect-img object-contain" />
            <h3 className="textprimary font-600 mtpx10 mbpx1 fsize19 sm-fsize20">
              {cmsdata.title}
            </h3>
            <p className="textwhite font-500 sm-text-center mbpx1 fsize16 sm-fsize13">
              {cmsdata2.title}
            </p>
          </div>
          <div className="text-center sm-mtpx30">
            <img src={gol} alt="gol" className="connect-img object-contain" />
            <h3 className="textprimary font-600 mtpx10 mbpx1 fsize19 sm-fsize20">
              {cmsdata3.title}
            </h3>
            <p className="textwhite font-500 sm-text-center mbpx1 fsize16 sm-fsize13">
              {cmsdata4.title}
            </p>
          </div>
          <div className="text-center sm-mtpx30">
            <img src={gol} alt="gol" className="connect-img object-contain" />
            <h3 className="textprimary font-600 mtpx10 mbpx1 fsize19 sm-fsize20">
              {cmsdata5.title}
            </h3>
            <p className="textwhite font-500 sm-text-center mbpx1 fsize16 sm-fsize13">
              {cmsdata6.title}
            </p>
          </div>
        </div>
        <div className="flex sm-block ptpx30 pbpx30 sm-ptpx10 sm-pbpx10 sm-mtpx20 mtpx40 bgforth sm-bgnone rounded-20 w-full">
          <div className="w-50 sm-w-full mrpx65 sm-mrpx1 sm-mlpx1 mlpx30">
            <h4 className="textprimary font-600 mtpx10 mbpx1 fsize30 sm-fsize20">
              {cmsdata7.title}
            </h4>
            <p className="textwhite font-500 mtpx10 sm-fsize13 text-left mbpx1 fsize15 sm-fsize13">
              {cmsdata8.title}
            </p>
            <div className="">
              <h6 className="fsize24 mtpx19 sm-fsize17 mbpx1 textprimary font-600">
                {cmsdata9.title}
              </h6>

              <div className="flex items-center gap-9 mtpx16">
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="instagram"
                    size="20"
                    className="textwhite"
                  />
                </div>
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="linkedin"
                    size="20"
                    className="textwhite"
                  />
                </div>
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon icon="mail" size="20" className="textwhite" />
                </div>
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="facebook"
                    size="20"
                    className="textwhite"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 sm-w-full sm-mtpx30 sm-mlpx1 sm-mrpx1 mlpx65 mrpx30">
            <div className="bgwhite ptpx30 pbpx30 plpx40 prpx40 sm-ptpx20 sm-pbpx20 sm-plpx15 sm-prpx15 rounded-10">
              <h4 className="textprimary font-600 mtpx1 mbpx1 sm-fsize20 fsize29">
                {cmsdata10.title}
              </h4>
              <div className="mtpx10">
                <label className="fsize15 sm-fsize13 textdark">Name</label>
                <div>
                  <input
                    placeholder="Enter Name"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx10">
                <label className="fsize15 sm-fsize13 textdark">Phone</label>
                <div>
                  <input
                    placeholder="Enter Phone"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx10">
                <label className="fsize15 sm-fsize13 textdark">Email</label>
                <div>
                  <input
                    placeholder="Enter Email"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx10">
                <label className="fsize15 sm-fsize13 textdark">Message</label>
                <div>
                  <textarea
                    placeholder="Enter Name"
                    className="rounded-5 mtpx5 text-input"
                    rows={6}
                  ></textarea>
                </div>
              </div>
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 fsize16 sm-fsize13 sm-ptpx10 sm-pbpx10 sm-plpx20 sm-prpx20  ptpx8 pbpx8 plpx35 prpx35 sm-mtpx10 mtpx20 bgprimary">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectForm;
