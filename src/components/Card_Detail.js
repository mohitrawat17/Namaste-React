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
      <div className="m-5">

  
        <div className="flex justify-between">
        <div>
        <h2 className="font-bold text-xl">{restaurant?.name}</h2>
        <h3 className="font-semibold">{restaurant?.city}</h3>
        </div>
        <div className="border-2 p-1">
        <h3>{restaurant?.costForTwoMessage}</h3>  
        <h3 className="border-t-2 text-center text-green-500">{restaurant?.avgRating} ☆</h3>
        </div>
        </div>  
        <div className="text-center mt-4 text-2xl font-semibold text-orange-400">
          What's New ?
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