import React from "react";
import brand from "../../../assets/new2.png";

const Brands = () => {
  return (
    <div className="ptpx20 pbpx20 bgforth">
      <div className="bg-second w-full">
        <div className="container mx-auto">
          <div className="gap-12 grid-cols-5 p25">
            <img src={brand} alt="brand" className="brand-img object-contain" />

            <img src={brand} alt="brand" className="brand-img object-contain" />

            <img src={brand} alt="brand" className="brand-img object-contain" />

            <img src={brand} alt="brand" className="brand-img object-contain" />

            <img src={brand} alt="brand" className="brand-img object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
