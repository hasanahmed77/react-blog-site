import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import './blogdetails.css'
import useFetch from '../../hooks/useFetch'
import { useAuthContext } from '../../hooks/useAuthContext'

const BlogDetails = () => {
  const history = useHistory()
  const { id } = useParams()
  const {user} = useAuthContext()
  const allowdeleteBtn = localStorage.getItem('del')

  const { data: blog, isPending } = useFetch(`http://localhost:3001/api/blogs/${id}`)

  console.log(blog)

  const handleDelete = () => {
    if (!user) return

    fetch(`http://localhost:3001/api/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div>
      { blog && 
          <div className='blog-details'>
          <div className="blog-about">
            <p><h1 className='blog-title'>{blog.title}</h1> by {blog.author}</p>
          </div>
          <div className="blog-body">
            <p>{blog.body}</p>
          </div>
          { allowdeleteBtn && <button disabled={isPending} className='btn-delete-blog' onClick={handleDelete}>delete blog</button> }
        </div>
        }
    </div>
  )
}

export default BlogDetails