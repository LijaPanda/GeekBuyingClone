import React from 'react'
import Navbar from './Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
function Allroutes() {
  return (
    
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes