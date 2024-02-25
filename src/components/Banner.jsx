import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Banner = ({ names, category }) => {
  const location = useLocation();

  let formatNames, formatCategory;
  if (names) {
    formatNames = names.split("-").join(" ");
    formatCategory = category.split("-").join(" ");
    formatNames =
      formatNames[0].toUpperCase() + formatNames.substring(1).toLowerCase();
    formatCategory =
      formatCategory[0].toUpperCase() +
      formatCategory.substring(1).toLowerCase();
  }

  return (
    <header className="h-[calc(30vh)] bg-[url(/bg-banner.jpg)] bg-cover bg-center font-montserrat text-white">
      <section className="h-full text- bg-gradient-to-r from-fuchsia-500/25 to-purple-500/25 flex items-center justify-center">
        {!location.pathname.includes("all-names") ||
        location.pathname.length < 11 ? (
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl mb-5 font-light mx-5 md:mx-0 leading-tight">
              Your source for the best business names
            </h1>
            {!location.pathname.includes("all-names") ? (
              <Link
                to="/all-names"
                className="font-light px-5 pt-1.5 pb-[7px] rounded-md bg-white/25 hover:bg-fuchsia-500 duration-300"
              >
                Find name
              </Link>
            ) : (
              <Link
                to="/"
                className="font-light px-5 pt-1.5 pb-[7px] rounded-md bg-white/25 hover:bg-fuchsia-500 duration-300"
              >
                Back home
              </Link>
            )}
          </div>
        ) : (
          <div className="flex items-center text-center">
            <Link
              to="/all-names"
              className="font-light px-5 pt-1.5 pb-[7px] rounded-md bg-white/25 hover:bg-fuchsia-500 duration-300"
            >
              All names
            </Link>
            <div className="flex items-center">
              <MdOutlineKeyboardArrowRight className="text-xl" />
              <button className="font-light px-5 pt-1.5 pb-[7px] rounded-md bg-white/25 cursor-default">
                {formatCategory}
              </button>
            </div>
            <div className="flex items-center">
              <MdOutlineKeyboardArrowRight className="text-xl" />
              <button className="font-light px-5 pt-1.5 pb-[7px] rounded-md bg-white/25 hover:bg-fuchsia-500 duration-300">
                {formatNames}
              </button>
            </div>
          </div>
        )}
      </section>
    </header>
  );
};

export default Banner;
