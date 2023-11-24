import React from 'react';
import gol from "../../../assets/new2.png";
import FeatherIcon from "feather-icons-react";

const ConnectForm = () => {
  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="grid-cols-3 gap-12 ptpx30 pbpx50">
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
        <div className="flex ptpx30 pbpx30 mtpx40 bgforth rounded-20 w-full">
          <div className="w-50 mrpx65 mlpx30">
            <h4 className="textprimary font-600 mtpx10 mbpx1 fsize30">
              Get in Touch
            </h4>
            <p className="textwhite font-500 mtpx10 text-left mbpx1 fsize15">
              In publishing and graphic design, demonstrate the visual Lorem
              ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document <br></br> <br></br> or a typeface
              without relying on meaningful demonstrate the visual content
              demonstrate the visual.
            </p>
            <div className="">
              <h6 className="fsize24 mtpx19 mbpx1 textprimary font-600">
                Connect Us
              </h6>

              <div className="flex items-center gap-9 mtpx16">
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="instagram"
                    size="20"
                    className="textwhite"
                  />
                </div>
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="linkedin"
                    size="20"
                    className="textwhite"
                  />
                </div>
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon icon="mail" size="20" className="textwhite" />
                </div>
                <div className="social-connect sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="facebook"
                    size="20"
                    className="textwhite"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 mlpx65 mrpx30">
            <div className="bgwhite ptpx30 pbpx30 plpx40 prpx40 rounded-10">
              <h4 className="textprimary font-600 mtpx1 mbpx1 fsize29">
                Connect with Us
              </h4>
              <div className="mtpx10">
                <label className="fsize15 textdark">Name</label>
                <div>
                  <input
                    placeholder="Enter Name"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx10">
                <label className="fsize15 textdark">Phone</label>
                <div>
                  <input
                    placeholder="Enter Phone"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx10">
                <label className="fsize15 textdark">Email</label>
                <div>
                  <input
                    placeholder="Enter Email"
                    className="h-input rounded-5 mtpx5 w-input"
                  />
                </div>
              </div>
              <div className="mtpx10">
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
