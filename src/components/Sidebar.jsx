import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaWindowClose } from "react-icons/fa";
import {
  PiHeartStraightLight,
  PiShoppingCartSimpleLight,
} from "react-icons/pi";
import { removeFav } from "../store/appSlice";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { allNames } = useSelector((store) => store.app);
  const detectClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setOpenSidebar(false);
  };
  useEffect(() => {
    document.addEventListener("click", detectClickOutside, true);
  }, []);

  return (
    <main
      className={`fixed z-10 left-0 top-0 w-full h-full bg-black/50 font-montserrat text-slate-600 flex justify-end ${
        openSidebar.cart || openSidebar.favorites ? "visible" : "invisible"
      }`}
    >
      <aside
        ref={ref}
        className={`bg-white h-full w-80 duration-300 ${
          openSidebar.cart || openSidebar.favorites ? "mr-0" : "-mr-80"
        }`}
      >
        <section className="flex items-center justify-between p-3 bg-fuchsia-50 h-[51.2px] shadow">
          <div className="flex items-center">
            {openSidebar.cart && (
              <>
                <PiShoppingCartSimpleLight className="text-2xl mr-1" />
                <span>Cart</span>
              </>
            )}
            {openSidebar.favorites && (
              <>
                <PiHeartStraightLight className="text-2xl mr-1" />
                <span>Favorites</span>
              </>
            )}
          </div>
          <FaWindowClose
            onClick={() => setOpenSidebar(false)}
            className="text-red-500 text-2xl cursor-pointer"
          />
        </section>
        <section>
          {openSidebar.cart &&
            Array(3)
              .fill(0)
              .map((_, j) => (
                <div
                  key={j}
                  className="group flex items-center justify-between p-3"
                >
                  <span>dummy.com</span>
                  <div className="flex items-center">
                    <span className="group-hover:hidden text-sm">$2010</span>
                    <button className="hidden group-hover:block bg-blue-500 px-2 py-1 text-white text-xs rounded">
                      Buy now
                    </button>
                    <FaWindowClose className="text-xl text-blue-500 cursor-pointer ml-5" />
                  </div>
                </div>
              ))}
          {openSidebar.favorites &&
            allNames
              .filter((i) => i.favItem)
              .map((i, j) => (
                <div
                  key={j}
                  className="group flex items-center justify-between p-3"
                >
                  <span>{i.domain}</span>
                  <div className="flex items-center">
                    <span className="group-hover:hidden text-sm">
                      ${i.price}
                    </span>
                    <button className="hidden group-hover:block bg-blue-500 px-2 py-1 text-white text-xs rounded">
                      Buy now
                    </button>
                    <FaWindowClose
                      onClick={() => dispatch(removeFav(i.id))}
                      className="text-xl text-blue-500 cursor-pointer ml-5"
                    />
                  </div>
                </div>
              ))}
        </section>
      </aside>
    </main>
  );
};

export default Sidebar;
