import React from "react"
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About"
import Error from "./components/Error";
import Contact from "./components/Contact";
import Card_Detail from "./components/Card_Detail";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path:"/",
        element:<Body/>
      },
      {
        path:'restaurant/:resId',
        element:<Card_Detail/>,
      }
    ]
  }
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)