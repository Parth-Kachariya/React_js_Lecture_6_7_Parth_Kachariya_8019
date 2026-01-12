import { data ,data2 } from "../App";
import { useContext } from "react";
const Component4 = () => {
    const emp=useContext(data)
    const hr=useContext(data2)
  return (
    <>
      <h1 className="bg-gray-500 text-center p-6 font-bold text-5xl  text-white">
        This Is Component-4
      </h1>
      <div className="bg-blue-300 p-6 text-center text-lg font-semibold">
        <ul>
            <li>this is component-4</li>
            <li>{emp.name}</li>
            <li>{emp.role}</li>
            <li>{hr.name}</li>
            <li>{hr.role}</li>
        </ul>
      </div>
    </>
  );
};

export default Component4;
