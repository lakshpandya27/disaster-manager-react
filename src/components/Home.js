import React from 'react'
import '../styles/home.css'

import { About } from './About'
import { Contact } from './Contact'

export const Home = () => {
  return (
    <div className='home-container'>
      <section className='home'>
        <div className='home-center'>
          <div className='home-center-tex'>
            <pre className='home-text-quotes'>{
              `    Be safe
              
    Be Alert
              
    Spread Awareness

    Save lives`
            }</pre>
          </div>
          
        </div>
      </section>
      <About />
      <Contact />
    </div>
  )
}
