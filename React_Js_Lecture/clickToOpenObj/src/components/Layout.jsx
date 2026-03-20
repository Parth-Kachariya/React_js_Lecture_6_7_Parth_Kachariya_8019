import React from "react";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div className="bg-gray-900 min-h-screen text-white flex flex-col">
        <Navbar />
        {/* <main className=" max-w-7xl mx-auto pt-24"> */}
        <main className=" pt-24">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
