import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import './blogdetails.css'

const BlogDetails = ({ blogs }) => {
  const { id } = useParams()
  const currentBlog = blogs.filter(blog => blog.id == id)[0]

  return (
    <div className='blog-details'>
      <div className="blog-about">
        <p><h1 className='blog-title'>{currentBlog.title}</h1> by {currentBlog.author}</p>
      </div>
      <div className="blog-body">
        <p>{currentBlog.body}</p>
      </div>
      <button className='btn-delete-blog'>delete blog</button>
    </div>
  )
}

export default BlogDetails