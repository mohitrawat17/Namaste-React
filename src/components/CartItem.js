import React from 'react'
import { IMG_CARD } from "../utils";
const CartItem = ({defaultPrice,name,price,description,imageId}) => {
  return(
    <div className="w-96 p-2 bg-slate-100 mb-7 shadow-md">
          <img className="mx-auto" src={IMG_CARD+imageId} style={{width:"160px"}}/>
           <h2 className='font-bold'>{name}</h2>
          <p className='font-light'>{description}</p>
          {!price ? <h3 className='font-semibold'>₹ {defaultPrice/100}</h3> : <h3 className='font-semibold'>₹ {price/100}</h3>}
        
        </div>
  )
}

export default CartItem;
