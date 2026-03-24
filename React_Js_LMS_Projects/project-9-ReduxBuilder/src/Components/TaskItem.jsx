import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/tasks/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-gray-800 border px-6 m-3 py-4 rounded-xl shadow flex justify-between items-center">
        <div className="">
          <h3
            className={`tracking-wide mb-1 ${task.completed ? "line-through text-gray-400" : ""} text-2xl font-bold`}
          >
            {task.title}
          </h3>
        </div>
        <div>
          <p className="text-sm text-gray-500">{task.category}</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => dispatch(toggleTask(task.id))}
            className={`cursor-pointer text-white px-3 py-1 rounded ${
              task.completed
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {task.completed ? "Reopen" : "Complete"}
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
