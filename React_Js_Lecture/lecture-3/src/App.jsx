import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-4xl bg-slate-800 text-white font-extrabold mb-2 p-3 flex justify-center hover:bg-slate-900">Vite + React + tailwind</h1>
      <div className="card bg-gray-600 mb-2 hover:bg-slate-800">
        <button
          className="bg-red-600 p-3 font-bold text-white rounded-full cursor-pointer hover:bg-red-800"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>

      <h1 className="bg-slate-800 text-2xl font-bold text-white container flex justify-center p-3 hover:bg-gray-600"> Hello World</h1>
    </>
  );
}

export default App;
