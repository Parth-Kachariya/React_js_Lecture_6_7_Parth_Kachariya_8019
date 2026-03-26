import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

export const Login = () => {
  const { loginWithGoogle, loginWithEmail, registerWithEmail } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    if (isLogin) {
      await loginWithEmail(email, password);
    } else {
      await registerWithEmail(email, password);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    await loginWithGoogle();
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-700 p-4">
      <div className="bg-gray-200 dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-md p-8 transform hover:scale-105 transition-transform duration-300">
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FiUser className="text-3xl text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {isLogin ? "Sign in to access your recipes" : "Sign up to get started"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-gray-700 dark:text-gray-200 dark:bg-gray-800"
              required
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-gray-700 dark:text-gray-200 dark:bg-gray-800"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition-all disabled:opacity-50"
          >
            {loading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
          </div>
          <div className="relative flex justify-center text-sm text-gray-500 dark:text-gray-400">
            <span className="px-4  dark:bg-gray-900">or continue with</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border-2 border-indigo-300 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium py-3 rounded-xl transition-all disabled:opacity-50"
        >
          <FaGoogle className="w-5 h-5 text-red-500" />
          Google
        </button>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-500 font-semibold hover:underline dark:text-indigo-400"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>

      </div>
    </div>
  );
};