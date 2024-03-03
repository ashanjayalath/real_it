import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth-slice";

export const store = configureStore({
    reducer:{
        AuthSlice : authSlice
    }
});

export default store;