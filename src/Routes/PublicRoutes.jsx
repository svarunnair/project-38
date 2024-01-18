
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signin from '../Pages/authPage/Signin'
import Signup from '../Pages/authPage/Signup'

function PublicRoutes() {
  return (
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>


        
    </Routes>
  )
}

export default PublicRoutes