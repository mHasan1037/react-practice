import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios'

import CardMovies from '../../Components/CardMovies/CardMovies'
import PaginationComponent from '../../Components/Pagination/PaginationContainer'

const HomeContainer = () => {
  const [content, setContent] =  useState([])
  const [pageno, setPageno] = useState(1)
  const [paginationNo, setPaginationNo] = useState(0)

  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE

  const GetDataTrending = async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
    setContent(data.results)
    setPaginationNo(data.total_pages)
    console.log("data", data)
  }

  useEffect(()=>{
    GetDataTrending()
  }, [pageno])

  const handleClick = (number) =>{
    setPageno(number)
  }

  useEffect(()=>{
      GetDataTrending()
  }, [])

  return (
    <main className='homePage'>
       <Container>
           <Row>
               <Col className='col-12'>
                        <section>
                            <h1 className='txtCenter'>Top Trending </h1>
                            <h3 className='txtCenter'>Tv and Movie For You</h3>
                        </section>
               </Col>
               {
                content && content.length > 0 ? content.map ((item)=>{
                  return (
                    <CardMovies key={item.id} data={item} mediaType="tv" />
                  )
                }): 'Loading Content...'
               }
               {
                  paginationNo && paginationNo > 1 ? <PaginationComponent  maxnum={paginationNo} activenum={pageno} handleClick={handleClick} /> : ''
               }
           </Row>
       </Container>
    </main>
  )
}

export default HomeContainer