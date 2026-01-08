import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Help from "./pages/Help";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// createBrowserRouter

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Help" element={<Help />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
/*
{

  import { BrowserRouter, Route, Routes ,  createBrowserRouter } from "react-router-dom"; in app.jsx
  import { Link } from "react-router-dom"; in navbar.jsx
  <a href=""></a> place to <Link
                             to="/Home"
  install -> npm install react-router-dom
  
      Use this structure :
              <BrowserRouter>
                <Navbar/>
                <Routes>
                  <Route path='/Home' element={<Home/>}></Route>
                  <Route path='/About' element={<About/>}></Route>
                  <Route path='/Services' element={<Services/>}></Route>
                  <Route path='/Contact' element={<Contact/>}></Route>
                  <Route path='/Help' element={<Help/>}></Route>
                  <Route path='*' element={<Error/>}></Route>

                </Routes>

                </BrowserRouter>

  
}

*/
