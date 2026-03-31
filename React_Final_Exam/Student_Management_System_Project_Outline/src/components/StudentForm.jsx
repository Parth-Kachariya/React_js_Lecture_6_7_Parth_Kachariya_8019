import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../store/studentSlice';
import { FaUserPlus, FaUndo } from 'react-icons/fa';

const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.students);

  const [student, setStudent] = useState({
    name: '',
    rollNumber: '',
    class: '',
    email: '',
    phone: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!student.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!student.rollNumber.trim()) {
      newErrors.rollNumber = 'Roll number is required';
    }
    if (!student.class.trim()) {
      newErrors.class = 'Class is required';
    }
    if (student.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await dispatch(addStudent(student)).unwrap();
        navigate('/students');
      } catch (err) {
        alert('Failed to add student: ' + err);
      }
    }
  };

  const handleReset = () => {
    setStudent({
      name: '',
      rollNumber: '',
      class: '',
      email: '',
      phone: '',
      address: '',
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-4">
            <div className="flex items-center gap-3">
              <FaUserPlus className="text-2xl" />
              <h4 className="text-xl font-semibold m-0">Add New Student</h4>
            </div>
          </div>
          <div className="p-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    id="name"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    placeholder="Enter student name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="rollNumber" className="block text-gray-700 text-sm font-bold mb-2">
                    Roll Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.rollNumber ? 'border-red-500' : 'border-gray-300'}`}
                    id="rollNumber"
                    name="rollNumber"
                    value={student.rollNumber}
                    onChange={handleChange}
                    placeholder="Enter roll number"
                  />
                  {errors.rollNumber && (
                    <p className="text-red-500 text-xs italic mt-1">{errors.rollNumber}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="class" className="block text-gray-700 text-sm font-bold mb-2">
                    Class <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.class ? 'border-red-500' : 'border-gray-300'}`}
                    id="class"
                    name="class"
                    value={student.class}
                    onChange={handleChange}
                    placeholder="e.g., 10th Grade"
                    list="class-suggestions"
                  />
                  <datalist id="class-suggestions">
                    <option value="9th Grade" />
                    <option value="10th Grade" />
                    <option value="11th Grade" />
                    <option value="12th Grade" />
                  </datalist>
                  {errors.class && (
                    <p className="text-red-500 text-xs italic mt-1">{errors.class}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    id="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    name="phone"
                    value={student.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    name="address"
                    value={student.address}
                    onChange={handleChange}
                    placeholder="Enter address"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Adding...
                    </span>
                  ) : (
                    <>
                      <FaUserPlus />
                      Add Student
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition flex items-center gap-2"
                  onClick={handleReset}
                >
                  <FaUndo />
                  Reset
                </button>
                <button
                  type="button"
                  className="border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white font-bold py-3 px-6 rounded-lg transition"
                  onClick={() => navigate('/students')}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
