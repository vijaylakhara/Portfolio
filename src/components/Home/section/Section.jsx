import React from 'react'
import './style.css'
import man from './man.jpg'
import { NavLink } from 'react-router-dom'
const Section = () => {
  return (
<>

 <div className="box">
  <div className="name">
    <h1>Hi,I'am <span>Vijay</span></h1>
    <h3>React js developer</h3>
    <h6>High level experience in react js and development kownledge producing quality work.</h6>
    <div className="btn1">
     <NavLink to="/contact">Contact Me</NavLink>
    </div>
  </div>
  <div className="image">
  <img src={man} alt="" />
  </div>
 </div>
</>
  )
}

export default Section
