import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Pages/Search'
import Puppy from './Components/Puppy'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/puppy/:breed' element={<Puppy />}/>
        <Route path='/search' element={<Search />}/>
    </Routes>
  )
}

export default AllRoutes