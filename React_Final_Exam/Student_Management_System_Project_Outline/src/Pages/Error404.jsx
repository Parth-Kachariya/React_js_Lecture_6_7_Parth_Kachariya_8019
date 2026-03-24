import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="text-ceneter flex flex-col space-y-10 my-10">
        <h1 className="text-red-600 text-center text-6xl font-black">Error404</h1>
        <button className=" text-white flex items-center justify-center w-fit mx-auto px-8 py-3 rounded-3xl bg-blue-500 hover:bg-blue-600">
          <Link className="" to="/">
            Back To Home
          </Link>
        </button>
      </div>
    </>
  );
};

export default Error404;
