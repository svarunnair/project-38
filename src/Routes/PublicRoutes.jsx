
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signin from '../Pages/authPage/Signin'
import Signup from '../Pages/authPage/Signup'
import Students from '../Pages/Students'
import Marvel from '../Pages/Marvel'
import Detail from '../Pages/Detail'

function PublicRoutes() {
  return (
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/marvel' element={<Marvel/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>


        
    </Routes>
  )
}

export default PublicRoutes