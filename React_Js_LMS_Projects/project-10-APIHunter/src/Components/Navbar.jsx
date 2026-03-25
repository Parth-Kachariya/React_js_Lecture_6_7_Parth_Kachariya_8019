import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass = ({ isActive }) =>
    isActive
      ? "block py-2 px-3 text-blue-500  border-b  md:p-0"
      : "block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0";

  return (
    <>
      <div>
        <nav className="bg-gray-800 mx-auto fixed w-full z-20 top-0 shadow-xl shadow-gray-700 border-b border-gray-500">
          <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo */}
            <a
              href="https://github.com/Parth-Kachariya?tab=repositories"
              className="flex items-center px-4 py-3 text-xl border rounded-full font-extrabold mb-4 sm:mb-0"
            >
              PK
            </a>

            <div className="hidden w-full md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                  <NavLink to="/" end className={activeClass}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/wishlist" className={activeClass}>
                    Mywishlist
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
