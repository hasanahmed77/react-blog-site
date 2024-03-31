import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className="logo">
        <h1><a href="#" className='btn-navbar'>blog.</a></h1>
    </div>
    
    <ul className='list-btn-navbar'>
        <li><a href="#" className='btn-navbar'>home</a></li>
        <li><a href="#" className='btn-navbar btn-new-blog'>new blog</a></li>
    </ul>
</nav>
  )
}

export default Navbar