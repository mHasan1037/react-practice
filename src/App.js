import React, { useEffect } from 'react'
import { stockOptions, fetchData } from './fetchData'

const App = () => {
  

  const handleData = async() =>{
    const stockDataa = await fetchData('https://twelve-data1.p.rapidapi.com/cryptocurrencies', stockOptions)

    console.log(stockDataa)
  }
  return (
    <div onClick={handleData}>App</div>
  )
}

export default App







