import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

const CounterView = () => {
    const counts = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Count: {counts}</h2>
        <button
           onClick={()=>{
             dispatch(increment())
           }}
        >Increase</button>
        <button
           onClick={()=>{
             dispatch(decrement())
           }}
        >Decrease</button>
    </div>
  )
}

export default CounterView