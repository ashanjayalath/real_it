import { createSlice , PayloadAction , current } from "@reduxjs/toolkit";
import {RootState} from "../store";

const initialState = {
    user: {
        image: {
            url:"",
            fname:"",
            role:"",
        }
    } as any,
    accessToken:""
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUserInfo:(state,action)=>{
            const { user , token } = action.payload
            state.user = user
            state.accessToken = token
            const setToken = JSON.stringify(state.accessToken);
            localStorage.setItem("accessToken",setToken);
        },
        logOut:(state,action)=>{
            state.user = null
            state.accessToken = null
            localStorage.setItem("accessToken","");
        },
        setNewAccessToken:(state,action)=>{
            state.accessToken = action.payload
            const setToken = JSON.stringify(state.accessToken)
            localStorage.setItem("accessToken",setToken);
        }

    }
})

// export const selectAuth = (state:RootState) => state.userInfo;
export const selectCurrentUser = (state:RootState) => state.userInfo.user;
export const selectCurrentToken = (state:RootState) => state.userInfo.accessToken;

export const { setUserInfo , logOut , setNewAccessToken } = authSlice.actions;
export default authSlice.reducer;


