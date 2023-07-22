import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import About from './../pages/About'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'

const Routers = () => {
  return (
    <Routes>
        <Route path = '/' element = {<Navigate to = '/home' />} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/home' element = {<Home/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/register' element = {<Register/>} />
        <Route path = '/tours/search' element = {<SearchResultList/>} />
        <Route path = '/tours/:id' element = {<TourDetails/>} />
        <Route path = '/tours' element = {<Tours/>} />
    </Routes>
  )
}

export default Routers