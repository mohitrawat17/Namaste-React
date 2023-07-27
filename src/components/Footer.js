import { useContext } from "react";
import Context from "../helper/Context";

const Footer = () => {
  const {user}=useContext(Context)
    return (
      <div className="flex justify-center flex-col items-center">
      <h1 className="font-bold">developed by {user.username}</h1>
      <h2 className="font-semibold">contact {user.gmail} for more info</h2>
      </div>
    )
  }



  export default Footer;