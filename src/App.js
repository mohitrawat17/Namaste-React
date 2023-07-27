import React, { lazy, Suspense, useState } from "react"
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About"
import Error from "./components/Error";
import Card_Detail from "./components/Card_Detail";
import Profile from "./components/Profile"
import Cart from "./components/Cart";
import Help from './components/Help';
import Context from "./helper/Context";

//lazy loading => bundles the About component code in a different js file and only loads it when needed
const About = lazy(() => import('./components/About'))

const Layout = () => {


  const [dynamicUser, setDynamicUser] = useState({
    username: "Mohit",
    gmail: "mr6114671@gmail.com"
  })


  return (
    //overriding default context value
    <Context.Provider
      value={{
        user: dynamicUser,
        setDynamicUser:setDynamicUser
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Context.Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element:
          <Suspense fallback={<h1>loading</h1>}>
            <About />
          </Suspense>,
        children: [
          {
            path: "/about/profile",
            element: <Profile />
          }
        ]
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: 'restaurant/:resId',
        element: <Card_Detail />,
      }
    ]
  }

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)