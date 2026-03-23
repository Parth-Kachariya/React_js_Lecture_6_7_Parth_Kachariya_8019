import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, setSearch } from "../features/tasks/taskSlice";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="col-span-3">
          <input
            placeholder="Search..."
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <select
            onChange={(e) => dispatch(setFilter(e.target.value))}
            className="border w-full p-2 rounded bg-gray-800"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
