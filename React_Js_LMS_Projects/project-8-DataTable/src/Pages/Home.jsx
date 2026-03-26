import React from "react";
import EmployeeTable from "../Components/EmployeeTable";
const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10 ">
        <h1 className="text-center text-4xl font-black -tracking-tighter p-4 my-4 bg-gray-700 rounded-xl">Data Table</h1>
        <div className=" mx-auto space-y-14 flex flex-col justify-between border p-8 rounded-xl border-gray-700">
          <EmployeeTable/>
        </div>
      </div>
    </>
  );
};

export default Home;
