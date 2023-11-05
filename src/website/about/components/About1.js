import React from 'react';
import about from "../../../assets/reg.png";

const About1 = () => {
  return (
    <div className="bgforth ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="flex w-full mtpx35 gap-12">
          <div className="w-40 prpx40 sm-prpx1">
            <img src={about} alt="about1" className="about1-img object-contain" />
          </div>
          <div className="w-60">
            <h2 className="textprimary font-600 mtpx20 mbpx1 fsize35">
              Heading<span className="textwhite mlpx5">Low</span>
            </h2>
            <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1
