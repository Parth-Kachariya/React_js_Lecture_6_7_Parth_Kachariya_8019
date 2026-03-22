import React from "react";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import Filter from "../Components/Filter";
const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-center p-4 my-4 bg-gray-700">ReduxBuilder</h1>
        <div className="w-1/2 mx-auto">
          <TaskForm />
          <Filter />
          <TaskList />
        </div>
      </div>
    </>
  );
};

export default Home;
