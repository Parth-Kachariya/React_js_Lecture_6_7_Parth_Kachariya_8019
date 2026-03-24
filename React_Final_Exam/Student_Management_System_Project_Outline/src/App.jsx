import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Components/Navbar";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import { loadUser } from "./store/authSlice";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser()); // Load user from localStorage on refresh
  }, [dispatch]);

  return (
    <>
      <Navbar /> {/* Navbar always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/studentDetails" element={<StudentDetails />} />
        <Route
          path="/add-student"
          element={isAuthenticated ? <StudentForm /> : <Navigate to="/login" />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/students" /> : <Register />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/students" /> : <Login />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
