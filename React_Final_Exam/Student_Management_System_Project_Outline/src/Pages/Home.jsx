import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchStudents } from "../store/studentSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Student Management System
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg text-gray-600 mb-6 text-center">
            Welcome to the Student Management System! Manage your student
            records efficiently with our easy-to-use interface.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition"
            >
              Login
            </Link>
            <Link
              to="/students"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition"
            >
              View Students
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
