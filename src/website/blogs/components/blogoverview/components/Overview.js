import React from 'react';
import blog from "../../../../../assets/log.png";

const Overview = () => {
  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="flex items-start gap-12 w-full">
          <div className="w-70">
            <div className="">
              <h5 className="textwhite font-600 mtpx1 mbpx1 fsize25">
                Blog Management
              </h5>
              <p className="textwhite font-500 mtpx5 text-justify mbpx1 fsize14">
                19/2/2023
              </p>
              <img
                src={blog}
                alt="blog"
                className="blogoverview-img bg-light-primary mtpx16 rounded-10 object-contain"
              />
              <div className="mtpx6">
                <div className="flex flex-wrap mtpx10 gap-8">
                  <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize15 rounded-20 w-max">
                    Category
                  </p>
                  <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize15 rounded-20 w-max">
                    New
                  </p>
                  <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize15 rounded-20 w-max">
                    Wow
                  </p>
                  <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize15 rounded-20 w-max">
                    How the
                  </p>
                  <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize15 rounded-20 w-max">
                    Wow
                  </p>
                </div>

                <p className="textwhite font-500 mtpx15 text-justify mbpx1 fsize14">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.<br></br>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available. In publishing and graphic design, Lorem ipsum is a
                  placeholder text commonly used to demonstrate the visual form
                  of a document or a typeface without relying on meaningful
                  content. Lorem ipsum may be used as a placeholder before final
                  copy is available.
                </p>
              </div>
            </div>
          </div>
          <div className="w-30">
            <div className="">
              <div className="bgwhite shadow ptpx5 pbpx5 plpx15 prpx15 rounded-5">
                <h6 className="textprimary fsize17 mtpx1 mbpx1 font-semibold">
                  Top Popular
                </h6>
              </div>
              <div className="grid-cols-1 mtpx10">
                <div className="p5">
                  <img
                    src={blog}
                    alt="blog"
                    className="blog-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
                <div className="p5">
                  <img
                    src={blog}
                    alt="blog"
                    className="blog-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
                <div className="p5">
                  <img
                    src={blog}
                    alt="blog"
                    className="blog-img bg-light-primary rounded-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview
