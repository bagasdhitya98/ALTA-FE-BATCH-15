import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./features/modeSlice";

const store = configureStore({
    reducer : {
        theme: modeSlice
    }
})

export default store