import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, filter, search } = useSelector((state) => state.tasks);
  console.log("Tasks:", tasks);
  const filteredTasks = tasks
    .filter((t) => {
      if (filter === "completed") return t.completed;
      if (filter === "pending") return !t.completed;
      return true;
    })
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
        <div className="space-y-3 bg-gray-800 border border-gray-400 p-4 space-x-4 rounded-xl grid grid-cols-2">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
    </>
  );
};

export default TaskList;
