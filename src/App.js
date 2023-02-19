import React, { useEffect, useState, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New'




const App = () => {

  return (
    <div>
      <BrowserRouter>
         <Routes>
             <Route path="/">
                <Route index element={ <Home /> } />
                <Route path="login" element={ <Login /> } />
                <Route path="users">
                    <Route index element={ <List /> } />
                    <Route path=":userId" element={ <Single /> } />
                    <Route path="new" element={ <New /> } />
                </Route>
                <Route path="products">
                    <Route index element={ <List /> } />
                    <Route path=":productId" element={ <Single /> } />
                    <Route path="new" element={ <New /> } />
                </Route>
             </Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App