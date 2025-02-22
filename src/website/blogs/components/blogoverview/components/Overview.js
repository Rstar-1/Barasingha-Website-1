import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blog from "../../../../../assets/log.png";

const Overview = () => {
  const [Title, StepTitle] = useState("");
  const [Desc, StepDesc] = useState("");
  const [Category, StepCategory] = useState("");
  const [createdAt, StepcreatedAt] = useState("");
  const [Image, SetImage] = useState("");
  const [cmsdata, setcmsdata] = useState("");

  const { id } = useParams("");
  console.log(id);

  const getsingleblogdata = async () => {
    const editresponse = await axios({
      method: "get",
      url: `http://localhost:8000/api/getsingleblogdata/${id}`,
    });
    StepTitle(editresponse.data.title);
    StepCategory(editresponse.data.category);
    StepDesc(editresponse.data.desc);
    SetImage(editresponse.data.picture);
    StepcreatedAt(editresponse.data.createdAt);
  };
   const getcmsdata = async () => {
     const response = await axios({
       method: "get",
       url: "http://localhost:8000/api/gettextalldata",
     });
     setcmsdata(response.data[56]);
   };
  
  useEffect(() => {
    getsingleblogdata();
    getcmsdata()
  }, []);

  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="flex items-start gap-12 w-full">
          <div className="w-70">
            <div className="">
              <h5 className="textwhite font-600 mtpx1 mbpx1 fsize25">
                {Title}
              </h5>
              <p className="textwhite font-500 mtpx5 text-justify mbpx1 fsize14">
                {new Date(createdAt).toDateString()}
              </p>
              <img
                src={Image}
                alt="blog"
                className="blogoverview-img bg-light-primary object-contain mtpx16 rounded-10"
              />
              <div className="mtpx6">
                <div className="flex flex-wrap mtpx10 gap-8">
                  <p className="ptpx3 pbpx3 plpx20 prpx20 bg-light-primary textprimary fsize15 rounded-20 w-max">
                    {Category}
                  </p>
                </div>
                <p className="textwhite font-500 mtpx15 text-justify mbpx1 fsize14">
                  {Desc}
                </p>
              </div>
            </div>
          </div>
          <div className="w-30">
            <div className="">
              <div className="bgwhite shadow ptpx5 pbpx5 plpx15 prpx15 rounded-5">
                <h6 className="textprimary fsize17 mtpx1 mbpx1 font-semibold">
                  {cmsdata.title}
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
};

export default Overview;
