import React, { useState } from "react";
import axios from "axios";

const AddEmployeeModal = ({ setEmployees, setShowModal }) => {
  const [newEmp, setNewEmp] = useState({
    name: "",
    designation: "",
    department: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const tempErrors = {};
    if (!newEmp.name.trim()) tempErrors.name = "Name is required";
    if (!newEmp.designation.trim())
      tempErrors.designation = "Designation is required";
    if (!newEmp.department.trim())
      tempErrors.department = "Department is required";
    if (!newEmp.email.trim()) tempErrors.email = "Email is required";
    else if (!emailRegex.test(newEmp.email))
      tempErrors.email = "Invalid email format";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleAdd = async () => {
    if (!validate()) return;

    try {
      const res = await axios.post("http://localhost:3000/employees", newEmp);
      setEmployees((prev) => [...prev, res.data]);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-400/80 flex items-center justify-center ">
      <div className="bg-gray-800 p-6 rounded w-1/3 border-2 border-white">
        <h2 className="text-xl font-bold py-3 rounded-xl bg-gray-700 text-center">
          Add Employee
        </h2>
        <div className="p-6">
          <div className="py-3">
            <input
              placeholder="Name"
              value={newEmp.name}
              onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
              className={`border w-full mb-1 px-4 py-3 rounded ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mb-2">{errors.name}</p>
            )}
          </div>

          <div className="py-3">
            <input
              placeholder="Designation"
              value={newEmp.designation}
              onChange={(e) =>
                setNewEmp({ ...newEmp, designation: e.target.value })
              }
              className={`border w-full mb-1 px-4 py-3 rounded ${errors.designation ? "border-red-500" : ""}`}
            />
            {errors.designation && (
              <p className="text-red-500 text-sm mb-2">{errors.designation}</p>
            )}
          </div>

          <div className="py-3">
            <input
              placeholder="Department"
              value={newEmp.department}
              onChange={(e) =>
                setNewEmp({ ...newEmp, department: e.target.value })
              }
              className={`border w-full mb-1 px-4 py-3 rounded ${errors.department ? "border-red-500" : ""}`}
            />
            {errors.department && (
              <p className="text-red-500 text-sm mb-2">{errors.department}</p>
            )}
          </div>

          <div className="py-3">
            <input
              placeholder="Email"
              value={newEmp.email}
              onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
              className={`border w-full mb-1 px-4 py-3 rounded ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">{errors.email}</p>
            )}
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <button
              className="cursor-pointer  bg-gray-500 text-white px-6 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="cursor-pointer  bg-blue-500 text-white px-8 py-2 rounded"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
