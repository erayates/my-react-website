import { configureStore } from "@reduxjs/toolkit";
import gitReducer from "./gitSlice";

export const store = configureStore({
    reducer: {
        git: gitReducer,
    },
})