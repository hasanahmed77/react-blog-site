import React from 'react'
import './blogList.css'

const BlogList = ({ blogs }) => {
  return (
    <div className='blogs'>
        { blogs && blogs.map((blog) => (
            <div className="blog-preview">
                <h1 className='blog-author'>{ blog.title }</h1>
                <p>By {blog.author}</p>
            </div>
        )) }
    </div>
  )
}

export default BlogList