import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchStudents,
  setSearchTerm,
  setSortBy,
  setFilterClass,
} from "../store/studentSlice";
import StudentDetails from "./StudentDetails";
import {
  FaSearch,
  FaPlus,
  FaSync,
  FaUserGraduate,
  FaFilter,
  FaSort,
} from "react-icons/fa";

const StudentList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { students, loading, error, searchTerm, sortBy, filterClass } =
    useSelector((state) => state.students);

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const classes = useMemo(() => {
    const uniqueClasses = [...new Set(students.map((s) => s.class))];
    return uniqueClasses.sort();
  }, [students]);

  const filteredStudents = useMemo(() => {
    let result = [...students];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (student) =>
          student.name.toLowerCase().includes(term) ||
          student.rollNumber.toLowerCase().includes(term) ||
          student.email?.toLowerCase().includes(term),
      );
    }

    if (filterClass) {
      result = result.filter((student) => student.class === filterClass);
    }

    result.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "rollNumber")
        return a.rollNumber.localeCompare(b.rollNumber);
      return 0;
    });

    return result;
  }, [students, searchTerm, sortBy, filterClass]);

  const handleAddStudent = () => {
    if (!isAuthenticated) {
      alert("Please login first, then you can add a student. !!");
      return;
    }
    navigate("/add-student");
  };

  if (loading) return "Data Not Found";

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <FaUserGraduate className="h-6 w-6 text-red-500" />
            <div className="ml-3">
              <p className="text-red-700 font-semibold">Error</p>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Student Directory
            </h2>
            <p className="text-gray-500 mt-1">
              Manage and organize student records
            </p>
          </div>

          <button
            onClick={handleAddStudent}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg cursor-pointer transform transition hover:scale-105 flex items-center gap-2 mt-4 md:mt-0"
          >
            <FaPlus />
            Add New Student
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-4 text-gray-400" />
              <input
                type="text"
                className="pl-10 w-full border rounded-lg py-3 px-4 bg-gray-50"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <FaSort className="absolute left-3 top-4 text-gray-400" />
              <select
                className="pl-10 w-full border rounded-lg py-3 px-4 bg-gray-50"
                value={sortBy}
                onChange={(e) => dispatch(setSortBy(e.target.value))}
              >
                <option value="name">Sort by Name</option>
                <option value="rollNumber">Sort by Roll Number</option>
              </select>
            </div>

            {/* Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-4 text-gray-400" />
              <select
                className="pl-10 w-full border rounded-lg py-3 px-4 bg-gray-50"
                value={filterClass}
                onChange={(e) => dispatch(setFilterClass(e.target.value))}
              >
                <option value="">All Classes</option>
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear */}
            <button
              className="bg-gray-200 hover:bg-gray-300 py-3 rounded-lg flex items-center justify-center gap-2"
              onClick={() => {
                dispatch(setSearchTerm(""));
                dispatch(setSortBy("name"));
                dispatch(setFilterClass(""));
              }}
            >
              <FaSync />
              Clear
            </button>
          </div>
        </div>

        {filteredStudents.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-xl">
            <FaUserGraduate className="mx-auto text-gray-300 text-5xl mb-4" />
            <p>No Students Found</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student) => (
              <StudentDetails key={student.id} student={student} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
