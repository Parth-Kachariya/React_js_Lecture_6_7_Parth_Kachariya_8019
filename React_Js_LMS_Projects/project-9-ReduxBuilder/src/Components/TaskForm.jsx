import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Low");
  const dispatch = useDispatch();
    // console.log("Tasks:", tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title){
        alert("Fill Field")
        return
    };
    dispatch(addTask(title, category, priority));
    setTitle("");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl flex flex-col shadow mb-4"
      >
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />

        <div className="flex gap-2 mb-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-1/2 border p-2 rounded bg-gray-800"
          >
            <option>Work</option>
            <option>Personal</option>
            <option>Study</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-1/2 border p-2 rounded bg-gray-800"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button className="w-1/2 mx-auto cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          Add Task
        </button>
      </form>
    </>
  );
};

export default TaskForm;
