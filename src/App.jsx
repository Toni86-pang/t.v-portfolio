import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import Nav from './components/nav/Nav.jsx'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
<Footer />
    </>
  )
}

export default App