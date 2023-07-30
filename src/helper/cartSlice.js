import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',                                                                                            //1
    initialState:{                                                                                          //2
        items:[]
    },
    //actions
    reducers:{                                                                                              //3 
        //to add item in cart
        addItem:(state,action)=>{
          state.items.push(action.payload)
        },

        // to remove item from cart
        removeItem:(state,action)=>{
          state.items.pop();
        },

        //to remove all items from the cart
        clearCart:(state)=>{
            state.items=[];
        }
    }
})

export const{addItem, removeItem, clearCart} =cartSlice.actions;
export default cartSlice.reducer;