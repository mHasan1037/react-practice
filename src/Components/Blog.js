import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { blogsData } from './data'

const Blog = () => {
    const {title} = useParams()
    const location = useLocation()
    const [bodyData, setBodyData] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
       const blogData = blogsData.filter((blog)=> blog.title === title) 
       setBodyData(blogData[0].body)     
    }, [])

  return (
    <div>
        <h1>{title} page</h1>
        <p>{bodyData}</p>
        <button onClick={()=>{
            navigate('/Blogs')
        }}>Go to blog</button>
    </div>
  )
}

export default Blog