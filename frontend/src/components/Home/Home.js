import React, { useEffect } from 'react'
import BlogList from '../BlogList/BlogList'
import useFetch from '../../hooks/useFetch'

const Home = () => {
    const { data: blogs, isPending } = useFetch("http://localhost:3001/api/blogs")
    return (
        <div>
            { isPending ? <h2>Loading...</h2> : <BlogList blogs={blogs} />} 
        </div>
    )
    }

export default Home
