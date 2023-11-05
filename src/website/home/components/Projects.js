import React from 'react';
import project from "../../../assets/log.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="mtpx25">
          <div className="">
            <p className="fsize16 w-max textwhite bgprimary ptpx12 pbpx12 plpx45 prpx45 border-project">
              Projects
            </p>
            <hr className="bgprimary textprimary p2 border-0 margin-hr"></hr>
          </div>
          <div className="mtpx20">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              loop
              className="mySwiper"
              spaceBetween={10}
              slidesPerView={3}
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
            </Swiper>
          </div>
        </div>
        <div className="mtpx40">
          <div className="">
            <p className="fsize16 w-max textwhite bgprimary ptpx12 pbpx12 plpx45 prpx45 border-project">
              Learning
            </p>
            <hr className="bgprimary textprimary p2 border-0 margin-hr"></hr>
          </div>
          <div className="mtpx20">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              loop
              className="mySwiper"
              spaceBetween={10}
              slidesPerView={3}
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
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects
