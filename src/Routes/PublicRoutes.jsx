
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signin from '../Pages/authPage/Signin'
import Signup from '../Pages/authPage/Signup'
import Students from '../Pages/Students'
import Marvel from '../Pages/Marvel'
import Detail from '../Pages/Detail'
import Cart from '../Pages/Cart'
import Info from '../Pages/Info'
import Search from '../Pages/Search'



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
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/search/:id' element={<Search/>}/>
  
        
    </Routes>
  )
}

export default PublicRoutes