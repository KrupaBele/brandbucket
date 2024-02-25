import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  PiShoppingCartSimpleLight,
  PiHeartStraightLight,
} from "react-icons/pi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

import Sidebar from "./Sidebar";
import { navConfig } from "../configs/nav.cofig";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [byStyle, setByStyle] = useState(false);
  const [byIndustry, setByIndustry] = useState(false);
  const { allNames } = useSelector((store) => store.app);
  const [openSidebar, setOpenSidebar] = useState({
    cart: false,
    favorites: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav className="text-slate-600 font-montserrat shadow sticky top-0 bg-white z-10">
        <section className="relative flex items-center justify-between px-5 md:px-20 h-[51.2px]">
          <AiOutlineMenuUnfold className="block md:hidden text-2xl cursor-pointer" />
          <h1
            onClick={() => navigate("/")}
            className="absolute md:static left-0 right-0 mx-auto md:mx-0 w-fit font-cookie text-3xl cursor-pointer"
          >
            <span className="text-fuchsia-500">B</span>rand
            <span className="text-fuchsia-500">B</span>ucket
          </h1>
          <section className="hidden md:flex items-center absolute left-0 right-0 mx-auto w-fit">
            <Link
              to="/all-names"
              className="px-5 py-3 hover:bg-fuchsia-50 hover:text-fuchsia-500 border-y-2 border-y-white hover:border-b-fuchsia-50 hover:border-t-fuchsia-500 cursor-pointer duration-300"
            >
              All names
            </Link>
            <div
              onMouseEnter={() => setByStyle(true)}
              onMouseLeave={() => setByStyle(false)}
              className={`px-5 py-3 border-y-2 border-y-white cursor-pointer duration-300 flex items-center ${
                byStyle
                  ? "bg-fuchsia-50 text-fuchsia-500 border-b-fuchsia-50 border-t-fuchsia-500"
                  : ""
              }`}
            >
              <span>By style</span>
              <MdKeyboardArrowDown
                className={`text-fuchsia-500 duration-300 ${
                  byStyle ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <div
              onMouseEnter={() => setByIndustry(true)}
              onMouseLeave={() => setByIndustry(false)}
              className={`px-5 py-3 border-y-2 border-y-white cursor-pointer duration-300 flex items-center ${
                byIndustry
                  ? "bg-fuchsia-50 text-fuchsia-500 border-b-fuchsia-50 border-t-fuchsia-500"
                  : ""
              }`}
            >
              <span>By industry</span>
              <MdKeyboardArrowDown
                className={`text-fuchsia-500 duration-300 ${
                  byIndustry ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </section>
          <section className="flex items-center space-x-3 md:space-x-5 text-2xl">
            <div
              onClick={() => setOpenSidebar({ cart: true, favorites: false })}
              className="relative cursor-pointer"
            >
              <PiShoppingCartSimpleLight />
              <div className="absolute -top-1.5 -right-1.5 bg-fuchsia-500 text-white w-4 h-4 rounded-full text-xs grid place-items-center font-mono">
                3
              </div>
            </div>
            <div
              onClick={() => setOpenSidebar({ cart: false, favorites: true })}
              className="relative cursor-pointer"
            >
              <PiHeartStraightLight />
              <div className="absolute -top-1.5 -right-1.5 bg-fuchsia-500 text-white w-4 h-4 rounded-full text-xs grid place-items-center font-mono">
                {allNames.filter((i) => i.favItem).length}
              </div>
            </div>
          </section>
        </section>

        <section
          onMouseEnter={() => setByStyle(true)}
          onMouseLeave={() => setByStyle(false)}
          className={`absolute py-10 bg-fuchsia-50 flex justify-center w-full overflow-hidden shadow ${
            byStyle ? "block" : "hidden"
          }`}
        >
          <section>
            <p className="mb-5">Browse business names by style</p>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-y-5 w-fit text-sm text-slate-500">
              {navConfig.byStyle.map((i, j) => (
                <div className="w-72" key={j}>
                  <Link
                    onClick={() => setByStyle(false)}
                    to={`/all-names/by-style/${i
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                    className="hover:text-fuchsia-500 cursor-pointer"
                  >
                    {i}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </section>
        <section
          onMouseEnter={() => setByIndustry(true)}
          onMouseLeave={() => setByIndustry(false)}
          className={`absolute py-10 bg-fuchsia-50 flex justify-center w-full overflow-hidden shadow ${
            byIndustry ? "block" : "hidden"
          }`}
        >
          <section>
            <p className="mb-5">Browse business names by industry</p>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-y-5 w-fit text-sm text-slate-500">
              {navConfig.byIndustry.map((i, j) => (
                <div className="w-72" key={j}>
                  <Link
                    onClick={() => setByIndustry(false)}
                    to={`/all-names/by-industry/${i
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                    className="hover:text-fuchsia-500 cursor-pointer"
                  >
                    {i}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </section>
      </nav>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};

export default Navbar;
