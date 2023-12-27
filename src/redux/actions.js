export const CountActionTypes=
{
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

export const UserActionTypes=
{
    ADD: 'ADD'
}

export const incrementAction=()=>{
    return {
        type: CountActionTypes.INCREMENT
    }
}

export const decrementAction=()=>{
    return {
        type: CountActionTypes.DECREMENT
    }
}

export const addUser=(payload)=>{
    return  {
        type: UserActionTypes.ADD,
        payload
    }
}