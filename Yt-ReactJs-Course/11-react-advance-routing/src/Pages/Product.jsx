import React from 'react'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import {Link,Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
        <div className='flex gap-10 justify-center text-xl py-4'>
          <Link to=''>Men</Link>
          <Link to='/product/women'>Women</Link>
          <Link to='/product/kids'>Kids</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product
