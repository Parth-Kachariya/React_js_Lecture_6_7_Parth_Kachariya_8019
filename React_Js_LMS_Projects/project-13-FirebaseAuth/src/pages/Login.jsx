import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/profile");
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }

    };

    const handleGoogleLogin = async () => {
        setError("");
        setIsLoading(true);

        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/profile");
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }

    };

    return (
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-800 to-pink-800 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
  <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
  <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

  <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/011/635/825/small/abstract-square-interface-modern-background-concept-fingerprint-digital-scanning-visual-security-system-authentication-login-vector.jpg')] bg-no-repeat bg-cover  opacity-20"></div>

  <div className="relative z-10 w-full max-w-md px-6">
    <div className="bg-gradient-to-tr from-slate-800/70 to-indigo-900/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          Welcome Back
        </h2>
        <p className="text-white/70 mt-2">
          Sign in to continue your adventure
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        {error && (
          <div className="bg-red-600/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm">
            {error}
          </div>
        )}

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiMail className="text-white/50" />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-12 pr-4 py-4 bg-slate-800/40 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiLock className="text-white/50" />
          </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full pl-12 pr-4 py-4 bg-slate-800/40 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-semibold  transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                viewBox="0 0 24 24"
              >
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
              Signing in...
            </>
          ) : (
            <>
              Sign In <FiArrowRight className="text-lg" />
            </>
          )}
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-transparent text-white/50">
              Or continue with
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full bg-white/10 border border-white/20 text-white py-4 px-6 rounded-2xl font-semibold hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>
      </form>

      <p className="mt-8 text-center text-white/70">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
        >
          Create one
        </Link>
      </p>
    </div>
  </div>
</div>
    );
};

export default Login;