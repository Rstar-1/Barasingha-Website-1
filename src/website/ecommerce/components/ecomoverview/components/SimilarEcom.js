import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FeatherIcon from "feather-icons-react";
import ecom from "../../../../../assets/log.png";

const SimilarEcom = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");
  const [cmsdata3, setcmsdata3] = useState("");

  // API Call
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[79]);
    setcmsdata2(response.data[80]);
    setcmsdata3(response.data[81]);
  };

  // Render API
  useEffect(() => {
    getcmsdata();
  }, []);
  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div>
          <h4 className="textprimary font-600 mtpx1 mbpx1 fsize35">
            {cmsdata.title}
            <span className="textwhite mlpx5">{cmsdata2.title}</span>
          </h4>
          <p className="textwhite font-500  text-left sm-text-justify mbpx1 fsize16">
            {cmsdata3.title}
          </p>
        </div>

        <div className="mtpx35">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={4}
          >
            <SwiperSlide>
              <div className="bgwhite rounded-10">
                <div className="relative">
                  <img
                    src={ecom}
                    alt="blog"
                    className="ecom-img bg-light-primary rounded-10 object-contain"
                  />
                  <div className="absolute top-0 right-0 mtpx6 mrpx10">
                    <div className="flex items-center gap-5">
                      <div className="ecom-dot bgwhite rounded-full flex items-center justify-center">
                        <FeatherIcon icon="heart" size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p10">
                  <div className="flex flex-wrap gap-8">
                    <p className="ptpx3 pbpx3 plpx12 prpx12 bg-light-primary textprimary fsize11 rounded-20 w-max">
                      Category
                    </p>
                  </div>
                  <h5 className="texttertiary font-600 mtpx9 mbpx1 fsize16">
                    In publishing and graphic design
                  </h5>
                  <p className="mtpx10 font-600 textgray mtpx7 fsize14">
                    RS. 1200 /-
                  </p>
                  <button className="border-0 cursor-pointer font-500 mtpx15 textwhite rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bgwhite rounded-10">
                <div className="relative">
                  <img
                    src={ecom}
                    alt="blog"
                    className="ecom-img bg-light-primary rounded-10 object-contain"
                  />
                  <div className="absolute top-0 right-0 mtpx6 mrpx10">
                    <div className="flex items-center gap-5">
                      <div className="ecom-dot bgwhite rounded-full flex items-center justify-center">
                        <FeatherIcon icon="heart" size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p10">
                  <div className="flex flex-wrap gap-8">
                    <p className="ptpx3 pbpx3 plpx12 prpx12 bg-light-primary textprimary fsize11 rounded-20 w-max">
                      Category
                    </p>
                  </div>
                  <h5 className="texttertiary font-600 mtpx9 mbpx1 fsize16">
                    In publishing and graphic design
                  </h5>
                  <p className="mtpx10 font-600 textgray mtpx7 fsize14">
                    RS. 1200 /-
                  </p>
                  <button className="border-0 cursor-pointer font-500 mtpx15 textwhite rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bgwhite rounded-10">
                <div className="relative">
                  <img
                    src={ecom}
                    alt="blog"
                    className="ecom-img bg-light-primary rounded-10 object-contain"
                  />
                  <div className="absolute top-0 right-0 mtpx6 mrpx10">
                    <div className="flex items-center gap-5">
                      <div className="ecom-dot bgwhite rounded-full flex items-center justify-center">
                        <FeatherIcon icon="heart" size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p10">
                  <div className="flex flex-wrap gap-8">
                    <p className="ptpx3 pbpx3 plpx12 prpx12 bg-light-primary textprimary fsize11 rounded-20 w-max">
                      Category
                    </p>
                  </div>
                  <h5 className="texttertiary font-600 mtpx9 mbpx1 fsize16">
                    In publishing and graphic design
                  </h5>
                  <p className="mtpx10 font-600 textgray mtpx7 fsize14">
                    RS. 1200 /-
                  </p>
                  <button className="border-0 cursor-pointer font-500 mtpx15 textwhite rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bgwhite rounded-10">
                <div className="relative">
                  <img
                    src={ecom}
                    alt="blog"
                    className="ecom-img bg-light-primary rounded-10 object-contain"
                  />
                  <div className="absolute top-0 right-0 mtpx6 mrpx10">
                    <div className="flex items-center gap-5">
                      <div className="ecom-dot bgwhite rounded-full flex items-center justify-center">
                        <FeatherIcon icon="heart" size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p10">
                  <div className="flex flex-wrap gap-8">
                    <p className="ptpx3 pbpx3 plpx12 prpx12 bg-light-primary textprimary fsize11 rounded-20 w-max">
                      Category
                    </p>
                  </div>
                  <h5 className="texttertiary font-600 mtpx9 mbpx1 fsize16">
                    In publishing and graphic design
                  </h5>
                  <p className="mtpx10 font-600 textgray mtpx7 fsize14">
                    RS. 1200 /-
                  </p>
                  <button className="border-0 cursor-pointer font-500 mtpx15 textwhite rounded-5 w-full ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SimilarEcom;
