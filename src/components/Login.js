import React, { useState } from "react";
import Header from "./Header";

export const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const toggalLogin = () => {
    setIsLoginForm(!isLoginForm);
  };
  return (
    <div className="">
      <Header />
      <div className="bg-black">
        <img
          className="opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        <form
          onSubmit={handleSubmit}
          className="bg-black absolute mx-auto top-1/3 right-0 left-0 w-3/12 text-white p-5 pb-20 bg-opacity-90 rounded-md"
        >
          <h1 className="font-bold text-3xl py-4">
            {" "}
            {isLoginForm ? "Sign in" : "Sign up"}
          </h1>
          {!isLoginForm && (
            <input
              className="p-2 my-2 rounded-md w-full bg-gray-800"
              type="text"
              placeholder="Enter name"
            />
          )}
          <input
            className="p-2 my-2 rounded-md w-full bg-gray-800"
            type="email"
            placeholder="Enter email"
          />
          <input
            className="p-2 my-2 rounded-md  w-full bg-slate-800"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="p-2 my-6 rounded-md  w-full bg-red-700"
            type="submit"
          >
            {isLoginForm ? "Sign in" : "Sign up"}
          </button>
          <p onClick={toggalLogin} className="cursor-pointer">
            {" "}
            {isLoginForm
              ? "New to Netflix? Sign up now."
              : "Already have a user? Sign in now."}
          </p>
        </form>
      </div>
    </div>
  );
};
