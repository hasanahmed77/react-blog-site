import React from 'react'
import './blogList.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const BlogList = ({ blogs }) => {
  return (
    <div className='blogs'>
        { blogs && blogs.map((blog) => (
            <div className="blog-preview">
              <Link to={`blogs/${ blog.id }`} className='blog-links'>
                <h1 className='blog-author'>{ blog.title }</h1>
                <p>by {blog.author}</p>
              </Link>
            </div>
        )) }
    </div>
  )
}

export default BlogList