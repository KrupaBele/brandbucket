import { PiHeartStraightLight } from "react-icons/pi";

const Loading = () => {
  return (
    <section className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-5 sm:px-0 sm:w-fit mx-auto gap-10">
      {Array(5)
        .fill(0)
        .map((i, j) => (
          <div
            key={j}
            className="group relative w-full sm:w-52 h-40 shadow rounded-lg overflow-hidden"
          >
            <div className="h-[80%] bg-[length:150px_80px] bg-center bg-no-repeat group-hover:scale-110 duration-300 bg-slate-200 animate-pulse"></div>
            <div className="h-[20%] bg-slate-200 flex justify-between items-center text-sm px-2"></div>
            <PiHeartStraightLight className="absolute right-2 top-2 cursor-pointer text-slate-400" />
          </div>
        ))}
    </section>
  );
};

export default Loading;
