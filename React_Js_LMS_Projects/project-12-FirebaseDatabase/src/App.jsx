import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Recipes from "./pages/Recipes";

const AppContent = () => {
  const { user } = useAuth();
  const [category, setCategory] = useState("All"); // Sidebar filter

  if (!user) return <Login />;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar category={category} setCategory={setCategory} />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="p-6">
          <Recipes category={category} />
        </main>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
