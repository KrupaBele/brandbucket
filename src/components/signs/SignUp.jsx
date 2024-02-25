import { useState } from "react";
import Otp from "./Otp";

const SignUp = ({ setSign }) => {
  const [openOtp, setOpenOtp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenOtp(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="shadow bg-white rounded-lg p-5 space-y-5"
      >
        <div className="flex flex-col w-80">
          <input
            type="text"
            id="name"
            spellCheck="false"
            placeholder="Name"
            className="border border-slate-300 rounded-md outline-none px-2 pt-1 pb-[5px] placeholder:text-slate-400 placeholder:font-light"
          />
        </div>
        <div className="flex flex-col w-80">
          <input
            type="email"
            id="email"
            spellCheck="false"
            placeholder="Email address"
            className="border border-slate-300 rounded-md outline-none px-2 pt-1 pb-[5px] placeholder:text-slate-400 placeholder:font-light"
          />
        </div>
        <div className="flex flex-col w-80">
          <input
            id="password"
            type="password"
            spellCheck="false"
            placeholder="Password"
            className="border border-slate-300 rounded-md outline-none px-2 pt-1 pb-[5px] placeholder:text-slate-400 placeholder:font-light"
          />
        </div>
        <div className="flex flex-col w-80">
          <input
            id="confirmPassword"
            type="password"
            spellCheck="false"
            placeholder="Confirm password"
            className="border border-slate-300 rounded-md outline-none px-2 pt-1 pb-[5px] placeholder:text-slate-400 placeholder:font-light"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-emerald-400 hover:bg-emerald-500 duration-300 text-white rounded-md w-full pt-[5px] pb-1.5"
          >
            Sign up
          </button>
        </div>
        <p className="text-sm">
          Already have an accout?{" "}
          <span
            onClick={() => setSign({ signIn: true, signUp: false })}
            className="text-blue-600 cursor-pointer"
          >
            Sign-in
          </span>
        </p>
      </form>
      <Otp openOtp={openOtp} setOpenOtp={setOpenOtp} />
    </>
  );
};

export default SignUp;
