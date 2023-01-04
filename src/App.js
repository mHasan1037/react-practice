import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ReactPaginate from 'react-paginate'



const App = () => {
  const [users, setUsers] = useState([])
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(()=>{
     const fetchData = async () =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setUsers(res.data.slice(0, 5))
     }
     fetchData()
  }, [])


  const usersPerPage = 10
  const pagesVisited = pageNumber * usersPerPage
  const displayUsers = users
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((user) => {
    return (
      <div className='user' key={user.id}>
          <h3>{user.id}</h3>
          <h3>{user.title}</h3>
          <h3>{user.body}</h3>
      </div>
   )
  })

   const pageCount = Math.ceil(users.length / usersPerPage)

   const changePage = ({ selected }) =>{
      setPageNumber(selected)
   }
  
  return (
    <div>
        {displayUsers}
        <ReactPaginate 
           previousLabel={"Prev"}
           nextLabel={"Next"}
           pageCount={pageCount}
           onPageChange={changePage}
        />
    </div>
  )
}

export default App