import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import {
  FaGraduationCap,
  FaList,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/students");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/students" className="flex items-center gap-2 font-bold">
        <FaGraduationCap />
        Student System
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/students" className="flex items-center gap-2">
          <FaList />
          Student Detail
        </Link>

        {!isAuthenticated && (
          <Link to="/login" className="flex items-center gap-2">
            <FaSignInAlt />
            Login
          </Link>
        )}

        {isAuthenticated && user && (
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium">
              <FaUser />
              {user.username}
            </span>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
