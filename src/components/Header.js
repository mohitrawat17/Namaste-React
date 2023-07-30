import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../helper/useOnline";
import Context from "../helper/Context";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Link to="/">
      {" "}
      <img
        alt="logo"
        className="w-24 sm:w-16 md:w-20"
        src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
      />
    </Link>
  );
};

export const Header = () => {
  const isOnline=useOnline();
  const [loggedIn, setLoggedIn] = useState(false);
  const {user}=useContext(Context)
  // console.log(user.name);


  // subscribing to store
  const cartItems=useSelector(store=>store.cart.items);
  console.log(cartItems);

  return (

    
    <div className="flex h-25 justify-between shadow-lg">
      <Title />
      <div >
        <ul className="flex py-8 ml-80 ">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <li className="px-6 hover:text-orange-500">Home</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li className="px-6 hover:text-orange-500">About</li>
          </Link>
          <Link to="/help" style={{ textDecoration: "none" }}>
            <li className="px-6 hover:text-orange-500">Help</li>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
          <li className="px-6 hover:text-orange-500">Cart ({cartItems.length})</li>
          </Link>
        </ul>
      </div>

      {/* to show login or not */}
      <h3 className="my-auto ml-60">{isOnline? "🟢": '🔴' }</h3>
      <h3 className="my-auto font-bold">{user.username}</h3>
     
        {loggedIn ? (
          <button onClick={() => setLoggedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Logout</button>
        )}
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