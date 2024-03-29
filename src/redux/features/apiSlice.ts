import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../auth/authSlice'
import {MAIN_URL} from '../../ApiLinks/allLinks'



const baseQuery = fetchBaseQuery({
    baseUrl: MAIN_URL ,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        // @ts-ignore
        const token = getState().auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 401) {
        console.log('sending refresh token')
        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/admin/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            // @ts-ignore
            const user = api.getState().auth.user
            // store the new token 
            api.dispatch(setCredentials({user,accsessToken:refreshResult.data }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut)
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})