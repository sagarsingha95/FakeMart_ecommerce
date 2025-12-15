import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadUsers =createAsyncThunk(
    '/users/loadUsers',
    async () =>{
        const res = await fetch('https://fakestoreapi.com/users');
        const data = await res.json();
        return data
    }
)

const userSlice = createSlice({
    name:'users',
    initialState:{
        users:[],
        isLoggedIn:false,
        currentuser:null,
        loading:false,
        error:null,
        currentuserId:null
    },
    reducers :{
        setCurrentUser:(state,action) =>{
            state.currentuser = action.payload;
            state.isLoggedIn = true;
        },
        logout:(state) =>{
            state.currentuser = null;
            state.isLoggedIn = false; 
            state.currentuserId = null;  
        },
        setCurrentUserId:(state,action) =>{
            state.currentuserId = action.payload;
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(loadUsers.pending,(state)=>{
            state.loading = true
        })
        .addCase(loadUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(loadUsers.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})
export const { setCurrentUser,logout,isLoggedIn,setCurrentUserId } = userSlice.actions;
export default userSlice.reducer;