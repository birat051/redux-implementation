import { UserActionTypes } from "../actions"



export const intialUserState={
    name: null
}



export const userReducer=(state=intialUserState,action)=>{
    switch (action.type)
    {
        case UserActionTypes.ADD:
            return {
                ...state,
                name:action.payload
            }
        default:
            return state
    }
} 

