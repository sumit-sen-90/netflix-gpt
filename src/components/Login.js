import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import { login, registerUser } from "../utils/functions/Users";
import { useDispatch } from "react-redux";
import { PiCopyrightFill } from "react-icons/pi";
import { NETFLIC_BG } from "../utils/constants";

export const Login = () => {
  const dispatch = useDispatch();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [showSpinner, setShoSpinner] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();

    const msg = checkValidation(email.current.value, password.current.value);
    setErrMessage(msg);
    if (msg) return;
    setIsSubmit(true);
    setShoSpinner(true);
    if (!isLoginForm) {
      //Sign up
      registerUser(
        email.current.value,
        password.current.value,
        name.current.value,
        setErrMessage,
        dispatch,

        setShoSpinner,
        setIsSubmit
      );
    } else if (isLoginForm) {
      //Sign in
      login(
        email.current.value,
        password.current.value,
        setErrMessage,
        dispatch,

        setShoSpinner,
        setIsSubmit
      );
    }
  }
  const toggalLogin = () => {
    setIsLoginForm(!isLoginForm);
    setErrMessage(null);
    setShoSpinner(false);
  };
  return (
    <div className="">
      <Header />
      <div className="bg-black">
        <img className="opacity-50" src={NETFLIC_BG} alt="background" />
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-black absolute mx-auto top-1/4 right-0 left-0 w-3/12 text-white p-6 pb-20 bg-opacity-80 rounded-md"
        >
          <h1 className="font-bold text-3xl py-4">
            {" "}
            {isLoginForm ? "Sign in" : "Sign up"}
          </h1>
          {!isLoginForm && (
            <input
              ref={name}
              className="p-2 my-2 rounded-md w-full bg-gray-800"
              type="text"
              placeholder="Full name"
            />
          )}
          <input
            ref={email}
            className="p-2 my-2 rounded-md w-full bg-gray-800"
            type="email"
            required
            placeholder="Enter email"
          />
          <input
            ref={password}
            className="p-2 my-2 rounded-md  w-full bg-slate-800"
            type="password"
            required
            placeholder="Enter password"
          />
          <p className="text-red-500 font-semibold">{errMessage}</p>
          <button
            className="p-2 my-6 rounded-md  w-full bg-red-700"
            type="submit"
            disabled={isSubmit}
          >
            {showSpinner ? (
              <div className="ml-36 w-8 h-8 rounded-full border border-t-red-800 animate-spin"></div>
            ) : isLoginForm ? (
              "Sign in"
            ) : (
              "Sign up"
            )}
          </button>
          <p onClick={toggalLogin} className="cursor-pointer">
            {" "}
            {isLoginForm
              ? "New to Netflix? Sign up now."
              : "Already have a user? Sign in now."}
          </p>
        </form>
        <div className="bg-black h-52 w-full absolute left-0 right-0 top-[40.42rem] bg-opacity-60 flex justify-center">
          <div className="text-slate-400 flex justify-center mb-11 items-center  gap-1">
            <span>Copyright</span>
            <PiCopyrightFill className="text-lg" />{" "}
            <span>@sumitsen@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
