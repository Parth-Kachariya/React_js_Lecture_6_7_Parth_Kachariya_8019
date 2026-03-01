import React, { useState, useEffect } from "react";

function App() {
  // Step 1: Setup Initial State
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [std, setStd] = useState("");
  const [email, setEmail] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Step 2: Load Data from Local Storage
  useEffect(() => {
    const storedData = localStorage.getItem("students");
    if (storedData) {
      setStudents(JSON.parse(storedData));
    }
  }, []);

  // Step 3: Save Data to Local Storage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Step 4 & 5: Add / Update Student
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !std || !email) {
      alert("All fields are required!");
      return;
    }

    const newStudent = { name, std, email };

    if (editIndex !== null) {
      // Update
      const updatedStudents = [...students];
      updatedStudents[editIndex] = newStudent;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      // Create
      setStudents([...students, newStudent]);
    }

    setName("");
    setStd("");
    setEmail("");
  };

  // Delete Student
  const handleDelete = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  // Edit Student
  const handleEdit = (index) => {
    const student = students[index];
    setName(student.name);
    setStd(student.std);
    setEmail(student.email);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student CRUD with Local Storage</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Enter STD (Class)"
          value={std}
          onChange={(e) => setStd(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <button type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <hr />

      <h3>Student List</h3>

      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <strong>Name:</strong> {student.name} |
              <strong> STD:</strong> {student.std} |
              <strong> Email:</strong> {student.email}
              <br />
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;