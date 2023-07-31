import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart,removeItem } from '../helper/cartSlice'


const Cart = () => {



  //subscribing to store
  const cartData=useSelector(store=>store.cart.items);

  //dispatching clearCart action
  const dispatch=useDispatch()
  const handleClearCart=()=>{
    dispatch(clearCart())
  }

   //dispatching removeItem action
  //  const handleRemoveItem=()=>{
  //     dispatch(removeItem());
  //  }
  
  return (
    <div className='flex flex-col m-10 items-center'>
   
    {cartData.map((item)=>{
      return(
        // {...item} => this means we are passing all properties of cartData one by one as a prop to CartItem component
        <CartItem key={item.id} {...item}/> 
      )
    }) }


    <div className='w-96 flex justify-between'>
    <div className='bg-orange-400 py-1 px-2 rounded-lg cursor-pointer  hover:scale-95 transition-transform duration-200 text-center tracking-wide text-lg  font-semibold' onClick={()=>handleClearCart()}>Clear Cart</div>
    <div className='bg-orange-400 py-1 px-2 rounded-lg cursor-pointer  hover:scale-95 transition-transform duration-200 text-center tracking-wide text-lg  font-semibold'>Next</div>
    </div>
    </div>
  )
}

export default Cart
