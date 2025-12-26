import React from 'react'
import {Route,Routes} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Others from './Pages/Others'
import NotFound from './Pages/NotFound'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import OtherDetails from './Pages/OtherDetails'
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
          <NavBar/>
             <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path='/about' element = {<About/>}/>

              <Route path='/product' element = {<Product/>}>
              <Route index
               element = {<Men/>} />
              <Route path='women' element = {<Women/>} />
              <Route path='kids' element = {<Kids/>} />
              </Route>
              <Route path='/others' element = {<Others/>}/>
              <Route path='/others/:id' element={<OtherDetails/>}/>
               <Route path='*' element = {<NotFound/>}/>
             </Routes>
          <Footer/>
    </div>
  )
}

export default App


