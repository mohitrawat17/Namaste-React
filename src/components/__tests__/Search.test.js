import { Provider } from "react-redux"
import Body from '../Body'
import { StaticRouter } from "react-router-dom/server"
import {render, waitFor, fireEvent} from '@testing-library/react'
import store from "../../helper/store"
import RESTAURANT from '../../mocks/RestaurantMocks'
import "@testing-library/jest-dom"


global.fetch=jest.fn(()=>{
  return Promise.resolve({
    json : ()=>{
     return Promise.resolve(RESTAURANT)
    }
  })
})

//------------------------------------------------------------------------------------------------
test("Search results on homepage",async()=>{
    const body=render(
        <StaticRouter>
        <Provider store={store}> 

          <Body/>
        </Provider>
        </StaticRouter>
        );
        await waitFor(()=>expect(body.getByTestId("search")));
        const restaurant=body.getByTestId("res-list")  

  expect(restaurant.children.length).toBe(20)
 })


//------------------------------------------------------------------------------------------------
test("Shimmer should load on homepage",()=>{
  const body=render(
      <StaticRouter>
      <Provider store={store}> 

        <Body/>
      </Provider>
      </StaticRouter>
      )

  const shimmer=body.getByTestId("shimmer")  
  // console.log(shimmer.children);  
  expect(shimmer.children.length).toBe(15)
})


//------------------------------------------------------------------------------------------------
test("search for string(food) on homepage",async()=>{
  const body=render(
      <StaticRouter>
      <Provider store={store}> 

        <Body/>
      </Provider>
      </StaticRouter>
      )

      await waitFor(()=>expect(body.getByTestId("input")));
 const input=body.getByTestId("input")
fireEvent.change(input,{target:{
  value:"food",
}})

const search=body.getByTestId("search")
  fireEvent.click(search)
 
  const restaurant=body.getByTestId("res-listt")  

  expect(restaurant.children).toBe(1)

})