import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice'

const PostsView = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [])

  return (
    <div>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        <section>
            {posts && posts.map(post =>{
                return <article>
                    <h3>{post.title}</h3>
                </article>
            })}
        </section>
    </div>
  )
}

export default PostsView