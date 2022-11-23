import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> Minkälaista  osaamista minulla on </h5>
      <h2>Ohjelmoinnista?</h2>

      <div className="container experience__container ">
        <div className="experience__frontend">
          <h3> Frontend</h3>
          <div className="experience__content">
            <article className='experience__details' >
            <BsPatchCheckFill className='experience__details-icons' />
              <div>
              <h4> HTML</h4>
              <small className='text-light'> Hyvä</small>
              </div>
            </article>
            <article className='experience__details' >
            <BsPatchCheckFill className='experience__details-icons' />
              <div>
              <h4> CSS</h4>
              <small className='text-light'> kohtuullinen</small>
              </div>
            </article><article className='experience__details' >
            <BsPatchCheckFill className='experience__details-icons' />
              <div>
              <h4> Javascript</h4>
              <small className='text-light'> Heikko</small>
              </div>
            </article><article className='experience__details' >
            <BsPatchCheckFill className='experience__details-icons' />
              <div>
              <h4> Bootsrap</h4>
              <small className='text-light'> kohtuullinen</small>
              </div>
            </article><article className='experience__details' >
            <BsPatchCheckFill className='experience__details-icons' />
              <div>
              <h4> React</h4>
              <small className='text-light'> kohtuullinen</small>
              </div>
            </article> </div>
        </div>

        <div className="experience__backend">
          <h3> Backend</h3>
          <div className="experience__content">
            <article className='experience__details' >
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4> PHP </h4>
              <small className='text-light'> Kohtuullinen</small>
              </div>
            </article>
            <article className='experience__details' >
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4> MariaDB</h4>
              <small className='text-light'> Heikko</small>
              </div>
            </article><article className='experience__details' >
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4> MySQL</h4>
              <small className='text-light'> Heikko</small>
              </div>
            </article><article className='experience__details' >
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4> Python</h4>
              <small className='text-light'> Perusteet</small>
              </div>
            </article><article className='experience__details' >
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4> C</h4>
              <small className='text-light'> Perusteet</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience