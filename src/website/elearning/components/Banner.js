import React from "react";

const Banner = () => {
  return (
    <div className="relative bgprimary h-banner w-full">
      <div className="absolute top-0 w-full h-banner flex items-center justify-center">
        <div className="w-70">
          <h2 className="fsize35 mtpx1 mbpx1 textwhite text-center font-600">
            Elearning
          </h2>
          <p className="textwhite font-500 mtpx5 text-center sm-text-justify mbpx1 fsize16">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
