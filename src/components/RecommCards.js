import React from 'react'
import { IMG_CARD } from "../utils";
const RecommCards = ({name,price,description,imageId}) => {
  return !imageId ?(
    (
      <div className="flex justify-between m-3 py-2">
          <div className="detail">
            <h2 className='font-bold'>{name}</h2>
            <p className='font-light'>{description}</p>
            <h3 className='font-semibold'>₹ {price/100}</h3>
            
          </div>
          
          <div >
            <img className="rounded-2xl" style={{width:"160px",height:"160px",backgroundColor:"grey"}} alt='no image'></img>
          </div>
          </div>
    )
  ):(
    <div className="flex justify-between m-3 py-2">
        <div className="w-7/12">
          <h2 className='font-bold'>{name}</h2>
          <p className='font-light'>{description}</p>
          <h3 className='font-semibold'>₹ {price/100}</h3>
          
        </div>

        <div >
          <img className="rounded-2xl" src={IMG_CARD+imageId} style={{width:"160px"}}/>
        </div>
        </div>
  )
}

export default RecommCards
