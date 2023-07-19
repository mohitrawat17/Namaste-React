import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CARD } from "../utils";
import Shimmer from "./Shimmer";
import RecommCards from "./RecommCards";
import useRestaurant from "../helper/useRestaurant";


const Card_Detail=()=>{
    const params=useParams();
    const {resId}=params;
  

    const [restaurant,recomm]=useRestaurant(resId);


// console.log(recomm);
     
    return !(restaurant || recomm) ?(
    <Shimmer/>
    )
    :(
      <div>

  
        <div className="restaurant-card">
        <img src={IMG_CARD+restaurant?.cloudinaryImageId} style={{ width: "200px" }}/>
       
        <h2>{restaurant?.name}</h2>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>  
        <h3>{restaurant?.avgRating} ☆</h3>
        </div>  

        {
          recomm.map((card)=>{
              return(
                <RecommCards key={card?.card?.info?.id} {...card?.card?.info}/>
              )
          })
        }




        </div>
    )           
}

export default Card_Detail