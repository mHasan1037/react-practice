import React from 'react'

const Posts = ({ posts }) => {
  return (
    <div>
        {posts.map((user)=>{
            const {id, title, body} = user
            return (
                <div className='box'>
                    <p>{id}</p>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Posts