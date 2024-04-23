import { configureStore } from "@reduxjs/toolkit";
import {authMidleSlice} from "./features/authMidleSlice";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import authSlice from "./features/auth/authSlice";
import invoiceSlice from "./features/invoice/invoiceSlice";
import itemSlice from "./features/item/itemSlice";

export const store = configureStore({
    reducer:{
        [authMidleSlice.reducerPath]:authMidleSlice.reducer,
        auth:authSlice,
        item:itemSlice,
        invoice:invoiceSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMidleSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)
export default store;