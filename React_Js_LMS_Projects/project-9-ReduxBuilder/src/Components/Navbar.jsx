import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  

  return (
    <>
      <div>
        <nav className="bg-gray-800 mx-auto fixed w-full z-20 top-0 border-b border-gray-500">
          <div className=" max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo */}
            <a
              href="https://github.com/Parth-Kachariya?tab=repositories"
              className="flex items-center px-4 py-3 text-xl border rounded-full font-extrabold mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              PK
            </a>

            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            >
              <span className="sr-only">Open main menu</span>
            </button>

            <div className="hidden w-full md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                  <NavLink
                    to="/"
                    end
                    className="block py-2 px-3 text-blue-500  border-b  md:p-0"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink className="block py-2 px-3 text-white hover:text-blue-500 hover:border-b border-blue-500  me-4 md:me-6  hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink className="block py-2 px-3 text-white hover:text-blue-500 hover:border-b border-blue-500  me-4 md:me-6  hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink className="block py-2 px-3 text-white hover:text-blue-500 hover:border-b border-blue-500  me-4 md:me-6  hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                    Products
                  </NavLink>
                </li>

                <li>
                  <NavLink className="block py-2 px-3 text-white hover:text-blue-500 hover:border-b border-blue-500  me-4 md:me-6  hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                    ProductDetails
                  </NavLink>
                </li>

                <li>
                  <NavLink className="block py-2 px-3 text-white hover:text-blue-500 hover:border-b border-blue-500  me-4 md:me-6  hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
