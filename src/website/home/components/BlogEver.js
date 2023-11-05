import React from "react";
import blog from "../../../assets/log.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BlogEver = () => {
  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full">
          <div>
            <h4 className="textprimary font-600 mtpx1 mbpx1 fsize35">
              Blog<span className="textwhite mlpx5">Ever</span>
            </h4>
            <p className="textwhite font-500  text-left sm-text-justify mbpx1 fsize16">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text content.
            </p>
          </div>

          <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx12 pbpx12 plpx35 prpx35 fsize16 bgprimary">
            Blog Next
          </button>
        </div>
        <div className="mtpx35">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={3}
          >
            <SwiperSlide>
              <div className="p6 bgwhite rounded-10">
                <div className="p5">
                  <img
                    src={blog}
                    alt="blog"
                    className="blog-img bg-light-primary rounded-10 object-contain"
                  />
                </div>

                <div className="p10">
                  <div className="flex flex-wrap gap-8">
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      Category
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      New
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      Wow
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      How the
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      Wow
                    </p>
                  </div>

                  <h5 className="texttertiary font-600 mtpx9 mbpx1 fsize20">
                    Blog Management
                  </h5>
                  <p className="textgray font-500 mtpx5 text-justify mbpx1 fsize14">
                    In publishing and graphic design, Lorem graphic design,
                    ipsum is a placeholder graphic design, graphic design, text
                    content.
                  </p>
                  <div className="mtpx5 flex justify-end">
                    <p className="textgray font-500 mtpx5 text-justify mbpx1 fsize14">
                      19/2/2023
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p6 bgwhite rounded-10">
                <div className="p5">
                  <img
                    src={blog}
                    alt="blog"
                    className="blog-img bg-light-primary rounded-10 object-contain"
                  />
                </div>

                <div className="p10">
                  <div className="flex flex-wrap gap-8">
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      Category
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      New
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      Wow
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      How the
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      Wow
                    </p>
                  </div>

                  <h5 className="texttertiary font-600 mtpx9 mbpx1 fsize20">
                    Blog Management
                  </h5>
                  <p className="textgray font-500 mtpx5 text-justify mbpx1 fsize14">
                    In publishing and graphic design, Lorem graphic design,
                    ipsum is a placeholder graphic design, graphic design, text
                    content.
                  </p>
                  <div className="mtpx5 flex justify-end">
                    <p className="textgray font-500 mtpx5 text-justify mbpx1 fsize14">
                      19/2/2023
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p6 bgwhite rounded-10">
                <div className="p5">
                  <img
                    src={blog}
                    alt="blog"
                    className="blog-img bg-light-primary rounded-10 object-contain"
                  />
                </div>

                <div className="p10">
                  <div className="flex flex-wrap gap-8">
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      Category
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      New
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      Wow
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      How the
                    </p>
                    <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                      Wow
                    </p>
                  </div>

                  <h5 className="texttertiary font-600 mtpx9 mbpx1 fsize20">
                    Blog Management
                  </h5>
                  <p className="textgray font-500 mtpx5 text-justify mbpx1 fsize14">
                    In publishing and graphic design, Lorem graphic design,
                    ipsum is a placeholder graphic design, graphic design, text
                    content.
                  </p>
                  <div className="mtpx5 flex justify-end">
                    <p className="textgray font-500 mtpx5 text-justify mbpx1 fsize14">
                      19/2/2023
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogEver;
