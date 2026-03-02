import { useState, useEffect } from "react";
import StudentDataPrint from "./StudentDataPrint";

const StudentData = () => {
  const [student, setstudent] = useState([]);
  const [name, setname] = useState("");
  const [course, setcourse] = useState("");
  const [email, setemail] = useState("");
  const [editid, seteditid] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("student");
    if (data !== null) {
      setstudent(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(student));
  }, [student]);

  const handleSubmit = (d) => {
    d.preventDefault();
    if (name === "" || course === "" || email === "") {
      return alert("Please fill all fields !!");
    }

    const studentDataObj = { name, course, email };

    if (editid !== null) {
      const UpdateStudent = [...student];
      UpdateStudent[editid] = studentDataObj;
      setstudent(UpdateStudent);
      seteditid(null);
    } else {
      setstudent([...student, studentDataObj]);
    }
    setname("");
    setcourse("");
    setemail("");
  };

  const handledelete = (index) => {
    const newStudentArray = student.filter((student, i) => {
      return i !== index;
    });
    setstudent(newStudentArray);
  };

  const handleEdit = (i) => {
    const selectStudent = student[i];
    setname(selectStudent.name);
    setcourse(selectStudent.course);
    setemail(selectStudent.email);
    seteditid(i);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
        <div className="bg-gray-800 p-8 rounded-xl w-full max-w-3xl">
          <h1 className="text-white text-2xl font-bold text-center mb-6"></h1>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-3 gap-4 mb-6"
          >
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Enter Student Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="p-3 rounded bg-gray-700 text-white"
              />
            </div>
            {/* Course input */}
            <div>
              <input
                type="text"
                placeholder="Enter Student Course"
                value={course}
                onChange={(e) => setcourse(e.target.value)}
                className="p-3 rounded bg-gray-700 text-white"
              />
            </div>
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Enter Student Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="p-3 rounded bg-gray-700 text-white"
              />
            </div>
            {/* Edit And Add Student Button */}
            <div className="md:col-span-3 text-center mt-4">
              <button
                type="submit"
                className=" cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
              >
                {editid !== null ? "Update Data" : "Add Student"}
              </button>
            </div>
          </form>
          <StudentDataPrint
            student={student}
            handledelete={handledelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </>
  );
};

export default StudentData;
