const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./cartSlice"
const store=configureStore({
    //slices here
     reducer:{
        cart:cartSlice,
     },
})
export default store;