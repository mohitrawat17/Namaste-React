import { useEffect, useState } from "react";

const useOnline = () => {
  // state variable for user is online= true/false
  const [isOnline, setIsOnline] = useState(true);

  //to render once we are using useEffect
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    //removing event listeners (cleaning code)
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  //    console.log("useonline");

  return isOnline;
};

export default useOnline;