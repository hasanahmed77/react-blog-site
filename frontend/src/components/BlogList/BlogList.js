import React, { useState } from 'react'
import './blogList.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const BlogList = ({ blogs, homeOrMyBlogs }) => {
  let _link = null

  if (homeOrMyBlogs === 'home') {
    _link = 'blogs/'
  }

  if (homeOrMyBlogs === 'myBlogs') {
    _link = 'myblogs/'
  }

  return (
    <div className='blogs'>
        { blogs && blogs.map((blog) => (
            <div className="blog-preview" key={blog._id}>
              <Link to={`${ _link }${ blog._id }`} className='blog-links'>
                <h1 className='blog-author'>{ blog.title }</h1>
                <p>by {blog.author}</p>
              </Link>
            </div>
        )) }
    </div>
  )
}

export default BlogList