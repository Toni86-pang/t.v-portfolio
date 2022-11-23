import React from 'react'
import './header.css'
import CV from './cv'
import ME from '../../assets/Me.JPG'
import Headersocials from './Headersocials'

const Header = () => {
  return (
    <header> 
      <div className="container header__container">
        <h5>Moikka olen </h5>
        <h1>Toni Vainionpää </h1>
      <h5 className="text-light">Ohjelmistokehittäjä</h5>
      <CV />
      <Headersocials />
      <div className="me">
        <img src={ME} alt="Me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header