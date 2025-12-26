import React from 'react'
import {Link} from 'react-router-dom'
 const NavBar = () => {
  return (
    <div className='flex justify-between py-4 px-8 items-center bg-cyan-800'>
         <h2 className='text-4xl font-bold'>RohitIngle</h2>
         <div className='flex gap-10 '>
            <Link className='text-lg font-medium' to='/'>Home</Link>
             <Link className='text-lg font-medium' to='/about'>About</Link>
              <Link className='text-lg font-medium' to='/product'>Product</Link>
               <Link className='text-lg font-medium' to='/others'>Others</Link>
         </div>
    </div>
  )
}

export default NavBar
