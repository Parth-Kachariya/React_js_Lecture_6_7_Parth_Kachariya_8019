import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import Login from "./components/Login";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes - Show Home on render */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        
        {/* All Routes - No authentication required */}
        <Route path="/students" element={<StudentList />} />
        <Route path="/add-student" element={<StudentForm />} />
        <Route path="/student/:id" element={<StudentDetails student={{}} />} />
        
        {/* Error Route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
