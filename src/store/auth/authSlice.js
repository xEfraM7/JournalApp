import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        //estados del login 'checking', 'authenticated','not-autheticated'
        status:'not-autheticated', 
        uid: null,
        email:null,
        displayName:null,
        photoURL:null,
        errorMessage:null,
    },
   reducers: {
        login: (state,{payload}) => {
            state.status = 'autheticated';
            state.uid= payload.uid;
            state.email=payload.email;
            state.displayName=payload.displayName;
            state.photoURL=payload.photoURL;
            state.errorMessage=null;
        },
        logout: ( state,{payload} ) => { 
            state.status = 'not-autheticated';
            state.uid= null;
            state.email=null;
            state.displayName=null;
            state.photoURL=null;
            state.errorMessage=payload
            //de esta manera da algun error
            // payload?.errorMessage;
        },
        checkingCredentials: ( state ) => {
            state.status= 'checking'
        },
    }
});
export const { login,logout,checkingCredentials } = authSlice.actions;

