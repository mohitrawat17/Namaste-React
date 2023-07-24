import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../helper/useOnline";
import InstaMart from "./InstaMart";

const Title = () => {
  return (
    <Link to="/">
      {" "}
      <img
        alt="logo"
        style={{ width: "88px" }}
        src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
      />
    </Link>
  );
};

export const Header = () => {
  const isOnline=useOnline();
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="flex h-25 justify-between shadow-lg">
      <Title />
      <div >
        <ul className="flex py-8 ml-80 ">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <li className="px-6 hover:text-green-400">Home</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li className="px-6 hover:text-green-400">About</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className="px-6 hover:text-green-400">Contact</li>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
          <li className="px-6 hover:text-green-400">Cart</li>
          </Link>
        </ul>
      </div>

      {/* to show login or not */}
      <h3>{isOnline? "🟢": '🔴' }</h3>
      <div className="loginBtn">
        {" "}
        {loggedIn ? (
          <button onClick={() => setLoggedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Logout</button>
        )}
      </div>
    </div>
  );
};









// const useMyState=(init_val)=>{
//   let state_var=init_val;

//   function setState_var(updated_val){
//     state_var=updated_val;
//   }

//   return [state_var,setState_var];
// }

// export default useMyState;