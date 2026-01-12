import React from "react";
import Component2 from "./Component2";
import { data, data2 } from "../App";
import { useContext } from "react";

const Component1 = () => {
  const emp = useContext(data);
  const hr = useContext(data2);
  return (
    <>
      <h1 className="bg-gray-500 text-center p-6 font-bold text-5xl  text-white">
        This Is Component-1
      </h1>
      <div className="bg-blue-300 p-6 text-center text-lg font-semibold">
        <ul>
            <li>this is component-1</li> <br /> <br />
          <li>{emp.name}</li>
          <li>{emp.role}</li>
          <li>{hr.name}</li>
          <li>{hr.role}</li>
        </ul>
      </div>
      <Component2 />
    </>
  );
};

export default Component1;
