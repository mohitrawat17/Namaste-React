import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../utils";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [recomm, setRecomm] = useState(null);


 


  //fetching data
  useEffect(() => {
    restrauData();
  }, []);

  async function restrauData() {
    // restaurant card data
    const data = await fetch(RESTAURANT_MENU_API + resId);
    
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);

    //recommended items data
    setRecomm(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  }

   // sending data to component
  return [restaurant, recomm];
};

export default useRestaurant;
