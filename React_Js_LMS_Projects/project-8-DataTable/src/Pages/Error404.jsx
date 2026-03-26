import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="text-ceneter flex flex-col space-y-10 my-10">
        <h1 className="text-red-600 text-6xl font-black">Error404</h1>
        <button className=" flex items-center justify-center w-fit mx-auto px-8 py-3 rounded-3xl bg-blue-500 hover:bg-blue-600">
          <NavLink className="" to="/">
            Back To Home
          </NavLink>
        </button>
      </div>
    </>
  );
};

export default Error404;
