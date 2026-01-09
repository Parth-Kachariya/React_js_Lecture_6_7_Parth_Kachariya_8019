import React from "react";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import Error from "./pages/Error";
import ModalPopup from "./pages/ModalPopup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Counter" element={<Counter />}></Route>
          <Route path="/ModalPopup" element={<ModalPopup />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
