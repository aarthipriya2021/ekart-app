import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
  status: "",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        // Only add if item is not already in the cart
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeFromCart(state, action) {
      const updatedCart = state.cart.filter((p) => p.id !== action.payload.id);
      state.cart = updatedCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeAll(state, action) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    reduceProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      } else if (state.cart[itemIndex].quantity === 1) {
        const updatedCart = state.cart.filter(
          (p) => p.id !== action.payload.id
        );
        state.cart = updatedCart;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].quantity >= 1) {
        state.cart[itemIndex].quantity += 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAll,
  reduceProduct,
  incrementProduct,
} = CartSlice.actions;
export default CartSlice.reducer;