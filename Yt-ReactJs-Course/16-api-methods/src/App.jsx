import React from 'react'
import UserList from './Comonents/UserList'
import UserAdd from './Comonents/UserAdd'
import {Route,Link,Routes} from 'react-router-dom'
import UserEdit from './Comonents/UserEdit'
const App = () => {
  return (
    <div>
         <h1>Post method in API</h1>
         <h1>Mini Project Show User List And Add User In Same List</h1>
         <ul>
            <li>
              <Link className='link'  to='/'>UserList</Link>
            </li>
            <li>
              <Link className='link' to='/add'>Add User</Link>
            </li>
         </ul>
         <Routes>
          <Route path='/' element = {<UserList/>} />
          <Route path='/add' element = {<UserAdd/>} />
          <Route path='/edit/:id' element = {<UserEdit/>} />
         </Routes>
       
    </div>
  )
}

export default App
