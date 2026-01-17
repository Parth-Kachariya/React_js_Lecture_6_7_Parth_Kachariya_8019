import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

// Password Hide and Show code
const EventHandl = () => {
  const [show, setShow] = useState(false);
  const togglePassword = () => setShow(!show);

  //  Change Color  Code
  const [bgColor, setBgColor] = useState("#abd8");
  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };
  const refresh=()=>{
    window.location.reload()
  }
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-10"
      style={{ backgroundColor: bgColor }}
    >
      {/* Show / Hide Password On Click Event*/}
      <div className=" border border-gray-300 bg-white p-6 rounded-lg shadow-xl w-120 flex flex-col gap-8">
        <h2 className="text-4xl p-4 font-extrabold text-center">
          PR-3-Event Handler
        </h2>

        <div className="flex items-center gap-2">
          <input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            className="border  border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
          />

          <button
            onClick={togglePassword}
            className="border text-black p-3 rounded-md cursor-pointer focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-400"
          >
            {show ? (
              <EyeClosed color="red" size={24} />
            ) : (
              <Eye color="red" size={24} />
            )}
          </button>
        </div>
        {/* Change Color On Click Event */}
        <button
          onClick={changeColor}
          className="bg-blue-500 cursor-pointer w-60 mx-auto font-semibold text-lg text-white px-6 py-2 rounded-md hover:scale-105 hover:shadow-xl transition"
        >
          Set Background Color As Per adjustment
        </button>

        <p className="mt-4 text-center text-xl font-semibold">
          Your Background Color Is: {bgColor}
        </p>
        <button onClick={refresh} className="bg-blue-500 cursor-pointer w-60 mx-auto font-semibold text-lg text-white px-6 py-2 rounded-md hover:scale-105 hover:shadow-xl transition">
            Refresh Page 
        </button>
      </div>
    </div>
  );
};

export default EventHandl;
