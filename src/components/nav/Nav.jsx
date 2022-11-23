import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {HiClipboardList} from 'react-icons/hi'
import {MdContactMail} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active' :''}>
        <AiOutlineHome/></a>

      <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' :''}>
        <FaUserTie/></a>

      <a href="#experience" onClick={() => setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' :''}>
        <HiClipboardList/></a>

        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={ activeNav === '#portfolio' ? 'active' :''}>
        <BsJournalBookmarkFill/></a>

      <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' :''}>
        <MdContactMail/></a>
        
    </nav>
  )
}

export default Nav