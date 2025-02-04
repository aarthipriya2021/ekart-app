import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Redux/product/ProductSlice";
import CartReducer from "../Redux/cart/CartSlice";
import FilterProductReducer from "../Redux/productfilter/FilterSlice.js";
// import FilterProductReducer from "../Redux/productfilter/FilterSlice";
import WishListReducer from "../Redux/wishlist/WishListSlice";
import AuthReducer from "../Redux/auth/AuthSlice.js"

export const store = configureStore({
    reducer: {
        
        products: ProductReducer,
        cart: CartReducer,
        wishlist: WishListReducer,
        productFilter: FilterProductReducer,
        auth: AuthReducer,
    }
}) 