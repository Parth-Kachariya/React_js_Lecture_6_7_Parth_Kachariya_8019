import React from "react";

const Error = () => {
  const refresh=()=>{
    window.location.reload()
  }
  return (
    <div className="h-screen flex justify-center items-center bg-red-600">
      <div className="flex flex-col gap-4">
        <h1 className="text-center  font-extrabold  p-4 text-6xl">
          ERROR: 404 PAGE NOT FOUND
        </h1>
        <button onClick={refresh} className="bg-gray-400 w-25 mx-auto p-2 rounded-xl font-semibold text-xl cursor-pointer">retry</button>
        
      </div>
    </div>
  );
};

export default Error;
