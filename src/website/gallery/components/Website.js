import React from "react";
import website from "../../../assets/reg.png";

const Website = () => {
  return (
    <div className="bg-second ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="grid-cols-3 sm-grid-cols-1 w-full gap-12">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={website}
                  alt="website"
                  className="flip-card object-contain"
                />
              </div>
              <div class="flip-card-back">
                <p className="fsize20 text-center textwhite">Barasingha</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={website}
                  alt="website"
                  className="flip-card object-contain"
                />
              </div>
              <div class="flip-card-back">
                <p className="fsize20 text-center textwhite">Barasingha</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={website}
                  alt="website"
                  className="flip-card object-contain"
                />
              </div>
              <div class="flip-card-back">
                <p className="fsize20 text-center textwhite">Barasingha</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Website;
