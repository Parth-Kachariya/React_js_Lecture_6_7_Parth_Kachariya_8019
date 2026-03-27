import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FiMail, FiLock, FiUser, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="  bg-[url('https://static.vecteezy.com/system/resources/thumbnails/011/635/825/small/abstract-square-interface-modern-background-concept-fingerprint-digital-scanning-visual-security-system-authentication-login-vector.jpg')] bg-no-repeat bg-cover  bg-opacity-20    min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden py-12">
      
      <div className=" absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">
              Create Account
            </h2>
            <p className="text-white/70">Join us and start your journey</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiUser className="text-white/50" />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiMail className="text-white/50" />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiLock className="text-white/50" />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer bg-cyan-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <FiArrowRight className="text-lg" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-white/70">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
