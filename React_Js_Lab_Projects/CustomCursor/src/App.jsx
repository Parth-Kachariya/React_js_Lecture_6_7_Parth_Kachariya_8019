import React, { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      "button, a, p, h1, h2, h3, span"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Smooth trailing effect
  useEffect(() => {
    const follow = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    };

    const interval = setInterval(follow, 16);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">

      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        }}
      ></div>

      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-40 
        rounded-full border-2 border-blue-500 
        transition-all duration-300 ease-out
        ${hovered ? "w-20 h-20 bg-blue-500/80" : "w-10 h-10"}`}
        style={{
          transform: `translate(${ringPosition.x - 20}px, ${ringPosition.y - 20}px)`,
        }}
      ></div>

      {/* Demo Content */}
      <h1 className="text-4xl mb-6 font-bold">
        🔥 Pro Custom Cursor
      </h1>

      <p className="mb-6 text-lg text-center max-w-md">
        Ye cursor smooth trail karega aur hover pe bada ho jayega.
      </p>

      <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
        Hover Me
      </button>

      <a href="#" className="mt-6 underline text-blue-400">
        Hover Link
      </a>

    </div>
  );
}

export default App;