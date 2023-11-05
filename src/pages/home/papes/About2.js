import React from "react";

const About2 = () => {
  return (
    <div className="bgwhite ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto ">
        <div className="sm-flex-column-reverse  flex items-center gap-12 w-full">
          <div className="w-50 sm-mtpx10 sm-w-full">
            <img
              src="https://imgur.com/rlaiGl4.jpg"
              alt="banner"
              className="about-img"
            />
          </div>
          <div className="w-50 sm-w-full mlpx70 sm-mlpx1">
            <small className="fsize15 textprimary">New Test</small>
            <h3 className="fsize27 sm-fsize25 mtpx1 mbpx1 textsecondary">
              I am cloud developer
            </h3>

            <p className="fsize15 sm-fsize13 mtpx12 mbpx1 font-100 textdark">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
