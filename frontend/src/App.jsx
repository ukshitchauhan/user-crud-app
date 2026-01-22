import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import AddUser from './pages/AddUser'
import SawUser from './pages/SawUser'


const App = () => {
  return (
    <BrowserRouter>
      <div>
          <div className='nav'>
          <Link className='navi' to='/addUser'>Add User</Link>   
        <Link className='navi' to='/sawUser'>Saw User</Link>
          </div>

        <Routes>
          <Route path='/addUser' element={<AddUser/>}/>
          <Route path='/sawUser' element={<SawUser/>}/>
        </Routes>
      </div>
    </BrowserRouter>    
  )
}

export default App
