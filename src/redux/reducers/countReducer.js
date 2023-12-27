import { CountActionTypes } from "../actions"

export const initialCountState={
    count: 0
}

export const countReducer=(state=initialCountState,action)=>{
    let count=state.count
    switch (action.type)
    {
        case CountActionTypes.INCREMENT:
            return {
                ...state,
                count:++count
            }
        case CountActionTypes.DECREMENT:
            return {
                ...state,
                count:--count
            }
        default:
            return state
    }
} 

