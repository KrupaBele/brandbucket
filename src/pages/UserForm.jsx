import { useState } from "react";
import SignIn from "../components/signs/SignIn";
import SignUp from "../components/signs/SignUp";

const UserForm = () => {
  const [sign, setSign] = useState({ signIn: true, signUp: false });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="h-[calc(100vh-51.2px)] bg-fuchsia-50 grid place-items-center font-montserrat text-slate-600">
      {sign.signIn ? (
        <SignIn setSign={setSign} />
      ) : (
        <SignUp setSign={setSign} />
      )}
    </main>
  );
};

export default UserForm;
