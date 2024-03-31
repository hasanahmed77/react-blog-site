import React, { useState } from 'react'
import BlogList from '../BlogList/BlogList'

const Home = ({ blogs }) => {

    return (
    <BlogList blogs={blogs} />
    )
    }

export default Home