import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='nav'> 
          <div className='nav-logo'>
              RohitIngle   
          </div>
          <div className='nav-elements'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/others'>Other</Link> 
          </div>
    </div>
  )
}

export default NavBar
