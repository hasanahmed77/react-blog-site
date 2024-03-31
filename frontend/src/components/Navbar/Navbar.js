import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className="logo">
        <h1><Link to="/" className='btn-navbar'>blog.</Link></h1>
    </div>
    
    <ul className='list-btn-navbar'>
        <li><Link to="/" className='btn-navbar'>home</Link></li>
        <li><Link to="/create" className='btn-navbar btn-new-blog'>new blog</Link></li>
    </ul>
</nav>
  )
}

export default Navbar