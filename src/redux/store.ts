import { configureStore } from "@reduxjs/toolkit";
import {authMidleSlice} from "./features/authMidleSlice";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import authSlice from "./features/auth/authSlice";
import invoiceSlice from "./features/invoice/invoiceSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        invoice:invoiceSlice,
        [authMidleSlice.reducerPath]:authMidleSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMidleSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)
export default store;