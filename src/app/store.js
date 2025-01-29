import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Redux/product/ProductSlice";
import CartReducer from "../Redux/cart/CartSlice";
import FilterProductReducer from "../Redux/productfilter/filterslice";
import WishListReducer from "../Redux/wishlist/WishListSlice"

export const store = configureStore({
    reducer: {

        products: ProductReducer,
        cart: CartReducer,
        wishlist: WishListReducer,
        productFilter: FilterProductReducer,
    }
}) 