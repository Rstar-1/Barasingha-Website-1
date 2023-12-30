import React, { useState, useEffect } from "react";
import axios from "axios";
import elearn from "../../../assets/log.png";

const ElearnCard = () => {
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");
  const [cmsdata3, setcmsdata3] = useState("");
  const [cmsdata4, setcmsdata4] = useState("");

  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[84]);
    setcmsdata2(response.data[85]);
    setcmsdata3(response.data[86]);
    setcmsdata4(response.data[87]);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="bg-second ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex flex-wrap overflow-auto gap-12">
          <p className="ptpx5 pbpx5 plpx30 prpx30 sm-plpx20 sm-prpx20 bg-light-primary textprimary fsize16 sm-fsize13 rounded-10 w-max">
            Website
          </p>
          <p className="ptpx5 pbpx5 plpx30 prpx30 sm-plpx20 sm-prpx20 bg-light-primary textprimary fsize16 sm-fsize13 rounded-10 w-max">
            Cloud
          </p>
          <p className="ptpx5 pbpx5 plpx30 prpx30 sm-plpx20 sm-prpx20 bg-light-primary textprimary fsize16 sm-fsize13 rounded-10 w-max">
            Secuty
          </p>
          <p className="ptpx5 pbpx5 plpx30 prpx30 sm-plpx20 sm-prpx20 bg-light-primary textprimary fsize16 sm-fsize13 rounded-10 w-max">
            Mobile
          </p>
        </div>
        <div className="flex sm-block gap-12 items-start mtpx20 w-full">
          <div className="w-70 sm-w-full rounded-10">
            <div className="grid-cols-2 sm-grid-cols-1 gap-9">
              <div className="bgwhite rounded-10">
                <div className="p5">
                  <img
                    src={elearn}
                    alt="blog"
                    className="elearn-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
                <div className="pbpx20 prpx20 plpx20 ptpx5">
                  <p className="textgray font-500 mtpx1 text-justify mbpx1 fsize11">
                    19/2/2023
                  </p>
                  <h5 className="texttertiary font-600 mtpx2 mbpx1 fsize16">
                    In publishing and graphic design, Lorem graphic design,
                  </h5>
                  <div className="flex flex-wrap gap-8 mtpx9">
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-ec textgray fsize13 rounded-20 w-max">
                      Category
                    </p>
                  </div>
                  <button className="border-0 cursor-pointer font-500 mtpx20 textwhite rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="bgwhite rounded-10">
                <div className="p5">
                  <img
                    src={elearn}
                    alt="blog"
                    className="elearn-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
                <div className="pbpx20 prpx20 plpx20 ptpx5">
                  <p className="textgray font-500 mtpx1 text-justify mbpx1 fsize11">
                    19/2/2023
                  </p>
                  <h5 className="texttertiary font-600 mtpx2 mbpx1 fsize16">
                    In publishing and graphic design, Lorem graphic design,
                  </h5>
                  <div className="flex flex-wrap gap-8 mtpx9">
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-ec textgray fsize13 rounded-20 w-max">
                      Category
                    </p>
                  </div>
                  <button className="border-0 cursor-pointer font-500 mtpx20 textwhite rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="bgwhite rounded-10">
                <div className="p5">
                  <img
                    src={elearn}
                    alt="blog"
                    className="elearn-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
                <div className="pbpx20 prpx20 plpx20 ptpx5">
                  <p className="textgray font-500 mtpx1 text-justify mbpx1 fsize11">
                    19/2/2023
                  </p>
                  <h5 className="texttertiary font-600 mtpx2 mbpx1 fsize16">
                    In publishing and graphic design, Lorem graphic design,
                  </h5>
                  <div className="flex flex-wrap gap-8 mtpx9">
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-ec textgray fsize13 rounded-20 w-max">
                      Category
                    </p>
                  </div>
                  <button className="border-0 cursor-pointer font-500 mtpx20 textwhite rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="bgwhite rounded-10">
                <div className="p5">
                  <img
                    src={elearn}
                    alt="blog"
                    className="elearn-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
                <div className="pbpx20 prpx20 plpx20 ptpx5">
                  <p className="textgray font-500 mtpx1 text-justify mbpx1 fsize11">
                    19/2/2023
                  </p>
                  <h5 className="texttertiary font-600 mtpx2 mbpx1 fsize16">
                    In publishing and graphic design, Lorem graphic design,
                  </h5>
                  <div className="flex flex-wrap gap-8 mtpx9">
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-ec textgray fsize13 rounded-20 w-max">
                      Category
                    </p>
                  </div>
                  <button className="border-0 cursor-pointer font-500 mtpx20 textwhite rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="bgwhite rounded-10">
                <div className="p5">
                  <img
                    src={elearn}
                    alt="blog"
                    className="elearn-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
                <div className="pbpx20 prpx20 plpx20 ptpx5">
                  <p className="textgray font-500 mtpx1 text-justify mbpx1 fsize11">
                    19/2/2023
                  </p>
                  <h5 className="texttertiary font-600 mtpx2 mbpx1 fsize16">
                    In publishing and graphic design, Lorem graphic design,
                  </h5>
                  <div className="flex flex-wrap gap-8 mtpx9">
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-ec textgray fsize13 rounded-20 w-max">
                      Category
                    </p>
                  </div>
                  <button className="border-0 cursor-pointer font-500 mtpx20 textwhite rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="bgwhite rounded-10">
                <div className="p5">
                  <img
                    src={elearn}
                    alt="blog"
                    className="elearn-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
                <div className="pbpx20 prpx20 plpx20 ptpx5">
                  <p className="textgray font-500 mtpx1 text-justify mbpx1 fsize11">
                    19/2/2023
                  </p>
                  <h5 className="texttertiary font-600 mtpx2 mbpx1 fsize16">
                    In publishing and graphic design, Lorem graphic design,
                  </h5>
                  <div className="flex flex-wrap gap-8 mtpx9">
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-ec textgray fsize13 rounded-20 w-max">
                      Category
                    </p>
                  </div>
                  <button className="border-0 cursor-pointer font-500 mtpx20 textwhite rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-30 sm-w-full sm-hidden">
            <div className="plpx30 prpx30 ptpx40 pbpx40 bgprimary overflow-hidden relative rounded-10">
              <small className="textwhite font-500 text-left sm-text-justify mbpx1 fsize13">
                {cmsdata.title}
              </small>
              <h5 className="textwhite font-600 mtpx6 mbpx3 fsize21">
                {cmsdata2.title}
              </h5>
              <p className="textwhite font-500 text-left sm-text-justify mbpx1 fsize15">
                {cmsdata3.title}
              </p>
              <button className="border-0 cursor-pointer font-500 mtpx20 textprimary rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgwhi9te">
                Get Started
              </button>
              <div className="absolute top-0 right-0">
                <div className="bg-glass2 bg-circle rounded-full z-10"></div>
              </div>
              <div className="absolute top-0 right-0">
                <div className="bg-glass2 bg-circle2 rounded-full z-10"></div>
              </div>
            </div>
            <div className="mtpx20">
              <div className="bgwhite shadow ptpx5 pbpx5 plpx15 prpx15 rounded-5">
                <h6 className="textprimary fsize17 mtpx1 mbpx1 font-semibold">
                  {cmsdata4.title}
                </h6>
              </div>
              <div className="grid-cols-1 mtpx10">
                <div className="p5">
                  <img
                    src={elearn}
                    alt="blog"
                    className="elearn-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
                <div className="p5">
                  <img
                    src={elearn}
                    alt="blog"
                    className="elearn-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
                <div className="p5">
                  <img
                    src={elearn}
                    alt="blog"
                    className="elearn-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElearnCard;
