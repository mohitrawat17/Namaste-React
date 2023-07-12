import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';



const filterRes = (stateVar, restaurants) => {
  return restaurants.filter((restaurant) =>
   restaurant?.data?.name?.toLowerCase()?.includes(stateVar.toLowerCase())    // in JS Roti(actual data) ===rOti(data we searched in search box) returns false. So, we convert both into lower case roti===roti returns true 
  )
}


const Body = () => {


  const [allRestaurants, setAllRestaurants] = useState([]) //for all restaurants available
  const [stateVar, setStateVar] = useState("");  // for the working of search input box
  const [filterRestaurants, setFilterRestaurants] = useState([]) // for filtering restaurants

  useEffect(() => {
    //using use effect to fetch side effects
    fetchRestaurants();
  }, [])


  // fetching real time swiggy data from swiggy's API
  async function fetchRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING");
    // console.log(data);
    const json = await data.json();
    // console.log(json);

    //updating restaurant cards using its state varirable
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }



  if(!allRestaurants) return null;

  

  return allRestaurants.length == 0 ? (<Shimmer />) :
    (
      <div className="body">
        <div className="search-bar">
          <input type="text" placeholder="Search" value={stateVar} onChange={(e) => { setStateVar(e.target.value) }}></input>
          <SearchIcon style={{cursor:"pointer", fontSize:"28px"}} onClick={() => {
            //filter restaurant data
            const data = filterRes(stateVar, allRestaurants);
            // changing state
            setFilterRestaurants(data)
          }}/>
        </div>
        <div className="card-list">
        {
          //logic for no restaurant found 
            filterRestaurants.length == 0 ?                  //condition : if filtered data length is equal to 0 or not eual to 0 then do this,
             <h1>No data Found</h1>                          // if length actually 0
             : filterRestaurants.map((restaurant) => {       //if length not equal to 0
              return (
              <Link to={`restaurant/${restaurant.data.id}` } key={restaurant.data.id}  style={{ textDecoration : "none", color:"black"}}>  <Card {...restaurant.data} /></Link>
              )
            })
          }

          <div>


          </div>

        </div>
      </div>
    )
}

export default Body;