import { useContext, useState } from 'react'
import './App.css'
import { StoreContext } from './redux/store'
import { addUser, decrementAction, incrementAction } from './redux/actions'

function App() {
  const {useSelector,dispatch} = useContext(StoreContext)
  const countState=useSelector('count')
  const userState=useSelector('user')
  const [name,setname]=useState('')
  const addNumber=()=>{
    dispatch(incrementAction())
  }
  const reduceNumber=()=>{
    dispatch(decrementAction())
  }
  const changeName=(e)=>{
    setname(e.target.value)
  }
  const onFormSubmit=(e)=>{
    e.preventDefault()
    dispatch(addUser(name))
    setname('')
  }
  return (
    <div className='app-container'>
     {countState && <h1>{countState.count}</h1>} 
     <div>
      <button onClick={addNumber}>Add</button>
      <button onClick={reduceNumber}>Substract</button>
     </div>
     <h1>{userState.name??'No name'}</h1>
     <form onSubmit={onFormSubmit}>
      <input type='text' value={name} onChange={changeName}/>
      <button type='submit'>Add</button>
     </form>
    </div>
  )
}

export default App
