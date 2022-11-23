import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/IMG_1.jpg'
import IMG2 from '../../assets/IMG_2.jpg'
import IMG3 from '../../assets/IMG3.jpg'
import IMG4 from '../../assets/IMG4.png'


const data =[
{
   id: 1,
   Image: IMG1,
   title: 'Projekti numero yksi.',
   github: 'https://github.com',
   demo: 'https://geronimo.okol.org/~vaiton/build/'
},

{
   id: 2,
   Image: IMG2,
   title: 'Projekti numero kaksi.',
   github: 'https://github.com',
   demo: 'https://geronimo.okol.org/~vaiton/build/'
},

{
   id: 3,
   Image: IMG3,
   title: 'Projekti numero kolme.',
   github: 'https://github.com',
   demo: 'https://geronimo.okol.org/~vaiton/build/'
},

{
   id: 4,
   Image: IMG4,
   title: 'Projekti numero neljä.',
   github: 'https://github.com',
   demo: 'https://geronimo.okol.org/~vaiton/build/'
},
]


const Portfolio = () => {
  return (
    <section id='portfolio' >
<h5> Omia Töitä ja projekteja </h5>
<h2> Portfolio</h2>
<div className="container portfolio__container ">
   {
      data.map(({id,Image,title,github,demo}) => {
         return(
         <article key={id} className='portfolio__items'>
         <div className="portfolio__items-image">
            <img src={Image} alt={title} />
             </div>
             <h3>{title}</h3>
     <div className="portfolio__items-cta">
             <a href={github} className='btn' target='_blank'>Github linkki</a>
             <a href={demo} className='btn btn-primary' target='_blank' >Github linkki</a>
             </div>
        </article>
        )
      })
   }
  
 </div>
    </section>
  )
}

export default Portfolio