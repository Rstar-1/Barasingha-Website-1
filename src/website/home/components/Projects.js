import React, { useState, useEffect } from "react";
import axios from "axios";
import project from "../../../assets/log.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/swiper.min.css";

const Projects = () => {
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");

  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextdata",
    });
    setcmsdata(response.data[22]);
    setcmsdata2(response.data[23]);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="bg-second ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="mtpx25 sm-mtpx5">
          <div className="">
            <p className="fsize16 w-max textwhite bgprimary ptpx12 pbpx12 plpx45 prpx45  sm-ptpx9 sm-pbpx9 sm-plpx30 sm-prpx30 sm-fsize13 border-project">
              {cmsdata.title}
            </p>
            <hr className="bgprimary textprimary p2 border-0 margin-hr"></hr>
          </div>
          <div className="mtpx20">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              loop
              modules={[EffectCoverflow]}
              className="mySwiper"
              breakpoints={{
                1536: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                991: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 1.1,
                  spaceBetween: 30,
                },
                425: {
                  slidesPerView: 1.1,
                  spaceBetween: 30,
                },
                325: {
                  slidesPerView: 1.1,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="p10 bg-light-primary rounded-10">
                  <img
                    src={project}
                    alt="project"
                    className="project-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p10 bg-light-primary rounded-10">
                  <img
                    src={project}
                    alt="project"
                    className="project-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p10 bg-light-primary rounded-10">
                  <img
                    src={project}
                    alt="project"
                    className="project-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p10 bg-light-primary rounded-10">
                  <img
                    src={project}
                    alt="project"
                    className="project-img object-contain"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="mtpx40 sm-mtpx25">
          <div className="">
            <p className="fsize16 w-max textwhite bgprimary ptpx12 pbpx12 sm-ptpx9 sm-pbpx9 sm-plpx30 sm-prpx30 plpx45 prpx45 sm-fsize13 border-project">
              {cmsdata2.title}
            </p>
            <hr className="bgprimary textprimary p2 border-0 margin-hr"></hr>
          </div>
          <div className="mtpx20">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className="mySwiper"
              breakpoints={{
                1536: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                991: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 1.1,
                  spaceBetween: 30,
                },
                425: {
                  slidesPerView: 1.1,
                  spaceBetween: 30,
                },
                325: {
                  slidesPerView: 1.1,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="p10 bg-light-primary rounded-10">
                  <img
                    src={project}
                    alt="project"
                    className="project-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p10 bg-light-primary rounded-10">
                  <img
                    src={project}
                    alt="project"
                    className="project-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p10 bg-light-primary rounded-10">
                  <img
                    src={project}
                    alt="project"
                    className="project-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p10 bg-light-primary rounded-10">
                  <img
                    src={project}
                    alt="project"
                    className="project-img object-contain"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
