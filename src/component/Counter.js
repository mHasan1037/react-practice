import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterActions'

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
     
    const handleIncrement = () =>{
        dispatch(incrementCounter())
    }

    const handleReset = () =>{
        dispatch(resetCounter())
    }

    const handleDecrement = () =>{
        dispatch(decrementCounter())
    }

  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={handleIncrement}>Click</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter