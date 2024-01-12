import React, { memo } from 'react'
import './service.css'

export default memo(function Section() {
  return (
 <>
 <div className="service">
  <h2 className="headings">Services</h2>
 </div>
  <div className="content1">
  <div className="items">
    {/* <a href="#">lgog</a> */}
     <h4>Website Design</h4>
     <p>Creating visually appealing and user-friendly website layouts</p>
  </div>
  <div className="items">
    {/* <a href="#">lgog</a> */}
     <h4>Front-end Development</h4>
     <p>Building the client-side of website using technologies like HTML,CSS and JAVASCRIPT</p>
  </div>
  <div className="items">
    {/* <a href="#">lgog</a> */}
     <h4>Full-Stack Development</h4>
     <p>Combining front-end and back-end Development to create complete,end-to-end solution.</p>
  </div> 
  <div className="items">
    {/* <a href="#">lgog</a> */}
     <h4>Web Application Develpment</h4>
     <p>Ensuring website work seamlessly across various devices and screen size.</p>
  </div>
  </div>
 </>
  )
})
