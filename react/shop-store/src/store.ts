import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./features/modeSlice";
import { cartSlice } from "./features/cartSlice";

const store = configureStore({
    reducer : {
        theme: modeSlice,
        cart: cartSlice.reducer
    }
})

export default store