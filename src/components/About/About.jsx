import React, { memo } from 'react'
import Section from './section/Section'
import Navbar from '../navbar/Navbar'

export default memo(function About() {
  return (
    <>
      <Navbar />
      <Section />
    </>
  )
})
