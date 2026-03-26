import React from "react";

const Filter = ({ department, setDepartment, employees }) => {
  // Unique departments
  const departments = [...new Set(employees.map((emp) => emp.department))];

  return (
    <select
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
      className="border bg-gray-800 text-white px-2 py-1 h-full w-full rounded cursor-pointer"
    >
      <option value="">All Departments</option>
      {departments.map((dep) => (
        <option key={dep} value={dep}>
          {dep}
        </option>
      ))}
    </select>
  );
};

export default Filter;
