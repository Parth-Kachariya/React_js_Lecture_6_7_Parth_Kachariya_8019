import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
   const { id } = useParams();
   console.log(id);
   

 return (
    <div className="bg-gray-900 text-gray-200  py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Placeholder */}
          <div className="bg-gray-800 h-96 rounded-2xl border border-gray-700 flex items-center justify-center text-gray-500 text-xl">
            Product Image
          </div>

          {/* Product Info */}
          <div className='bg-gray-800 p-10 flex flex-col rounded-xl'>
            <h2 className="text-4xl font-bold text-white mb-4">
              Product ID: {id}
            </h2>

            <p className="text-blue-500 text-2xl mb-6">
              {}
            </p>

            <p className="text-gray-400 mb-8">
              This product comes with premium build quality, modern features
              and excellent performance suitable for professionals.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>

              <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Buy Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails
