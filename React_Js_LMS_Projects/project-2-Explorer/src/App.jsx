import { useState } from "react";
import "./App.css";

function App() {
  const [number, Count] = useState(0);

  function Add() {
    Count(number + 1);
  }
  function Sub() {
    if (number > 0) {
      Count(number - 1);
    } else {
      alert(" cannot Count because next number is negative");
    }
  }

  return (
    <div className="min-h-screen bg-red-00 flex flex-col justify-center items-center  bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="  p-8 flex flex-col justify-between rounded-2xl shadow-2xl bg-blue-100 shadow-indigo-900 border-2 border-indigo-900 text-center w-120 h-100 hover:scale-105 duration-400">
        <h1 className="text-5xl font-extrabold">PR-1-Counter</h1>
        <div className="flex items-center justify-center space-x-8 mt-6">
          <button
            className="py-2 px-4 rounded-xl font-bold text-white text-lg bg-green-500 hover:bg-green-600 cursor-pointer"
            onClick={Add}
          >
            Increase + +
          </button>
          <h1 className="border-b-2 border-blue-900 text-blue-600 text-4xl font-extrabold py-2 px-5  rounded">
            {number}
          </h1>
          <button
            className="py-2 px-4 rounded-xl font-bold text-white text-lg bg-red-500 hover:bg-red-600 cursor-pointer"
            onClick={Sub}
          >
            Decrease - -
          </button>
        </div>
        <p className=" text-lg font-semibold mt-6">
          Click on the <span className="font-extrabold text-3xl "> + </span> and
          <span className="font-extrabold text-4xl"> - </span> buttons to
          increase or decrease the count.
        </p>
      </div>
    </div>
  );
}

export default App;
