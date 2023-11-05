import React from 'react';

const About1 = () => {
  return (
    <div id="about">
      <div className="bgwhite ptpx60 pbpx30 ">
        <div className="container mx-auto ">
          <div className="sm-block flex items-center gap-12 w-full">
            <div className="w-50 sm-w-full mrpx70 sm-mrpx1">
              <small className="fsize15 textprimary">New Test</small>
              <h3 className="fsize27 sm-fsize25 mtpx1 mbpx1 textsecondary">
                I am cloud developer
              </h3>

              <p className="fsize15 sm-fsize13 mtpx12 mbpx1 font-100 textdark">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available
              </p>
              <div className=" flex gap-12 sm-mtpx10 mtpx25 items-center">
                <button className="bgsecondary border-0 fsize16 sm-fsize13 font-500 cursor-pointer textwhite plpx30 prpx30  sm-ptpx10 sm-pbpx10 ptpx12 pbpx12 rounded-5">
                  Gallery
                </button>
              </div>
            </div>
            <div className="w-50 sm-mtpx20 sm-w-full">
              <img
                src="https://imgur.com/kzzdxSJ.jpg"
                alt="banner"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1
