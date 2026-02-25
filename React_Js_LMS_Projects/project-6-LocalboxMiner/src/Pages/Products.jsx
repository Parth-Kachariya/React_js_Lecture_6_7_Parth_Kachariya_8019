import React from 'react'
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Laptop", price: "₹60,000" },
    { id: 2, name: "Mobile", price: "₹25,000" },
    { id: 3, name: "Headphones", price: "₹3,000" },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className=" bg-gray-800 px-8 py-10 text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-gray-400">
            Premium quality gadgets at best prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {product.name}
              </h3>

              <p className="text-blue-500 text-lg font-medium mb-6">
                {product.price}
              </p>

              <Link
                to={`/products/${product.id}`}
                className="block text-center bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Products
