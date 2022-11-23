import React, { useRef } from 'react'
import './contact.css'
import{IoIosPaperPlane} from 'react-icons/io'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nmsa40g', 'template_y0hz9in', form.current, 'aQ96nC30Z5FL48Afc')
    
    e.target.reset()

  };
  return (
    <section id='contact'>
      <h5>Kiinostuitko?</h5>
      <h2>Ota yhteyttä!</h2>
      <div className="container contact__container">
<div className="contact__options">
  <article className="contact__option">
    <IoIosPaperPlane className='contact__option-icon' />
<h4>Email</h4>
<h5>neworen@gmail.com</h5>
<a href="mailto:neworen@gmail.com" target='_blank'>laithan sähköpostia</a>
  </article>

 

  <article className="contact__option">
    <BsWhatsapp className='contact__option-icon'/>
<h4>whatsApp</h4>
<h5>+35844-5085402</h5>
<a href="https://api.whatsapp.com/send?phone=358445085402" target='_blank'>Voit myös laittaa whatsApp viestiä</a>
  </article>
   </div>

<form ref={form} onSubmit={sendEmail}>
  <input type="text" name='name' placeholder='Koko nimi' required />
  <input type="email" name='email' placeholder='sähköposti' required />
  <textarea name="message" rows="8" placeholder='Kirjoita viestinne tähän' />
  <button type='submit' className='btn btn-primary' >Lähetä viesti</button>
</form>
      </div>
    </section>
  )
}

export default Contact