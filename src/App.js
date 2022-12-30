import Home from './Components/Home'
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import Blogs from './Components/Blogs'
import Error from './Components/Error'
import Navbar from './Components/Navbar'
import Blog from './Components/Blog'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/blogs" element={ <Blogs />} />
            <Route path="/blogs/:title" element={<Blog /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App