import { Outlet } from "react-router-dom"
import ProfileClass from "./ProfileClass"
import Profile from "./Profile"


const About = () => {
  return (
    <>
    <div>
      about us page
    </div>
    <Outlet/>
    <ProfileClass name={"mohit"}/>
    </>
  )
}

export default About
