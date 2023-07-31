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
         removeSpecificItem:(state,action)=>{
            state.items=state.items.filter((item)=>{
              return action.payload != item.id
            })
         },
        //to remove all items from the cart
        clearCart:(state)=>{
            state.items=[];
        }
    }
})

export const{removeSpecificItem,addItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer;