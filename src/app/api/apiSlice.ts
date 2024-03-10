import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MAIN_URL , UserRoutes } from "ApiLinks/allLinks";


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

    }),
});

export const {
    useUserLoginMutation,
    useUserUpdateMutation,
    useUserForgetPasswordMutation,
    useUserOtpSendMutation,
    useUserOtpVerifyMutation
} = apiSlice;

