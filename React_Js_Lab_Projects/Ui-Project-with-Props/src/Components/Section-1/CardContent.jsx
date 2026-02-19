import React from "react";

const CardContent = (props) => {
  return (
    <div className="bg-amer-800 flex flex-col justify-between absolute top-0 left-0 h-full w-full p-6">
      <h2 className="bg-white h-12 w-12 flex justify-center items-center rounded-full font-bold text-xl">
        {props.id + 1}
      </h2>
      <div className="flex flex-col gap-10">
        <p className="text-white text-lg bg-gray-500/40 rounded-xl p-2 leading-7 tracking-[1px]">
          {props.intro}
        </p>
        <div className="flex justify-between ">
          <button className=" text-lg tracking-[1px] cursor-pointer py-2 px-6 bg-green-400 text-white font-semibold rounded-full">
            {props.tag}
          </button>
          <button className=" text-lg tracking-[1px] cursor-pointer py-1 px-3 bg-green-400 text-white font-semibold rounded-full ">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
