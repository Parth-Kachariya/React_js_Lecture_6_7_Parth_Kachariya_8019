import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;

      const exists = state.wishlist.find(
        (item) => item.id === product.id
      );

      if (exists) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== product.id
        );
      } else {
        state.wishlist.push(product);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;