import React from "react";
import "remixicon/fonts/remixicon.css";
import Arrow from "./Arrow";
import MainText from "./MainText";

const Leftcontant = () => {
  return (
    <div className="w-[45%]  p-2 flex flex-col justify-between">
      <MainText />
      <Arrow />
    </div>
  );
};

export default Leftcontant;
