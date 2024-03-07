import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MAIN_URL , LOGIN_URL , REFRESH_TOKEN } from "ApiLinks/allLins";


export const AuthApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:MAIN_URL,
        credentials:"include",
    }),
    endpoints:(builder) => ({
        //log in user Query
        loginUser:builder.mutation({
            query:(body: { email:string; password:string}) =>{
                return {
                    url:LOGIN_URL,
                    method:"POST",
                    body,
                };    
            },
        }),
        refreshToken:builder.mutation({
            query:() =>{
                return {
                    url:REFRESH_TOKEN,
                    method:"GET"
                };    
            },
        })

    }),
});

export const {useLoginUserMutation} = AuthApi;

