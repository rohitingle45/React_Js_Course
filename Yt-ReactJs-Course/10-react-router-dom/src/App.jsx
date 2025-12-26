import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Others from './pages/Others'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <div>
         <NavBar/>
         <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/others' element = {<Others/>} />
         </Routes>
    </div>
  )
}

export default App
