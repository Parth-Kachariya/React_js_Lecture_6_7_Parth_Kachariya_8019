import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { FaGraduationCap, FaUser, FaSignOutAlt, FaList, FaPlus } from 'react-icons/fa';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link className="text-xl font-bold hover:text-blue-200 flex items-center gap-2" to="/">
            <FaGraduationCap className="text-2xl" />
            Student Management System
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link className="hover:text-blue-200 transition flex items-center gap-2" to="/students">
                  <FaList />
                  Student List
                </Link>
                <Link className="hover:text-blue-200 transition flex items-center gap-2" to="/add-student">
                  <FaPlus />
                  Add Student
                </Link>
                <span className="text-blue-200 flex items-center gap-2">
                  <FaUser />
                  Welcome, {user?.username}
                </span>
                <button
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            ) : (
              <Link className="hover:text-blue-200 transition flex items-center gap-2" to="/login">
                <FaSignOutAlt className="rotate-180" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
