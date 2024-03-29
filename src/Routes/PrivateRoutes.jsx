import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
import School from '../Pages/School'
import Fifa from '../Pages/Fifa'


function PrivateRoutes() {
  return (
    <Routes>

        <Route path='/students' element={<Students/>}/>
        <Route path='/marvel' element={<Marvel/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/search/:id' element={<Search/>}/>
        <Route path='/adventure' element={<Adventure/>}/>
        <Route path='/collage' element={<Collage/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/travel' element={<Travel/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/school' element={<School/>}/>
        <Route path='/fifa' element={<Fifa/>}/>

    </Routes>
  )
}

export default PrivateRoutes