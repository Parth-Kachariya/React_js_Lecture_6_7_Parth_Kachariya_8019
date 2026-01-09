import React from "react";

const Error = () => {
  const refresh = () => {
    window.location.reload()
  };
  return (
    <div className="h-screen flex justify-center items-center bg-red-500">
      <div className="flex flex-col gap-4">
        <h1 className="text-center  font-extrabold  text-white  p-4 text-6xl">
          ERROR: 404 PAGE NOT FOUND
        </h1>
        <button
          className="bg-gray-400 w-30 hover:bg-gray-500 hover:text-white duration-200 mx-auto p-2 rounded-full font-semibold text-lg cursor-pointer"
          onClick={refresh}
        >
          Retry
        </button>
        
      </div>
    </div>
  );
};

export default Error;
