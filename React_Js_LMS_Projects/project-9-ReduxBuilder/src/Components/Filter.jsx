import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, setSearch } from "../features/tasks/taskSlice";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-2 mb-4">
        <input
          placeholder="Search..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="flex-1 border p-2 rounded"
        />

        <select
          onChange={(e) => dispatch(setFilter(e.target.value))}
          className="border p-2 rounded bg-gray-800"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
