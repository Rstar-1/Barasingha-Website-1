import React from "react";
import brand from "../../../assets/new2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";

const Brands = () => {
  return (
    <div className="ptpx20 pbpx20 bg-second">
      <div className="container mx-auto">
        <Swiper
          grabCursor={true}
          loop
          className="mySwiper"
          breakpoints={{
            1536: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            425: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 2.1,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="">
              <img
                src={brand}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={brand}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={brand}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={brand}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={brand}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={brand}
                alt="brand"
                className="brand-img object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
