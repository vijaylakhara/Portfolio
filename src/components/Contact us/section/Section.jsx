import React, { memo } from 'react'
import './style.css'

export default memo(function Section() {
  return (
<>
<form className='login'>
      <div className="login-page">
        <h2>Contact Page</h2>
        <input type="text" name="" id="" placeholder='Your Name' />
        <input type="number" name="" id="" placeholder='Your number' />
        <input type="email" name="" id="" placeholder='Email Address' />
      <textarea name="Message" placeholder='Message' id="" cols="30" rows="10"></textarea>
        <button>Continue</button>

      </div>

    </form>
</>
  )
})
