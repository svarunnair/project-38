import { Home } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function PublicRoutes() {
  return (
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>

        
    </Routes>
  )
}

export default PublicRoutes