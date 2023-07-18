import React from 'react'
import { IMG_CARD } from "../utils";
const RecommCards = ({name,price,description,imageId}) => {
  return (
    <div className="recomm-card">
        <div className="detail">
          <h2>{name}</h2>
          <h3>₹ {price}</h3>
          <p>{description}</p>
        </div>
        
        <div className="recomm-image">
          <img src={IMG_CARD+imageId} style={{width:"160px"}}/>
        </div>
        </div>
  )
}

export default RecommCards
