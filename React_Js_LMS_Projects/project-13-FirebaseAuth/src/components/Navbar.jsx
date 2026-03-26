import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiLogOut, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-teal-500 to-sky-600 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-bold text-2xl hover:scale-105 transition-transform"
          >
            <span className="bg-white/20 p-2 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </span>
            FirebaseAuth
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg text-white font-medium hover:bg-white/20 hover:text-cyan-400 hover:scale-105 transition-all duration-300 shadow-md"
                >
                  <FiUser className="text-lg" />
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white/20 text-white font-medium hover:bg-white/30 hover:text-red-400 hover:scale-105 transition-all duration-300 shadow-md border border-white/30"
                >
                  <FiLogOut className="text-lg" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="px-5 border py-2 rounded-lg text-white font-medium hover:bg-white/20 hover:text-cyan-300 hover:scale-105 transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 rounded-lg bg-white text-cyan-600 font-medium shadow-lg hover:bg-cyan-100 hover:text-cyan-700 hover:scale-105 transition-transform duration-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/10 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 space-y-3">
          {user ? (
            <>
              <Link
                to="/profile"
                className="block px-4 py-3 rounded-lg text-white font-medium hover:bg-white/20 hover:text-cyan-300 hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiUser className="inline mr-2" />
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg text-white font-medium hover:bg-white/20 hover:text-red-400 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <FiLogOut />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="block px-4 py-3 rounded-lg text-white font-medium hover:bg-white/20 hover:text-cyan-300 hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-3 rounded-lg text-white font-medium bg-cyan-600 hover:bg-cyan-700 hover:text-white transition-all duration-300 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;