import { Provider } from "react-redux"
import Card_Detail from '../Card_Detail'
import { StaticRouter } from "react-router-dom/server"
import {render, waitFor, fireEvent} from '@testing-library/react'
import store from "../../helper/store"
import MENU_DATA from '../../mocks/RestaurantMocks'
import "@testing-library/jest-dom"
import {Header} from '../Header'

global.fetch=jest.fn(()=>{
  return Promise.resolve({
    json : ()=>{
      return Promise.resolve(MENU_DATA)
    }
  })
})


test("Add items to cart",async()=>{
    const body=render(
        <StaticRouter>
        <Provider store={store}> 
            <Header/>
          <Card_Detail/>
        </Provider>
        </StaticRouter>
        )
  
        await waitFor(()=>expect(body.getByTestId("menu")));
   const addBtn=body.getAllByTestId("add-btn")


    fireEvent.click(addBtn[0])
   
    const cart=body.getByTestId("cart")  
  
    expect(cart.innerHTML).toBe("Cart (1)")
  
  })