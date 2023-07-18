import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CARD } from "../utils";
import Shimmer from "./Shimmer";
import RecommCards from "./RecommCards";


const Card_Detail=()=>{
    const params=useParams();
    const {resId}=params;
    const[restaurant,setRestaurant]=useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const[recomm,setRecomm]=useState(null);
    



    useEffect(()=>{
      restrauData();
    },[])


      
     async function restrauData(){ 

      // restaurant card data
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&submitAction=ENTER`);
        const json=await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        



        //recommended items data
         setRecomm(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
         setIsLoaded(true);
     }
      
     console.log(recomm);

    
    



     
    return !isLoaded ?(
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