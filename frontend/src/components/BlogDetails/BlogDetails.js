import React from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import './blogdetails.css'
import useFetch from '../../hooks/useFetch'
import { useAuthContext } from '../../hooks/useAuthContext'

const BlogDetails = () => {
  const history = useHistory()
  const { id } = useParams()
  const {user} = useAuthContext()

  const { data: blogs, isPending } = useFetch(`http://localhost:3001/api/blogs/${id}`)

  const handleDelete = () => {
    fetch(`http://localhost:3001/api/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/')
    
    })
  }

  return (
    <div>
      { blogs && 
          <div className='blog-details'>
          <div className="blog-about">
            <p><h1 className='blog-title'>{blogs.title}</h1> by {blogs.author}</p>
          </div>
          <div className="blog-body">
            <p>{blogs.body}</p>
          </div>
          <button className='btn-delete-blog' onClick={handleDelete}>delete blog</button>
        </div>
        }
    </div>
  )
}

export default BlogDetails