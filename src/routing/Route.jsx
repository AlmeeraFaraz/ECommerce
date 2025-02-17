import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Pnf from '../pages/Pnf';
import Desc from '../pages/Desc';
import Cart from '../pages/cart';
const Route = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/products/:id' element={<Desc/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='*' element={<Pnf/>}/>
      </Routes>
    </div>
  )
}

export default Route
