import React from 'react'
import Nav from './Nav'
import { useState } from 'react'
const App = () => {
  const [theme,setTheme] = useState('Light');
  return (
    <div className='h-screen bg-black width-full text-white'>
       <h1 className='text-2xl'>Theme is {theme}</h1>
       <Nav theme = {theme} setTheme = {setTheme} />
    </div>
  )
}

export default App

