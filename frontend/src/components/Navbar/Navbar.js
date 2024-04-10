import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useLogout } from '../../hooks/useLogOut'
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {
  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handleLogOut = () => {
    logout()
  }

  return (
    <nav className='navbar'>
    <div className="logo">
        <h1><Link to="/" className='btn-navbar'>blog.</Link></h1>
    </div>
    
    <ul className='list-btn-navbar'>
        <li><Link to="/" className='btn-navbar'>home</Link></li>
        { user && <li onClick={handleLogOut}><Link className='btn-navbar'>log out</Link></li>}
        { !user && <li><Link to="/login" className='btn-navbar'>login</Link></li>}
        { !user && <li><Link to="/signup" className='btn-navbar'>sign up</Link></li>}
        { user && <li><Link to="/create" className='btn-navbar btn-new-blog'>new blog</Link></li>}
    </ul>
</nav>
  )
}

export default Navbar