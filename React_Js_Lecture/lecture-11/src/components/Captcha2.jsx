import { useEffect, useState } from "react";

const fonts = ["font-serif", "font-mono", "font-sans"];

const colors = [
  "text-red-600",
  "text-blue-600",
  "text-green-600",
  "text-purple-600",
  "text-pink-600",
  "text-yellow-600",
];

const sizes = ["text-2xl", "text-3xl", "text-4xl"];

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};
const Captcha2 = () => {
  const [captcha, setCaptcha] = useState("");
  const [font, setFont] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setFont(fonts[Math.floor(Math.random() * fonts.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    setSize(sizes[Math.floor(Math.random() * sizes.length)]);
    setInput("");
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const validateCaptcha = () => {
    if (input === captcha) {
      setMessage("✅ CAPTCHA Verified");
    } else {
      setMessage("❌ Invalid CAPTCHA");
      refreshCaptcha();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 space-y-4">
        <h1 className='text-center font-bold text-xl py-2'>2</h1>

        <div className="flex justify-between items-center">
          <div
            className={`select-none  p-2 rounded-xl border  tracking-widest ${font} ${color} ${size}`}
          >
            {captcha}
          </div>
          <button
            onClick={refreshCaptcha}
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            Refresh
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter CAPTCHA"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={validateCaptcha}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer transition"
        >
          Verify
        </button>
        {message && <p className="text-center font-semibold">{message}</p>}
      </div>
    </div>
  );
};

export default Captcha2;
