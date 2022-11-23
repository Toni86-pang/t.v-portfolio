import React from 'react'
import './about.css'
import Me from '../../assets/Tulesa.png'
import { GiSkills } from 'react-icons/gi'
import { BsPersonLinesFill } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>




      <h5>Kuka on</h5>
      <h2>Toni Vainionpää?</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Hyvin polttaa" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiSkills className='about__icon' />
              <h5>Osaamiset</h5>
              <small >
                Html5  <br />
                css  <br />
                React <br />
                ja paljon muuta <br />


              </small>
            </article>
            <article className='about__card'>
              <BsPersonLinesFill className='about__icon' />

              <h5>Osaamiset</h5>
              <small >
                Html5  <br />
                css  <br />

              </ small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />

              <h5>Kielitaito</h5>
              <small >
                Suomi  <br />
                Englanti  <br />
              </small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam rerum! Impedit
            exercitationem saepe maxime dolorem suscipit tempore necessitatibus reprehenderit,
            rerum nemo deleniti laudantium repellendus aspernatur explicabo asperiores, ut dolores!</p>

          <a href='#contact' className='btn btn-primary' > Ota yhteyttä</a>
        </div>
      </div>

    </section>
  )
}

export default About