import { createContext, useReducer } from "react";
import {countReducer } from "./reducers/countReducer";
import combineReducers from "./combineReducers";
import { userReducer } from "./reducers/userReducer";


export const StoreContext = createContext()

const rootreducer=combineReducers(
  {count:countReducer,user:userReducer})

function StoreProvider({children}) {
  const [state,dispatch]=useReducer(rootreducer,{count: {count:0},user:{name:null}})
  const useSelector=(key)=>{
    return state[key]
  }
  return (
    <StoreContext.Provider value={{ useSelector, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
