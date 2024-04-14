import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import BlogList from '../components/BlogList/BlogList'

const MyBlogs = () => {
    const { data: blogs, isPending } = useFetch("http://localhost:3001/api/blogs/myBlogs")
    return (
        <div>
            { isPending ? <h2>Loading...</h2> : <BlogList blogs={blogs.blogs} homeOrMyBlogs={'myBlogs'} />} 
        </div>
    )
    }

export default MyBlogs