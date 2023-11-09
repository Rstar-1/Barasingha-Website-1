import React from "react";
import ecom from "../../../assets/log.png";
import FeatherIcon from "feather-icons-react";

const EcomCard = () => {
  return (
    <div className="bg-second ptpx40 pbpx40">
      <div className="container mx-auto">
        <div className="flex gap-12 items-start mtpx20 w-full">
          <div className="w-20 p15 bgwhite rounded-10">
            <div className="">
              <h4 className="fsize18 mtpx9 mbpx1 textprimary font-500">
                Filter by Category
              </h4>
              <div className="grid-cols-1 mtpx20 gap-5 prpx10 plpx10 bordb pbpx20">
                <h5 className="fsize16 mtpx1 mbpx1 textdark font-500">
                  Top Category
                </h5>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
              </div>
              <div className="grid-cols-1 mtpx20 gap-5 prpx10 plpx10 bordb pbpx20">
                <h5 className="fsize16 mtpx1 mbpx1 textdark font-500">
                  Category
                </h5>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
              </div>
              <div className="grid-cols-1 mtpx20 gap-5 prpx10 plpx10 bordb pbpx20">
                <h5 className="fsize16 mtpx1 mbpx1 textdark font-500">
                  Top Category
                </h5>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p className="fsize14 mtpx3 font-500 textgray">News</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-80 rounded-10">
            <div>
              <input
                placeholder="Enter Name"
                className="h-input rounded-5 w-ecom"
              />
            </div>
            <div className="grid-cols-3 mtpx20 gap-12">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcomCard;
