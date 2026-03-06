import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { toggleWishlist } from "../redux/wishlistSlice";
import { addToCart, removeToCart } from "../redux/cartSlice";

const ProductCard = ({ data, mode = "product" }) => {
  const dispatch = useDispatch();

  // Wishlist state
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  // Check if product already in wishlist
  const isWishlisted = wishlist.some(
    (item) => item.id === data.id
  );

  return (
    <div className="pt-10">
      <div className="w-[300px] max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
        
        <img
          className="rounded-base mb-6"
          src={data.image}
          alt="product"
        />

        <h5 className="text-xl text-heading font-semibold tracking-tight">
          {data.name}
        </h5>

        {mode === "product" ? (
          <div className="flex items-center justify-between mt-6">
            
            <span className="text-3xl font-extrabold text-heading">
              ${data.price}
            </span>

            <button
              type="button"
              className="inline-flex items-center bg-brand border border-black rounded-base text-sm px-3 py-2"
              onClick={() => dispatch(addToCart(data))}
            >
              AddToCart
            </button>

            {/* Wishlist Toggle Button */}
            <button
              onClick={() => dispatch(toggleWishlist(data))}
              className="p-2 bg-blue-400 rounded-full cursor-pointer"
            >
              {isWishlisted ? (
                <FaHeart color="red" size={20} />
              ) : (
                <FaRegHeart color="white" size={20} />
              )}
            </button>

          </div>
        ) : (
          <div className="flex items-center justify-between mt-6">
            
            <span className="text-3xl font-extrabold text-heading">
              ${data.price}
            </span>

            <button
              type="button"
              className="inline-flex items-center bg-brand border border-black rounded-base text-sm px-3 py-2"
              onClick={() => dispatch(removeToCart(data.id))}
            >
              RemoveToCart
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;