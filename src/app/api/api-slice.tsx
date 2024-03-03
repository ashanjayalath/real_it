// import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { MAIN_URL } from "ApiLinks/allLins";
// import { setCredentials , logOut } from "redux/features/auth-slice";

// const baseQuery = fetchBaseQuery({
//     baseUrl:MAIN_URL,
//     credentials:'include',
//     prepareHeaders:(headers,{getState})=>{
//         const token = getState().auth.token
//         if(token){
//             headers.set("authorization" , `Bearer ${token}`)
//         }
//         return headers
//     }
// })

// const baseQueryWithReauth = async (args: any, api: any ,extraOption: any) =>{
//     let result = await baseQuery(args,api,extraOption)

//     if(result?.error?.originalStatus === 403)
// }