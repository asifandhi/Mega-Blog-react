import  { configureStore } from "@reduxjs/toolkit"
import authSliice from "./authSlice";

const store = configureStore({
    reducer:{
     auth :authSliice    
    }
})

export default store;