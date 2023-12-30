import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";

const BlogEver = () => {
  // CMS UseState Data
  const [cmsdata, setcmsdata] = useState("");
  const [cmsdata2, setcmsdata2] = useState("");
  const [cmsdata3, setcmsdata3] = useState("");
  // Blog UseState Data
  const [blogdata, setblogdata] = useState([]);

  // API Call
  const getblogdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getdata",
    });
    setblogdata(response.data);
  };
  const getcmsdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/gettextalldata",
    });
    setcmsdata(response.data[32]);
    setcmsdata2(response.data[33]);
    setcmsdata3(response.data[34]);
  };

  // Render API
  useEffect(() => {
    getblogdata();
    getcmsdata();
  }, []);

  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="flex sm-block justify-between items-center w-full">
          <div>
            <h4 className="textprimary font-600 mtpx1 mbpx1 sm-fsize21 fsize35">
              {cmsdata.title}
              <span className="textwhite mlpx5">{cmsdata2.title}</span>
            </h4>
            <p className="textwhite font-500 sm-fsize13 sm-mtpx6 text-left sm-text-justify mbpx1 fsize16">
              {cmsdata3.title}
            </p>
          </div>

          <button className="border-0 cursor-pointer font-500 sm-mtpx10 sm-fsize13 sm-ptpx9 sm-pbpx9 sm-prpx25 sm-plpx25 textwhite rounded-5 ptpx12 pbpx12 plpx35 prpx35 fsize16 bgprimary">
            Blog Next
          </button>
        </div>
        <div className="mtpx35">
          <Swiper
            grabCursor={true}
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
            {blogdata.map((element, id) => (
              <SwiperSlide>
                <NavLink to={`/blogoverview/${element._id}`}>
                  <div className="rounded-10 bgwhite d-shadow p10 sm-p5">
                    <img
                      src={element.img}
                      alt="logo"
                      className="blog-img bg-light-primary rounded-10 object-cover"
                    />
                    <div className="p5">
                      <small className="ptpx3 pbpx3 sm-prpx15 sm-plpx15 plpx20 prpx20 sm-fsize12 bg-light-primary textprimary fsize13 rounded-20 w-max">
                        {element.category}
                      </small>

                      <h3 className="mtpx5 fsize17 sm-fsize15 mbpx1 textforth">
                        {element.title}
                      </h3>
                      <p className="mtpx2 textgray fsize13 sm-fsize12 line-clamp3">
                        {element.desc}
                      </p>
                      <div className="mtpx8 flex justify-end w-full">
                        <p className=" textgray fsize11">
                          {new Date(element.createdAt).toDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogEver;
