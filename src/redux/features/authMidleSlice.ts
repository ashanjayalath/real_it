import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from './auth/authSlice'
import {MAIN_URL,UserRoutes} from '../../ApiLinks/allLinks'


const baseQuery = fetchBaseQuery({
    baseUrl: MAIN_URL ,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        // @ts-ignore
        const token = getState().auth.token;

        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        // if (!headers.has("Content-Type")) {
        //     headers.set("Content-Type", "application/json");
        // }
        return headers
    }
})

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions:any) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 401 ) {
        // send refresh token to get new access token 
        const refreshResult = await baseQuery(UserRoutes.USER_REFRESH_TOKEN, api, extraOptions)

        if (refreshResult?.data) {
            // @ts-ignore
            const user = api.getState().auth.user
            // store the new token 
            api.dispatch(setCredentials({user,token:refreshResult.data.token }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } else {
            // api.dispatch(logOut())
        }
    }
    return result
}



export const authMidleSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})

