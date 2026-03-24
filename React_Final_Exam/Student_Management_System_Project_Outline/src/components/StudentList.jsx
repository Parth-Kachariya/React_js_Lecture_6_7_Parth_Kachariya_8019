import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents, setSearchTerm, setSortBy, setFilterClass } from '../store/studentSlice';
import StudentDetails from './StudentDetails';
import { FaSearch, FaPlus, FaSync, FaUserGraduate, FaFilter, FaSort } from 'react-icons/fa';

const StudentList = () => {
  const dispatch = useDispatch();
  const { students, loading, error, searchTerm, sortBy, filterClass } = useSelector(
    (state) => state.students
  );

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  // Get unique classes for filter dropdown
  const classes = useMemo(() => {
    const uniqueClasses = [...new Set(students.map((s) => s.class))];
    return uniqueClasses.sort();
  }, [students]);

  // Filter and sort students
  const filteredStudents = useMemo(() => {
    let result = [...students];

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (student) =>
          student.name.toLowerCase().includes(term) ||
          student.rollNumber.toLowerCase().includes(term) ||
          student.email?.toLowerCase().includes(term)
      );
    }

    // Filter by class
    if (filterClass) {
      result = result.filter((student) => student.class === filterClass);
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'rollNumber') {
        return a.rollNumber.localeCompare(b.rollNumber);
      }
      return 0;
    });

    return result;
  }, [students, searchTerm, sortBy, filterClass]);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilterClass(e.target.value));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading students...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FaUserGraduate className="h-6 w-6 text-red-500" />
            </div>
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
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800">Student Directory</h2>
            <p className="text-gray-500 mt-1">Manage and organize student records</p>
          </div>
          <Link
            to="/add-student"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition hover:scale-105 flex items-center gap-2"
          >
            <FaPlus />
            Add New Student
          </Link>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50"
                id="search"
                placeholder="Search by name, roll number, or email..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSort className="h-4 w-4 text-gray-400" />
              </div>
              <select
                className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 appearance-none cursor-pointer"
                id="sortBy"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="name">Sort by Name</option>
                <option value="rollNumber">Sort by Roll Number</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaFilter className="h-4 w-4 text-gray-400" />
              </div>
              <select
                className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 appearance-none cursor-pointer"
                id="filterClass"
                value={filterClass}
                onChange={handleFilterChange}
              >
                <option value="">All Classes</option>
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
                onClick={() => {
                  dispatch(setSearchTerm(''));
                  dispatch(setSortBy('name'));
                  dispatch(setFilterClass(''));
                }}
              >
                <FaSync />
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Student Cards */}
        {filteredStudents.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
            <div className="mb-4">
              <FaUserGraduate className="mx-auto h-16 w-16 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Students Found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {filteredStudents.map((student) => (
                <StudentDetails key={student.id} student={student} />
              ))}
            </div>
            
            {/* Results Summary */}
            <div className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">Showing {filteredStudents.length} of {students.length} students</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">Total Students:</span>
                <span className="font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-full">{students.length}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentList;
