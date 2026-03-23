import React from "react";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import Filter from "../Components/Filter";
const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10 ">
        <h1 className="text-center text-4xl font-black -tracking-tighter p-4 my-4 bg-gray-700 rounded-xl">ReduxBuilder</h1>
        <div className="w-1/2 mx-auto space-y-14 flex flex-col justify-between border p-8 rounded-xl border-gray-700">
          <div>
            <TaskForm />
            <Filter />
          </div>
          <TaskList />
        </div>
      </div>
    </>
  );
};

export default Home;
