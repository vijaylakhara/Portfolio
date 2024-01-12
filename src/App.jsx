import React, { memo } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact us/Contact'

export default memo(function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/Skills' element={<Skills/>}/>
 <Route path='/services' element={<Services/>}/>
 <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
 
  
 </>
  )
})
