import React from 'react'
import CV from '../../assets/Toni Vainionpää cv.pdf'
const cv = () => {
  return (
    <div className="cv">
        <a href={CV} download className='btn'>Lataa CV</a>
        <a href="#contact" className='btn btn-primary'> Yhteystiedot</a>
    </div>
  )
}

export default cv