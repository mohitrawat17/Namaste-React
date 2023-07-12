import { useState } from "react";
import { Link } from "react-router-dom";


const Title = () => {
  return (
   <Link to="/"> <img
      alt="logo"
      style={{ width: "88px" }}
      src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
    /></Link>
  );
};





export const Header=()=>{

  const [loggedIn,setLoggedIn]=useState(false)
  return (
      <div className="header">
     <Title/>
     <div className="nav-items">
         <ul>
          <Link to="/" style={{ textDecoration : "none"}}>  <li>Home</li></Link>
          <Link to="/about" style={{ textDecoration : "none"}}><li>About</li></Link>
          <Link to="/contact" style={{ textDecoration : "none"}}><li>Contact</li></Link>
          <li>Cart</li>
         </ul>
     </div>
     <div className="loginBtn">     {
          loggedIn ? <button onClick={()=>setLoggedIn(false)}>Login</button> : <button onClick={()=>setLoggedIn(true)}>Logout</button>
     }
     </div>

     </div>
  );
}

