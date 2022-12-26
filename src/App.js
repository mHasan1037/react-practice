// import React, { useState, useEffect, useReducer } from 'react';
// import './App.css'

// const initialState = 0;

// const reducer = (state, action) =>{
//   if(action.type === 'INCREMENT'){
//     return state + 1
//   }
//   if(action.type === 'DECREMENT'){
//     return state - 1
//   }
//    return state;
// }

// function App() {

//   const [state, dispatch] =  useReducer(reducer, initialState)

//   return (
//     <div>
//         <p>{state}</p>
//         <button onClick={()=> dispatch({type: "INCREMENT"})}>Inc</button>
//         <button onClick={()=> dispatch({type: "DECREMENT"})}>Dec</button>
//     </div>
//   );
// }

// export default App;


import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) =>{
  if(action.type === 'increase'){
    return state + 1
  }
  if(action.type === 'decrease'){
    return state - 1
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=> dispatch({type: 'increase'})}>Inc</button>
      <button onClick={()=> dispatch({type: 'decrease'})}>Dec</button>
    </div>
  )
}

export default App
