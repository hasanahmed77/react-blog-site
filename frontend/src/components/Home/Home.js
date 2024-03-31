import React, { useState } from 'react'
import BlogList from '../BlogList/BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {'title': 'One Piece', 'author': 'Oda', 'body': 'lorem ipsum......', 'id': 1},
        {'title': 'Naruto', 'author': 'Kishimoto', 'body': 'lorem ipsum......', 'id': 2},
        {'title': 'Dragon Ball Z', 'author': 'Toriyama', 'body': 'lorem ipsum......', 'id': 3},
    ])

    return (
    <BlogList blogs={blogs} />
    )
    }

export default Home