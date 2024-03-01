
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
import Adventure from '../Pages/Adventure'
import Collage from '../Pages/Collage'
import Location from '../Pages/Location'
import Travel from '../Pages/Travel'
import Payment from '../Pages/Payment'
import Sidebar from '../Components/Sidebar'



function PublicRoutes({setshowCart}) {

  console.log("ppblicCartt",setshowCart)



  return (
<>

{/* <Sidebar setshowCart={setshowCart}/> */}
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/marvel' element={<Marvel/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/info' element={<Info setshowCart={setshowCart}/>}/>
        <Route path='/search/:id' element={<Search/>}/>
        <Route path='/adventure' element={<Adventure/>}/>
        <Route path='/collage' element={<Collage/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/travel' element={<Travel/>}/>
        <Route path='/payment' element={<Payment/>}/>
        
        
  
        
    </Routes>

    </>
  )
}

export default PublicRoutes