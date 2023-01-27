import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import HomeContainer from '../Container/Home/HomeContainer'
import AboutContainer from '../Container/About/AboutContainer'
import MoviesContainer from '../Container/Movies/MoviesContainer'
import TVSeriesContainer from '../Container/TVSeries/TVSeriesContainer'
import SearchContainer from '../Container/Search/SearchContainer'
import DetailsContainer from '../Container/Details/DetailsContainer'
import ContactContainer from '../Container/Contact/ContactContainer'


import FooterComponents from '../Components/Footer/FooterComponents'
import HeaderComponents from '../Components/Header/HeaderComponents'



const RouterComponent = () => {
  return (
    <>
       <BrowserRouter>
          <HeaderComponents />
           <Routes>
               <Route path="/" element={<HomeContainer /> } />
               <Route path="/about" element={<AboutContainer /> } />
               <Route path="/movies" element={<MoviesContainer /> } />
               <Route path="/series" element={<TVSeriesContainer /> } />
               <Route path="/search" element={<SearchContainer /> } />
               <Route path="/contact" element={<ContactContainer /> } />
               <Route path="/details/:movieid/:mediatype" element={<DetailsContainer /> } />
           </Routes>
          <FooterComponents />
       </BrowserRouter>
    </>
  )
}

export default RouterComponent