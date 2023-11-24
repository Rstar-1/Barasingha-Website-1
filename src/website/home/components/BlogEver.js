import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const BlogEver = () => {
  const [getuserdata, setUserdata] = useState([]);

  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getdata",
    });
    setUserdata(response.data);
  };
  useEffect(() => {
    getdata();
  }, []);
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
            grabCursor={true}
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={3}
          >
            {getuserdata.map((element, id) => (
              <SwiperSlide>
                <NavLink to={`/blogoverview/${element._id}`}>
                  <div className="rounded-10 bgwhite d-shadow p10">
                    <img
                      src={element.img}
                      alt="logo"
                      className="blog-img bg-light-primary rounded-10 object-cover"
                    />
                    <div className="p5">
                      <small className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize13 rounded-20 w-max">
                        {element.category}
                      </small>

                      <h3 className="mtpx5 fsize17 mbpx1 textforth">
                        {element.title}
                      </h3>
                      <p className="mtpx2 textgray fsize13 line-clamp3">
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
