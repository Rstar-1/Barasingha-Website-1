import React from 'react';
import ecom from "../../../../../assets/log.png";

const Overview = () => {
  return (
    <div className="bgforth ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="flex items-start gap-12 w-full">
          <div className="w-50 prpx10">
            <img
              src={ecom}
              alt="ecom"
              className="ecomoverview-img bg-light-primary  rounded-10 object-contain"
            />
            <div className="grid-cols-4 mtpx10 gap-12">
              <img
                src={ecom}
                alt="ecom"
                className="ecogrid-img bg-light-primary  rounded-10 object-contain"
              />
              <img
                src={ecom}
                alt="ecom"
                className="ecogrid-img bg-light-primary  rounded-10 object-contain"
              />
              <img
                src={ecom}
                alt="ecom"
                className="ecogrid-img bg-light-primary  rounded-10 object-contain"
              />
              <img
                src={ecom}
                alt="ecom"
                className="ecogrid-img bg-light-primary  rounded-10 object-contain"
              />
            </div>
          </div>
          <div className="w-50 plpx10">
            <div className="">
              <p className="textsecondary font-500 text-justify mbpx1 fsize16">
                Sub Title
              </p>
              <h5 className="textwhite font-600 mtpx1 mbpx1 fsize25">
                Ecom Management
              </h5>
              <div className="flex flex-wrap mtpx15 gap-8">
                <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                  Category
                </p>
              </div>
              <p className="textwhite font-200 mtpx25 text-justify mbpx1 fsize14">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
              <p className="textwhite font-500 mtpx25 text-justify mbpx1 fsize16">
                Rs. 1200 /-
              </p>
              <div className="mtpx15  w-full gap-12 items-center">
                <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx10 pbpx10 w-full fsize16 bgprimary">
                  Add To Cart
                </button>
                <button className="border-0 cursor-pointer font-500 textprimary rounded-5 mtpx15 ptpx10 pbpx10 w-full fsize16 bgpwhite">
                  Whishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview
