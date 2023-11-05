import React from 'react';
import FeatherIcon from "feather-icons-react";

const Service = () => {
  return (
    <div className="bgforth ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h4 className="textprimary font-600 mtpx1 mbpx1 fsize35">
            Services<span className="textwhite mlpx5">Low</span>
          </h4>
        </div>
        <div className="grid-cols-3 mtpx50 gap-12">
          <div className="borderprimary p40 rounded-5">
            <div className="service-dot flex justify-center bgprimary rounded-10 items-center">
              <FeatherIcon icon="user" size={22} className="textwhite" />
            </div>
            <h5 className="textwhite font-600 mtpx20 mbpx1 fsize25">Heading</h5>
            <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
          <div className="borderprimary p40 rounded-5">
            <div className="service-dot flex justify-center bgprimary rounded-10 items-center">
              <FeatherIcon icon="user" size={22} className="textwhite" />
            </div>
            <h5 className="textwhite font-600 mtpx20 mbpx1 fsize25">Heading</h5>
            <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
          <div className="borderprimary p40 rounded-5">
            <div className="service-dot flex justify-center bgprimary rounded-10 items-center">
              <FeatherIcon icon="user" size={22} className="textwhite" />
            </div>
            <h5 className="textwhite font-600 mtpx20 mbpx1 fsize25">Heading</h5>
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

export default Service
