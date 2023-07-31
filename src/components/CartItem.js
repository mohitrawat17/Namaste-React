import React from 'react'
import { IMG_CARD } from "../utils";
import { useDispatch } from 'react-redux';
import { removeSpecificItem } from '../helper/cartSlice';

const CartItem = ({id,defaultPrice,name,price,description,imageId}) => {
  const dispatch=useDispatch();
  const removeItem=()=>{
     dispatch(removeSpecificItem(id));
  }

  return(
    <div className="w-96 p-2 bg-slate-100 mb-7 shadow-md">
          <img className="mx-auto" src={IMG_CARD+imageId} style={{width:"160px"}}/>
           <h2 className='font-bold'>{name}</h2>
          <p className='font-light'>{description}</p>
          {!price ? <h3 className='font-semibold'>₹ {defaultPrice/100}</h3> : <h3 className='font-semibold'>₹ {price/100}</h3>}
          
         <div className=' w-20 mt-2 bg-orange-400 py-1 px-2 rounded-lg cursor-pointer  hover:scale-95 transition-transform duration-200 text-center tracking-wide text-lg  font-semibold' onClick={()=>removeItem()}>Remove</div>
        </div>
  )
}

export default CartItem;
