import React from "react";
import banner from "../../../assets/new.png";
import gol from "../../../assets/new2.png";

const Banner = () => {
  return (
    <div className="ptpx80 pbpx80 bgforth flex items-center">
      <div className="container mx-auto">
        <div className="flex w-full items-center">
          <div className="w-50">
            <h2 className="textwhite font-600 text-left sm-text-justify mbpx1 fsize25">
              Sub Title
            </h2>
            <h3 className="textprimary font-600 mtpx9 leading mbpx1 fsize50">
              Welcome to the{" "}
              <span className="mlpx5 textwhite">cyber world</span>
            </h3>
            <p className="textwhite font-500 mtpx13 text-left mbpx1 fsize16">
              In publishing and graphic design, demonstrate the visual Lorem
              ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful demonstrate the visual content demonstrate the visual.
            </p>

            <div className="flex items-center gap-10">
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx12 pbpx12 plpx35 prpx35 mtpx20 fsize16 bgprimary">
                About Us
              </button>
              <button className="cursor-pointer font-500 rounded-5 ptpx12 pbpx12 plpx35 prpx35 mtpx20 fsize16 primarybtn">
                About Us
              </button>
            </div>
          </div>
          <div className="w-50 relative">
            <img
              src={banner}
              alt="banner"
              className="banner-img object-contain"
            />
            <img
              src={gol}
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
