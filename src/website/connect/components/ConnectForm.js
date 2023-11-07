import React from 'react';
import gol from "../../../assets/new2.png";

const ConnectForm = () => {
  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="grid-cols-3 gap-12 ptpx30 pbpx30">
          <div className="text-center">
            <img src={gol} alt="gol" className="connect-img object-contain" />
            <h3 className="textprimary font-600 mtpx10 mbpx1 fsize25">
              Phone Number
            </h3>
            <p className="textwhite font-500 sm-text-justify mbpx1 fsize16">
              In publishing and graphic design
            </p>
          </div>
          <div className="text-center">
            <img src={gol} alt="gol" className="connect-img object-contain" />
            <h3 className="textprimary font-600 mtpx10 mbpx1 fsize25">
              Email Address
            </h3>
            <p className="textwhite font-500 sm-text-justify mbpx1 fsize16">
              In publishing and graphic design
            </p>
          </div>
          <div className="text-center">
            <img src={gol} alt="gol" className="connect-img object-contain" />
            <h3 className="textprimary font-600 mtpx10 mbpx1 fsize25">
              Location
            </h3>
            <p className="textwhite font-500 sm-text-justify mbpx1 fsize16">
              In publishing and graphic design
            </p>
          </div>
        </div>
        <div className="flex ptpx40 pbpx40 mtpx20 bgforth rounded-20 w-full">
          <div className="w-50 mrpx65 mlpx30">
            <h4 className="textprimary font-600 mtpx10 mbpx1 fsize30">
              Connect with Us
            </h4>
            <p className="textwhite font-500 mtpx10 text-left mbpx1 fsize16">
              In publishing and graphic design, demonstrate the visual Lorem
              ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful demonstrate the visual content demonstrate the visual.
            </p>
          </div>
          <div className="w-50 mlpx65 mrpx30">
            <div className="bgwhite ptpx30 pbpx30 plpx40 prpx40 rounded-10">
              <h4 className="textprimary font-600 mtpx1 mbpx1 fsize29">
                Connect with Us
              </h4>
              <div className="mtpx20">
                <label className="fsize15 textdark">Name</label>
                <div>
                  <input
                    placeholder="Enter Name"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx20">
                <label className="fsize15 textdark">Email</label>
                <div>
                  <input
                    placeholder="Enter Email"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx20">
                <label className="fsize15 textdark">Message</label>
                <div>
                  <textarea
                    placeholder="Enter Name"
                    className="rounded-5 mtpx5 text-input"
                    rows={6}
                  ></textarea>
                </div>
              </div>
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 fsize16 ptpx8 pbpx8 plpx35 prpx35 mtpx20 bgprimary">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectForm
