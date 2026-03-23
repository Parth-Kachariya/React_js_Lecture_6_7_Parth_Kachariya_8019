import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const dispatch = useDispatch();
  // console.log("Tasks:", tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Fill Field");
      return;
    }
    dispatch(addTask(title, category));
    setTitle("");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 border border-gray-500 p-8 rounded-xl flex flex-col shadow mb-4"
      >
        <div className="grid  grid-cols-2 space-y-4">
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Enter task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded "
            />
          </div>
          <div className="grid  grid-cols-2 col-span-2 gap-4">
            <div className=" flex items-center justify-center my-auto gap-2  ">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border p-2 rounded bg-gray-800 "
              >
                <option>Work</option>
                <option>Personal</option>
                <option>Study</option>
              </select>
            </div>
            <div className="  flex items-center justify-center">
              <button className="w-full mx-auto z-0 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
                Add Task
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
