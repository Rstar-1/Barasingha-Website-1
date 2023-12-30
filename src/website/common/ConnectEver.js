import React, { useState, useEffect } from "react";
import axios from "axios";

const ConnectEver = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[90]);
    setcmsdata2(response.data[91]);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
  }, []);

  return (
    <div className="ptpx40 pbpx20 sm-ptpx20 sm-pbpx1 bgforth">
      <div className="container mx-auto">
        <div className="bgprimary rounded-10 w-full">
          <div className="p35 sm-p20 flex sm-block items-center">
            <div className="w-80 sm-w-full">
              <h6 className="textwhite font-600 mtpx1 mbpx1 fsize25 sm-fsize20">
                {cmsdata.title}
              </h6>
              <p className="textwhite font-500 text-left sm-text-justify mbpx1 fsize15 sm-fsize13">
                {cmsdata2.title}
              </p>
            </div>
            <div className="w-20 sm-w-full sm-mtpx10 flex sm-block justify-end">
              <button className="border-0 cursor-pointer font-500 textprimary rounded-5 sm-ptpx9 sm-pbpx9 sm-plpx20 sm-prpx20 ptpx12 pbpx12 plpx35 prpx35 fsize16 sm-fsize13 bgwhite">
                Connect Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectEver;
