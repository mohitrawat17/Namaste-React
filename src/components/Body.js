import Card from "./Card";
import { restaurantList } from "../utils";
import { useEffect, useState } from "react";


const filterRes=(stateVar,restaurants)=>{
  return restaurants.filter(
    (restaurant)=>restaurant.data.name.includes(stateVar)
   )
}


const Body = () => {

  const [stateVar,setStateVar]=useState("");
  const [restaurants,setRestaurants]=useState([])

  useEffect(()=>{
    //using use effect to fetch side effects
    fetchRestaurants();
  },[])


  // fetching real time swiggy data from swiggy's API
  async function fetchRestaurants(){
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    // console.log(json);

    //updating restaurant cards using its state varirable
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }


    return (
      <>
      <div className="search-bar">
        <input type="text" placeholder="Search" value={stateVar} onChange={(e)=>{setStateVar(e.target.value)}}></input>
        <button onClick={()=>{
             //filter restaurant data
             const data=filterRes(stateVar,restaurants);
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