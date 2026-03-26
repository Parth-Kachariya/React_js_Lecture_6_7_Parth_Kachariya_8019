import React, { useEffect, useState } from "react";
import axios from "axios";
import AddEmployeeModal from "./AddEmployeeModal";
import Pagination from "./Pagination";
import Filter from "./Filter"; // ✅ Import Filter

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState(""); // ✅ Filter state
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editedEmp, setEditedEmp] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("http://localhost:3000/employees");
        setEmployees(res.data);
      } catch (err) {
        console.error("Error fetching employees", err);
      }
    };
    fetchEmployees();
  }, []);

  // Filter employees by search and department
  const filteredEmployees = employees.filter(
    (emp) =>
      (emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (department === "" || emp.department === department),
  );

  // Pagination
  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentEmployees = filteredEmployees.slice(
    startIndex,
    startIndex + rowsPerPage,
  );

  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `http://localhost:3000/employees/${editingId}`,
        editedEmp,
      );
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === editingId ? editedEmp : emp)),
      );
      setEditingId(null);
      setEditedEmp({});
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <div className=" mb-4">
        <div className=" flex justify-around">
          <div className="w-90">
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="border w-full px-4 py-2 rounded"
            />
          </div>
          <div className="w-55">
            <Filter
              department={department}
              setDepartment={setDepartment}
              employees={employees}
            />
          </div>
          <div className="w-40">
            <button
              className="bg-blue-500 w-full text-white px-4 py-2 rounded cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Add Employee
            </button>
          </div>
        </div>
      </div>

      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Designation</th>
            <th className="py-2 px-4 border">Department</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((emp) => (
            <tr key={emp.id} className="border-t">
              <td className="py-2 px-4 border text-center">
                {editingId === emp.id ? (
                  <input
                    value={editedEmp.name}
                    onChange={(e) =>
                      setEditedEmp({ ...editedEmp, name: e.target.value })
                    }
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  emp.name
                )}
              </td>
              <td className="py-2 px-4 border text-center">
                {editingId === emp.id ? (
                  <input
                    value={editedEmp.designation}
                    onChange={(e) =>
                      setEditedEmp({
                        ...editedEmp,
                        designation: e.target.value,
                      })
                    }
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  emp.designation
                )}
              </td>
              <td className="py-2 px-4 border text-center">{emp.department}</td>
              <td className="py-2 px-4 border text-center">{emp.email}</td>
              <td className="py-2 px-4 border flex justify-evenly space-x-2">
                {editingId === emp.id ? (
                  <>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded cursor-pointer"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer"
                      onClick={() => {
                        setEditingId(emp.id);
                        setEditedEmp(emp);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                      onClick={() => handleDelete(emp.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {showModal && (
        <AddEmployeeModal
          setEmployees={setEmployees}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default EmployeeTable;
