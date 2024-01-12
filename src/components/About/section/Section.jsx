import React, { memo } from 'react'
import man from './man.jpg'
import './section.css'
import resume from './Resumes.pdf'


export default memo(function Section() {
  return (
    <>
      <div className="content">
        <h1>About <span>Me</span></h1>
        <p>My Introduction</p>
      </div>
      <div className="content-part">
        <img src={man} alt="" width="25%" />
        <div className="part">
          <p id='info'>Web developer,with extensive knowledge and experience,working in  web technologies </p>
          <div className="exprerience">
            <div className="year">
              <h2>0.1+</h2>
              <p>Years experience</p>
            </div>
            <div className="year">
              <h2>10+</h2>
              <p>Completed project </p>
            </div>
            <div className="year">
              <h2>01+</h2>
              <p>companies worked</p>
            </div>
          </div>
          <div className="btn">
            <a href={resume} target='_new'>Download Resume</a>
          </div>
        </div>
      </div>

    </>
  )
})
