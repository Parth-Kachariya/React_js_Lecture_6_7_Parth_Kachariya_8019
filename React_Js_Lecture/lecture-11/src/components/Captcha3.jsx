import { useEffect, useState } from "react";

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const Captcha3 = () => {
  const [captcha, setCaptcha] = useState("");

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 space-y-4">
        
        <h1 className="text-center font-bold text-xl py-2">3</h1>

        <div className="flex justify-between items-center">
          <div className="select-none p-2 rounded-xl border tracking-widest text-3xl font-semibold">
            {captcha}
          </div>

          <button
            onClick={refreshCaptcha}
            className="text-sm text-blue-600 hover:underline p-4 border rounded-xl font-semibold  cursor-pointer"
          >
            Refresh
          </button>
        </div>

      </div>
    </div>
  );
};

export default Captcha3;
