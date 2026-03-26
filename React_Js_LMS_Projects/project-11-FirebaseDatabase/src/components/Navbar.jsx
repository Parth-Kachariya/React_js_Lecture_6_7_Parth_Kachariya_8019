import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-blue-500 p-6 shadow-lg sticky top-0 z-50">
      <div className="p-4 flex justify-between border-white/20">
        <h1 className="text-3xl font-extrabold text-white tracking-wide">
          Firebase Storage
        </h1>
        <div className=" border rounded-xl border-gray-400">
          <button
            onClick={logout}
            className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/20 transition text-red-300 hover:text-red-200"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
