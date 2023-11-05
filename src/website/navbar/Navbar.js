import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  const NavMenu = [
    {
      icon: "home",
      name: "Home",
      route: "home",
    },
    {
      icon: "user",
      name: "About Us",
      route: "about",
    },
    {
      icon: "settings",
      name: "Plans",
      route: "plans",
    },
    {
      icon: "grid",
      name: "Blogs",
      route: "blogs",
    },
    {
      icon: "phone-call",
      name: "Elearning",
      route: "elearning",
    },
    {
      icon: "phone-call",
      name: "Connect Us",
      route: "connect",
    },
  ];

  return (
    <div className="w-full ptpx4 pbpx4 bgforth sm-ptpx1 sm-pbpx1">
      {sidebarshow ? (
        <div className="bg-glass fixed hidden h-100 sm-block w-full z-99">
          <div className="bgwhite w-90 h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx10 prpx10">
                <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Navbar
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setsidebarshow(false)}
                />
              </div>
            </div>
            <div className="mtpx30">
              {NavMenu.map((e) => (
                <>
                  <div className="flex items-center gap-8 plpx20 prpx20 mbpx20">
                    <FeatherIcon
                      icon={e.icon}
                      className="textprimary"
                      size={17}
                    />
                    <NavLink to={e.route}>
                      <p
                        className="fsize14 textforth mtpx4 mbpx4 cursor-pointer font-500"
                        onClick={() => setsidebarshow(false)}
                      >
                        {e.name}
                      </p>
                    </NavLink>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-between items-center container mx-auto">
        <div className="logo-w">
          <h1 className="fsize21 sm-mtpx1 sm-mbpx1 font-900 textprimary">
            RS<span className="textsecondary mlpx2">Deve</span>
          </h1>
        </div>
        <div className="flex justify-center gap-5 items-center sm-hidden prpx60 sm-prpx1 menu-w">
          {NavMenu.map((e) => (
            <>
              <NavLink
                activeClass="active"
                className="fsize14 activetext mlpx28 cursor-pointer"
                to={e.route}
              >
                {e.name}
              </NavLink>
            </>
          ))}
        </div>
        <div className="hidden sm-block">
          <div className="bg-ec sidebar-icon justify-center items-center flex">
            <FeatherIcon
              icon="align-justify"
              className="textgray"
              onClick={() => setsidebarshow(true)}
            />
          </div>
        </div>

        <div className="btn-w flex gap-8 items-center sm-hidden justify-end">
          <button className="border-0 cursor-pointer font-500 textwhite rounded-20 ptpx8 pbpx8 plpx35 prpx35 fsize14 bgprimary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
