import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "Auth",
    initialState:{
        isAuth: false,
        user: null,
        layout: {
            theme:"light"
        },
    },
    reducers:{
        login:(state,action)=>{
            state.user = action?.payload
            state.isAuth = true;
        },
        logout:(state)=>{
            state.user = null;
            state.isAuth = false;
        },
        reset:(state)=>{
            state.user = null;
            state.isAuth = false;
        },
       
        manageLayout:(state,action)=>{
            state.layout = action?.payload
        },
    },
})

export default AuthSlice.reducer
export const {login,logout,reset,manageLayout} = AuthSlice.actions