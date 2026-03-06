import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import { IoRemove } from "react-icons/io5";




const WishList = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <div className="p-6">
      <h2 className="text-4xl text-center font-bold mb-6">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-400">No items in wishlist</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {wishlist.map((data) => (
            <div key={data.id} className="pt-10">
              <div className="w-[300px] max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
                <img
                  className="rounded-base mb-6"
                  src={data.image}
                  alt="product"
                />

                <h5 className="text-xl text-heading font-semibold tracking-tight">
                  {data.name}
                </h5>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-3xl font-extrabold text-heading">
                    ${data.price}
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center bg-brand border border-black rounded-base text-sm px-3 py-2"
                    onClick={() => dispatch(addToCart(data))}
                  >
                    MoveToCart
                  </button>

                  <button
                    onClick={() => dispatch(toggleWishlist(data))}
                    className="bg-red-500 rounded-full text-white p-1 rounded-base text-sm"
                  >
                    <IoRemove size={30}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
