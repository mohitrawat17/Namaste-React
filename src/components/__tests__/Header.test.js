import {  render } from "@testing-library/react"
import {Header} from "../Header"
import { Provider } from "react-redux"
import store from '../../helper/store'
import {StaticRouter} from 'react-router-dom/server'
import { screen } from '@testing-library/react';


test("test for loading logo on rendering header component",()=>{
    const headerTest=render(
    <StaticRouter>
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    )
    const logo=screen.getByTestId("logo")
    // console.log(logo);
    expect(logo.src).toBe("https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg")
})