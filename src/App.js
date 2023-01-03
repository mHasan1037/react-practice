import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Posts from './Components/Posts'
import Pagination from './Components/Pagination'



const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(()=>{
    const fetchPosts = async () =>{
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  return (
    <div>
        <h1>My Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App