import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'


function App() {


  return (
    <div>
     <Hero/>
     <Header/>
     
     <section id='services'>
     <Services/>
     </section>

     <section id='stats'>
     <Stats/>
     </section>

     <section id='testimonials'>
     <Testimonials/>
     </section>

     <CTA/>
     <section id='footer'>
     <Footer/>
     </section>
    </div>
  )
}

export default App
