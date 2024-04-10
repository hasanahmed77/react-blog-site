import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import BlogList from '../../components/BlogList/BlogList'


const Home = () => {
    const { data: blogs, isPending } = useFetch("http://localhost:3001/api/blogs")
    return (
        <div>
            { isPending ? <h2>Loading...</h2> : <BlogList blogs={blogs} />} 
        </div>
    )
    }

export default Home
