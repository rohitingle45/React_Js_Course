import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  const btnClicked = () => {
    navigate('/');
  }
  return (
    <div>
        <button onClick={btnClicked} className='bg-emerald-800 rounded py-2 px-4 m-2 text-xl active:scale-95 cursor-pointer'>Home Page</button>
        <h1>About Page</h1>
    </div>
  )
}

export default About
