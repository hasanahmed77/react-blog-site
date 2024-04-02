import React, { useState } from 'react'
import './newblog.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const NewBlog = ({ blogs, setBlogs }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        const blog = { title, body, author, id:4 }
        setBlogs(blogs => [...blogs, blog])
        history.push('/')
    }
    console.log(blogs)
    return (
    <div className='new-blog'>
        <h1 className='new-blog-header'>add new blog</h1>
        <form className='new-blog-form' onSubmit={handleSubmit}>
            <label className='labels'>blog title:</label>
            <input 
                className="inputs" 
                type="text" 
                required
                onChange={e => setTitle(e.target.value)}
            />

            <label className='labels'>blog body:</label>
            <textarea 
                className="inputs" 
                required
                onChange={e => setBody(e.target.value)}
            >
            </textarea>

            <label className='labels'>blog author:</label>
            <input 
                className="inputs" 
                type="text" 
                required
                onChange={e => setAuthor(e.target.value)}
            />
            <button className='btn-add-blog' onClick={handleSubmit}>add blog</button>
        </form>
    </div>
    )
}

export default NewBlog