import React, { useState } from "react";
import axios from "axios";

const EmployeeRow = ({ employee, employees, setEmployees }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmp, setEditedEmp] = useState(employee);

  const handleUpdate = async () => {
    await axios.put(`http://localhost:3000/employees/${employee.id}`, editedEmp);
    const updatedEmployees = employees.map(emp =>
      emp.id === employee.id ? editedEmp : emp
    );
    setEmployees(updatedEmployees);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/employees/${employee.id}`);
    setEmployees(employees.filter(emp => emp.id !== employee.id));
  };

  return (
    <tr className="border-t">
      <td className="py-2 px-4 border">
        {isEditing ? (
          <input
            value={editedEmp.name}
            onChange={e => setEditedEmp({ ...editedEmp, name: e.target.value })}
            className="border px-2 py-1 rounded"
          />
        ) : (
          employee.name
        )}
      </td>
      <td className="py-2 px-4 border">
        {isEditing ? (
          <input
            value={editedEmp.designation}
            onChange={e =>
              setEditedEmp({ ...editedEmp, designation: e.target.value })
            }
            className="border px-2 py-1 rounded"
          />
        ) : (
          employee.designation
        )}
      </td>
      <td className="py-2 px-4 border">
        {isEditing ? (
          <input
            value={editedEmp.department}
            onChange={e =>
              setEditedEmp({ ...editedEmp, department: e.target.value })
            }
            className="border px-2 py-1 rounded"
          />
        ) : (
          employee.department
        )}
      </td>
      <td className="py-2 px-4 border">
        {isEditing ? (
          <input
            value={editedEmp.email}
            onChange={e => setEditedEmp({ ...editedEmp, email: e.target.value })}
            className="border px-2 py-1 rounded"
          />
        ) : (
          employee.email
        )}
      </td>
      <td className="py-2 px-4 border space-x-2 flex justify-evenly">
        {isEditing ? (
          <>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-2 py-1 rounded"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className=" cursor-pointer bg-yellow-500 text-white px-3 py-1 rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className=" cursor-pointer bg-red-500 text-white px-2 py-1 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default EmployeeRow;