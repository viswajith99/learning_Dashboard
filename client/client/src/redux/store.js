import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./features/courseSlice";

export const store = configureStore({
    reducer: {
      
        course: courseReducer,
    },
});