import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { PiHeartStraightLight, PiHeartStraightFill } from "react-icons/pi";

import Banner from "../components/Banner";
import Loading from "../components/Loading";
import { viewName, addFav, removeFav } from "../store/appSlice";

const Names = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, names } = useParams();
  const { isLoading, allNames } = useSelector((store) => store.app);

  let filter;
  if (names) {
    filter = allNames.filter((i) => i.names.includes(names));
  }

  console.log(allNames);
  return (
    <>
      <Banner category={category} names={names} />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="font-montserrat my-20 text-slate-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-5 sm:px-0 sm:w-fit mx-auto gap-10">
          {(names ? filter : allNames).map((i, j) => (
            <div
              key={j}
              className="group relative w-full sm:w-52 h-40 shadow rounded-lg overflow-hidden"
            >
              <div
                onClick={() => {
                  dispatch(viewName(i));
                  category
                    ? navigate(
                        `/all-names/${category}/${names}/${
                          i.domain.split(".")[0]
                        }`
                      )
                    : navigate(`/all-names/${i.domain.split(".")[0]}`);
                }}
                style={{ backgroundImage: `url(${i.img})` }}
                className="h-[80%] bg-[length:150px_80px] bg-center bg-no-repeat group-hover:scale-110 duration-300"
              ></div>
              <div className="h-[20%] bg-fuchsia-50 flex justify-between items-center text-sm px-2">
                <span>{i.domain}</span>
                <span>${i.price}</span>
              </div>
              {i.favItem ? (
                <PiHeartStraightFill
                  onClick={() => dispatch(removeFav(i.id))}
                  className="absolute right-2 top-2 cursor-pointer text-red-400"
                />
              ) : (
                <PiHeartStraightLight
                  onClick={() => dispatch(addFav(i.id))}
                  className="absolute right-2 top-2 cursor-pointer"
                />
              )}
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Names;
