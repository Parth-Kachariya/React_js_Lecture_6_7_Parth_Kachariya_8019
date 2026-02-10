import {useState } from 'react'
import { useEffect } from 'react';

const Captcha = () => {
   const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    setInput("");
  };

  useEffect(() => {
    generateCaptcha();  
  }, []);

  const verifyCaptcha = () => {
    if (input === captcha) {
      setStatus("success");
    } else {
      setStatus("error");
      generateCaptcha();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-xl font-bold text-center mb-4">
          CAPTCHA Verification
        </h2>

        {/* Captcha Box */}
        <div className="flex items-center justify-between mb-4">
          <div className="bg-gray-200 px-4 py-2 font-mono text-red-500 text-xl font-semibold underline -underline-offset-7 decoration-green-500 tracking-widest rounded ">
            {captcha}
          </div>

          <button
            onClick={generateCaptcha}
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            Refresh
          </button>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter captcha"
          value={input}
          onChange={(e) => setInput(e.target.value.trim())}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Button */}
        <button
          onClick={verifyCaptcha}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Verify
        </button>

        {/* Status */}
        {status === "success" && (
          <p className="text-green-600 text-center mt-3">
            ✅ Captcha Verified
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-center mt-3">
            ❌ Wrong Captcha
          </p>
        )}
      </div>
    </div>
  );
}

export default Captcha
