import React from 'react';
import about from "../../../assets/log.png"

const AboutEver = () => {
  return (
    <div className="bgforth ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="flex w-full mtpx35 gap-12">
          <div className="w-50 prpx40 sm-prpx1">
            <img src={about} alt="about" className="w-full" />
          </div>
          <div className="w-50">
            <h2 className="textprimary font-600 mtpx20 mbpx1 fsize35">
              Heading<span className="textwhite mlpx5">Low</span>
            </h2>
            <p className="textwhite font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <div className="grid-cols-1 gap-12 mtpx20">
              <div className="bg-glass2 p17 rounded-5 flex items-center gap-12">
                <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 mbpx1 rounded-5">
                  01
                </h3>
                <p className="textwhite mlpx5 font-500 text-left sm-text-justify fsize14">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the content.
                </p>
              </div>
              <div className="bg-glass2 p17 rounded-5 flex items-center gap-12 mtpx10">
                <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 mbpx1 rounded-5">
                  02
                </h3>
                <p className="textwhite mlpx5 font-500 text-left sm-text-justify fsize14">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the content.
                </p>
              </div>
              <div className="bg-glass2 p17 rounded-5 flex items-center gap-12 mtpx10">
                <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 mbpx1 rounded-5">
                  03
                </h3>
                <p className="textwhite mlpx5 font-500 text-left sm-text-justify fsize14">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the content.
                </p>
              </div>
            </div>
            <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx12 pbpx12 plpx35 prpx35 mtpx35 fsize16 bgprimary">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEver
