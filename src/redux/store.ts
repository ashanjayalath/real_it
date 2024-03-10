import { configureStore } from "@reduxjs/toolkit";
import {apiSlice} from "../redux/features/apiSlice";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import authSlice from "../redux/auth/authSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)
export default store;