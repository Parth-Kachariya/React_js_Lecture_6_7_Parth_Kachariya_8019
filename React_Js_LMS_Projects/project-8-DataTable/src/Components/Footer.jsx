import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800  shadow-xs border-b mb-2">
      <div className="max-w-7xl mx-auto  p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://github.com/Parth-Kachariya?tab=repositories"
            className="flex items-center px-4 py-3 text-xl border rounded-full font-extrabold mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            PK
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <Link className=" hover:text-blue-500 hover:border-b-2 border-blue-500  me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link className=" hover:text-blue-500 hover:border-b-2 border-blue-500  me-4 md:me-6">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 hover:border-b-2 border-blue-500  me-4 md:me-6">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-500  hover:border-b-2 border-blue-500 ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-500 sm:mx-auto " />
        <span className="block text-sm text-body font-semibold -tracking-tighter sm:text-center">
          © 2026{" "}
          <a
            href="https://github.com/Parth-Kachariya?tab=repositories"
            className="hover:text-blue-500 hover:border-b-2 border-blue-500"
          >
            Parth Kachariya
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
