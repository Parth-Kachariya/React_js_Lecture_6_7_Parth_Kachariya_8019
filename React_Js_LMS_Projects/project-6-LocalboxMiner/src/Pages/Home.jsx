import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 text-gray-200">

      {/* Hero */}
      <section className="py-24 text-center bg-gray-800 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">
            Build Modern Websites
          </h1>
          <p className="mb-8 text-gray-400">
            We create fast, scalable and professional web applications.
          </p>
          <Link
            to="/products"
            className="bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition"
          >
            View Products
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {["Fast", "Modern", "Secure"].map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 
                   transform transition duration-600
                   hover:scale-110  hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {item}
              </h3>
              <p className="text-gray-400">
                High quality {item.toLowerCase()} web solutions.
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home
