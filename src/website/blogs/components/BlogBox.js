import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const BlogBox = () => {
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
    <div className="bg-second ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex flex-wrap overflow-auto gap-12">
          <p className="ptpx5 pbpx5 plpx30 prpx30 sm-plpx20 sm-prpx20 bg-light-primary textprimary fsize16 sm-fsize13 rounded-10 w-max">
            Website
          </p>
          <p className="ptpx5 pbpx5 plpx30 prpx30 sm-plpx20 sm-prpx20 bg-light-primary textprimary fsize16 sm-fsize13 rounded-10 w-max">
            Cloud
          </p>
          <p className="ptpx5 pbpx5 plpx30 prpx30 sm-plpx20 sm-prpx20 bg-light-primary textprimary fsize16 sm-fsize13 rounded-10 w-max">
            Secuty
          </p>
          <p className="ptpx5 pbpx5 plpx30 prpx30 sm-plpx20 sm-prpx20 bg-light-primary textprimary fsize16 sm-fsize13 rounded-10 w-max">
            Mobile
          </p>
        </div>
        <div className="grid-cols-3 sm-grid-cols-1 gap-9 mtpx30">
          {getuserdata.map((element, id) => (
            <NavLink to={`/blogoverview/${element._id}`}>
              <div className="rounded-10 bgwhite d-shadow p10 sm-p5">
                <img
                  src={element.img}
                  alt="logo"
                  className="blog-img bg-light-primary rounded-10 object-cover"
                />
                <div className="p5">
                  <small className="ptpx3 pbpx3 plpx20 sm-plpx15 sm-prpx15 prpx20 bg-light-primary textprimary fsize13 sm-fsize12 rounded-20 w-max">
                    {element.category}
                  </small>

                  <h3 className="mtpx5 fsize17 sm-fsize15 mbpx1 textforth">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
