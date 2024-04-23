import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:'auth',
    initialState: { user: [], token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: { auth: { user: any } }) => state.auth.user
export const selectCurrentToken = (state: { auth: { token: any } }) => state.auth.token