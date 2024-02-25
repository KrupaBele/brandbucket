import { useEffect, useRef, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

const Otp = ({ openOtp, setOpenOtp }) => {
  const inputRef = useRef(null);
  const [initOtp, setInitOtp] = useState(0);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index) => (e) => {
    const lastChar = e.target.value.at(-1) || "";
    setOtp([...otp.map((i, j) => (j === index ? lastChar : i))]);
    lastChar ? setInitOtp(index + 1) : setInitOtp(index - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [initOtp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp.join(""));
    setOpenOtp(false);
  };

  return (
    <main
      className={`h-full w-full fixed top-0 z-10 bg-black/50 grid place-items-center ${
        openOtp ? "visible" : "invisible"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`relative p-7 rounded-md bg-white font-montserrat flex flex-col items-center text-slate-500 text-center duration-100 ${
          openOtp ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <div>
          <h1 className="text-fuchsia-500">Email verification!</h1>
          <p className="text-sm">
            We have sent OTP on your registered email address!
          </p>
        </div>
        <div className="space-x-[15px] mt-5">
          {otp.map((i, j) => (
            <input
              key={j}
              value={i}
              ref={j === initOtp ? inputRef : null}
              onChange={handleChange(j)}
              type="number"
              className="w-[calc(15px+10px+15px)] px-[14px] py-1.5 bg-fuchsia-50 border border-b-4 border-fuchsia-200 outline-none rounded-md"
            />
          ))}
        </div>
        <button className="flex items-center bg-emerald-400 hover:bg-emerald-500 text-white px-5 py-1 rounded-md mt-7">
          <BsCheck2Circle className="text-xl mr-1" />
          <span>Verify</span>
        </button>
        <FaWindowClose
          onClick={() => setOpenOtp(false)}
          className="absolute top-2 right-[11px] text-red-500 cursor-pointer text-2xl"
        />
      </form>
    </main>
  );
};

export default Otp;
