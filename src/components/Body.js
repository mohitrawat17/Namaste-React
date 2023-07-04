import Card from "./Card";
import { restaurantList } from "../utils";
import { useState } from "react";


const filterRes=(stateVar,restaurants)=>{
  return restaurants.filter(
    (restaurant)=>restaurant.data.name.includes(stateVar)
   )
}
const Body = () => {
  const [stateVar,setStateVar]=useState("");
  const [restaurants,setRestaurants]=useState(restaurantList)
    return (
      <>
      <div className="search-bar">
        <input type="text" placeholder="Search" value={stateVar} onChange={(e)=>{setStateVar(e.target.value)}}></input>
        <button onClick={()=>{
             //filter restaurant data
             const data=filterRes(stateVar,restaurants);
             console.log(data)
             // changing state
             setRestaurants(data)
        }}>Search</button>
      </div>
      <div className="card-list">
        {
          restaurants.map((restaurant) => {
            return (
              <Card {...restaurant.data} key={restaurant.data.id} />
            )
          })
        }
  
  
      </div>
      </>
    )
  }

  export default Body;