import React, { useState } from 'react'
import './newblog.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useAuthContext } from '../../hooks/useAuthContext'

const NewBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    const { user } = useAuthContext()

    const handleSubmit = e => {
        e.preventDefault()
        setIsPending(true)

        if (!user){
            setError('You must be logged in')
            return
        }

        const blog = { title, body, author}

        fetch("http://localhost:3001/api/blogs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('NEW BLOG ADDED!')
            setIsPending(false)
        })
        history.push('/')
    }
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
            { !isPending && <button className='btn-add-blog' onClick={handleSubmit}>add blog</button> }
            { isPending && <button  disabled className='btn-add-blog' onClick={handleSubmit}>adding blog</button> }
            { error && <div className='error-message'>{ error }</div>}
        </form>
    </div>
    )
}

export default NewBlog