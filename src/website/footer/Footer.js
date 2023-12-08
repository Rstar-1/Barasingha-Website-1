import React from "react";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
  return (
    <div className="w-full bgforth ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="flex sm-block justify-between gap-12 container mx-auto">
        <div className="footlogo">
          <div className="footerimg">
            <div>
              <h6 className="fsize24 sm-fsize20 mbpx1 mtpx1 font-900 textprimary">
                RS<span className="textwhite mlpx2">DEV</span>
              </h6>
              <p className="textwhite mtpx1 mbpx1 sm-fsize13 fsize20">
                Developers
              </p>
            </div>
          </div>
        </div>
        <div className="footcontent">
          <div className="grid-cols-4 sm-grid-cols-1 gap-12">
            <div className="sm-mtpx15">
              <h6 className="fsize21 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                About Us
              </h6>
              <hr className="foot-hr bgprimary border-0 block mlpx1" />
              <div className="mtpx8">
                <p className="fsize14 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  Gallery
                </p>
                <p className="fsize14 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  About
                </p>
              </div>
            </div>

            <div className="sm-mtpx15">
              <h6 className="fsize21 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                Our Services
              </h6>
              <hr className="foot-hr bgprimary border-0 block mlpx1" />
              <div className="mtpx8">
                <p className="fsize14 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  Service
                </p>
                <p className="fsize14 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  Connect
                </p>
              </div>
            </div>

            <div className="sm-mtpx15">
              <h6 className="fsize21 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                Help & Support
              </h6>
              <hr className="foot-hr bgprimary border-0 block mlpx1" />
              <div className="mtpx8">
                <p className="fsize14 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  Privacy Policy
                </p>
                <p className="fsize14 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  Terms & Conditions
                </p>
                <p className="fsize14 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  FAQ
                </p>
              </div>
            </div>

            <div className="sm-mtpx15">
              <h6 className="fsize21 sm-fsize20 mtpx5 mbpx1 textwhite font-500">
                Connect Us
              </h6>
              <hr className="foot-hr bgprimary border-0 block mlpx1" />
              <div className="flex items-center gap-9 mtpx8">
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="instagram"
                    size="20"
                    className="textwhite"
                  />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="linkedin"
                    size="20"
                    className="textwhite"
                  />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon icon="mail" size="20" className="textwhite" />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="facebook"
                    size="20"
                    className="textwhite"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
