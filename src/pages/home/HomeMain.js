import React from "react";
import Banner from "./papes/Banner";
import About1 from "./papes/About1";
import Service from "./papes/Service";
import About2 from "./papes/About2";
import Gallery from "./papes/Gallery";
import Connect from "./papes/Connect";

const HomeMain = () => {
  return (
    <div>
      <Banner />
      <About1 />
      <About2 />
      <Service />
      <Gallery />
      <Connect />
    </div>
  );
};

export default HomeMain;
