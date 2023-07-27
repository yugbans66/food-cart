

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='container'>
        <div className='navbar-menu'>
          <ul>
            <li ><Link to="/">home</Link></li>
            <li><Link to="">receipies</Link></li>
            <li><Link to="">categories</Link></li>
            <li><Link to="">contact</Link></li>

          </ul>
          <div>
            <ul className='auth'>
              <li><Link to="">icon</Link></li>
              <li><Link to="">icon</Link></li>
              <li><Link to="">icon</Link></li>
              <li><Link to="">icon</Link></li>
              <li><Link to="">icon</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
