import React, { useState } from "react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div id="gallery">
      <div className="bgwhite ptpx40 pbpx40 ">
        <div className="container mx-auto">
          <div className="flex justify-center mtpx10 mbpx10">
            <h5 className="fsize29 fsize26 mtpx1 mbpx11 uppercase font-900 textprimary">
              Galle<span className="textsecondary ">ry</span>
            </h5>
          </div>
          <div className="flex gap-3 items-center">
            <p
              className={
                activeTab === 1
                  ? "fsize14 pbpx2 textprimary cursor-pointer border-pr width-gall"
                  : "fsize14 pbpx2 textsecondary cursor-pointer width-gall"
              }
              onClick={() => handleTabClick(1)}
            >
              Cloud
            </p>
            <p
              className={
                activeTab === 2
                  ? "fsize14 pbpx2 textprimary cursor-pointer border-pr width-gall"
                  : "fsize14 pbpx2 textsecondary cursor-pointer width-gall"
              }
              onClick={() => handleTabClick(2)}
            >
              Security
            </p>
          </div>
          {activeTab === 1 && (
            <div className="grid-cols-3 sm-grid-cols-1 gap-12 mtpx9 w-full">
              <div className="">
                <img
                  src="https://imgur.com/uA4LsS2.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
              <div className="">
                <img
                  src="https://imgur.com/sLXtVsS.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
              <div className="">
                <img
                  src="https://imgur.com/5y07y68.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
              <div className="">
                <img
                  src="https://imgur.com/ZphO2t8.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
              <div className="">
                <img
                  src="https://imgur.com/zPVOuIj.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
              <div className="">
                <img
                  src="https://imgur.com/WVilZ9i.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="grid-cols-3 sm-grid-cols-1 gap-12 mtpx9 w-full">
              <div className="">
                <img
                  src="https://imgur.com/zPVOuIj.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
              <div className="">
                <img
                  src="https://imgur.com/WVilZ9i.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
              <div className="">
                <img
                  src="https://imgur.com/ZphO2t8.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
              <div className="">
                <img
                  src="https://imgur.com/sLXtVsS.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
              <div className="">
                <img
                  src="https://imgur.com/5y07y68.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
              <div className="">
                <img
                  src="https://imgur.com/uA4LsS2.jpg"
                  alt="service1"
                  className="gallery-img rounded-5"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
