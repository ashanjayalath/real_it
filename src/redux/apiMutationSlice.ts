import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MAIN_URL , UserRoutes , InvoiceRoutes} from "ApiLinks/allLinks";


export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:MAIN_URL,
        credentials:"include",
    }),
    endpoints:(builder) => ({

        //log in user Query
        userLogin:builder.mutation({
            query:(body: { email:string; password:string}) =>{
                return {
                    url:UserRoutes.USER_LOGIN_URL,
                    method:"POST",
                    body,
                };    
            },
        }),
        //user update Query
        userUpdate:builder.mutation({
            query:(body:any) =>{
                return {
                    url:UserRoutes.USER_UPDATE,
                    method:"POST",
                    body
                };    
            },
        }),
        //user forget password Query
        userForgetPassword:builder.mutation({
            query:(body:any) =>{
                return {
                    url:UserRoutes.USER_FORGET_PASSWORD,
                    method:"PUT",
                    body
                };    
            },
        }),
        //user otp send
        userOtpSend:builder.mutation({
            query:(body:any) =>{
                return {
                    url:UserRoutes.USER_OTP,
                    method:"POST",
                    body
                };    
            },
        }),
        //user otp verify
        userOtpVerify:builder.mutation({
            query:(body:any) =>{
                return {
                    url:UserRoutes.USER_OTP_VERIFY,
                    method:"POST",
                    body
                };    
            },
        }),


        //Invoice save
        invoiceCreate:builder.mutation({
            query:(body:any) =>{
                return {
                    url:InvoiceRoutes.INVOICE_CREATE,
                    method:"POST",
                    body,
                };    
            },
        }),
        //Invoice update
        invoiceUpdate:builder.mutation({
            query:(body:any) =>{
                return {
                    url:InvoiceRoutes.INVOICE_UPDATE,
                    method:"PUT",
                    body,
                };    
            },
        }),
        //Invoice delete one by one
        invoiceDeleteOne:builder.mutation({
            query:(body:any) =>{
                return {
                    url:InvoiceRoutes.INVOICE_DELETE_ONE,
                    method:"DELETE",
                    body,
                };    
            },
        }),
        //Invoice delete all
        invoiceDeleteAll:builder.mutation({
            query:(body:any) =>{
                return {
                    url:InvoiceRoutes.INVOICE_DELETE_ALL,
                    method:"DELETE",
                    body,
                };    
            },
        }),
        //Invoice select one
        invoiceGetOne:builder.mutation({
            query:(body:any) =>{
                return {
                    url:InvoiceRoutes.INVOICE_GET_ONE,
                    method:"GET",
                    body,
                };    
            },
        }),
        //Invoice select all
        invoiceGetAll:builder.mutation({
            query:(body:any) =>{
                return {
                    url:InvoiceRoutes.INVOICE_GET_ALL,
                    method:"GET",
                    body,
                };    
            },
        }),
    }),
});

export const {
    useUserLoginMutation,
    useUserUpdateMutation,
    useUserForgetPasswordMutation,
    useUserOtpSendMutation,
    useUserOtpVerifyMutation,

    useInvoiceCreateMutation,
    useInvoiceDeleteAllMutation,
    useInvoiceDeleteOneMutation,
    useInvoiceGetAllMutation,
    useInvoiceGetOneMutation,
    useInvoiceUpdateMutation,
} = apiSlice;

