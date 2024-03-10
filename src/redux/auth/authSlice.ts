import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:[] as any,
    accessToken:""
}


const authSlice = createSlice({
    name:'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
            const setToken = JSON.stringify(state.token);
            localStorage.setItem("accessToken",setToken);
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
            localStorage.setItem("accessToken","");
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: { auth: { user: any } }) => state.auth.user
export const selectCurrentToken = (state: { auth: { token: any } }) => state.auth.token