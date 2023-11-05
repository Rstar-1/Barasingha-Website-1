import React from 'react';
import FeatherIcon from "feather-icons-react";

const Connect = () => {
  return (
    <div id="connect">
      <div className="bgtertiary ptpx60 pbpx60 ">
        <div className="container mx-auto">
          <div className="w-full flex sm-block">
            <div className="w-50 sm-w-full sm-prpx1 prpx80 mtpx10">
              <h6 className="fsize29 sm-fsize25 mtpx1 mbpx11 textprimary">
                Connect<span className="textsecondary mlpx9">with us</span>
              </h6>
              <p className="fsize15 sm-fsize13 mtpx12 mbpx1 font-100 textdark">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available
              </p>
              <div className="grid-cols-2 sm-grid-cols-1 gap-12 mtpx25">
                <div className="bgwhite rounded-30 flex gap-5 items-center plpx10 prpx10 sm-pbpx8 sm-ptpx8 ptpx6 pbpx6 sm-mbpx5">
                  <div className="social-foot flex items-center justify-center bgprimary">
                    <FeatherIcon icon="phone" size="20" className="textwhite" />
                  </div>
                  <p className="fsize14 sm-mlpx6 textsecondary">+91 1234567890</p>
                </div>
                <div className="bgwhite rounded-30 flex gap-5 items-center plpx10 prpx10 sm-pbpx8 sm-ptpx8 ptpx6 pbpx6 sm-mbpx5">
                  <div className="social-foot flex items-center justify-center bgprimary">
                    <FeatherIcon icon="mail" size="20" className="textwhite" />
                  </div>
                  <p className="fsize14 sm-mlpx6 textsecondary">abcd@gmail.com</p>
                </div>
                <div className="bgwhite rounded-30 flex gap-5 items-center plpx10 prpx10 sm-pbpx8 sm-ptpx8 ptpx6 pbpx6 sm-mbpx5">
                  <div className="social-foot flex items-center justify-center bgprimary">
                    <FeatherIcon icon="map" size="20" className="textwhite" />
                  </div>
                  <p className="fsize14 sm-mlpx6 textsecondary">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
            <div className="w-50 sm-mtpx20 sm-w-full sm-plpx1 plpx90">
              <div className="bgwhite shdow rounded-10 ptpx30 pbpx30 plpx36 prpx50 sm-ptpx15 sm-pbpx15 sm-plpx15 sm-prpx30">
                <div className="mtpx10 mbpx10 block">
                  <label className="fsize14 font-500 textsecondary">Name</label>
                  <div>
                    <input
                      placeholder="Name"
                      className="input-css w-full mtpx9 sm-mrpx1 mrpx29"
                    />
                  </div>
                </div>
                <div className="mtpx10 mbpx10 block">
                  <label className="fsize14 font-500 textsecondary">
                    Email
                  </label>
                  <input
                    placeholder="Name"
                    className="input-css w-full mtpx9 sm-mrpx1 mrpx29"
                  />
                </div>
                <div className="mtpx10 mbpx10 block">
                  <label className="fsize14 font-500 textsecondary">
                    Phone Number
                  </label>
                  <input
                    placeholder="Name"
                    className="input-css w-full mtpx9 sm-mrpx1 mrpx29"
                  />
                </div>
                <div className="mtpx10 mbpx10 block">
                  <label className="fsize14 font-500 textsecondary">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    className="rounded-5 w-full border-ec ptpx10 plpx10 mtpx9 sm-mrpx1 mrpx29"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
                <div className="mtpx20 mbpx10">
                  <button className="bgsecondary textwhite rounded-5 border-0 ptpx9 pbpx9 plpx20 prpx20 fsize14">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect
