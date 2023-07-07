import { useState } from "react";

const Title = () => {
  return (
    <img
      alt="logo"
      style={{ width: "80px" }}
      src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
    />
  );
};





export const Header=()=>{

  const [loggedIn,setLoggedIn]=useState(false)
  return (
      <div className="header">
     <Title/>
     <div className="nav-items">
         <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
         </ul>
     </div>

     {
          loggedIn ? <button onClick={()=>setLoggedIn(false)}>Login</button> : <button onClick={()=>setLoggedIn(true)}>Logout</button>
     }
     </div>
  );
}

