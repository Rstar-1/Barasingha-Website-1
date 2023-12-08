import React, { useState, useEffect } from "react";
import axios from "axios";
import about from "../../../assets/rock.png";

const About2 = () => {
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");
  const [cmsdata3, setcmsdata3] = useState("");

  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextdata",
    });
    setcmsdata(response.data[42]);
    setcmsdata2(response.data[43]);
    setcmsdata3(response.data[44]);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="bg-second ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block w-full sm-mtpx1 mtpx35 gap-12">
          <div className="w-60 sm-w-full prpx40 sm-prpx1">
            <h2 className="textprimary font-600 mtpx20 mbpx1 fsize35 sm-fsize20">
              {cmsdata.title}
              <span className="textwhite mlpx5">{cmsdata2.title}</span>
            </h2>
            <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16 sm-fsize13">
              {cmsdata3.title}
            </p>
           
          </div>
          <div className="w-40 sm-mtpx30 sm-w-full">
            <img
              src={about}
              alt="about2"
              className="about1-img object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
