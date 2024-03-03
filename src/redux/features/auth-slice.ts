import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MAIN_URL ,LOGIN_URL } from "ApiLinks/allLins";


const initialState = {
    user:{},
    token:"",
    loading:false
}

const loginUser = createAsyncThunk<any>('auth',async(body)=>{
    let res = await fetch('http://localhost:3008/api/admin/login',{
        method:'POST',
        body: JSON.stringify(body),
        credentials: 'include',
        headers:{
            'content-Type' : 'application/json',
            Authorization : localStorage.getItem('token')
        },
        // body:JSON.stringify(body)
    })
return await res.json();
})




const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        addToken:(state,action)=>{
            state.token = localStorage.getItem('token');
        },
        addUser:(state,action)=>{
            state.token = localStorage.getItem('user')
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(loginUser.fulfilled,(state,{payload:{user,token}})=>{
            state.loading = false
            state.token = token;
            state.user = user
            localStorage.setItem("token",JSON.stringify(token))
            localStorage.setItem("user",JSON.stringify(user))
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = true
        });
    }
})



export const {addToken , addUser} = authSlice.actions;
export {loginUser};
export default authSlice.reducer
