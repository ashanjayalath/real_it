import { configureStore } from "@reduxjs/toolkit";
import {AuthApi} from "../app/services/AuthApi"
import {setupListeners} from "@reduxjs/toolkit/query/react";
import authSlice from "./features/authSlice";

export const store = configureStore({
    reducer:{
        userInfo:authSlice,
        [AuthApi.reducerPath]:AuthApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)
export default store;