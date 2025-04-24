import { useState } from 'react'
import Navbar from './components/NavBar'
import Contact from './components/ContactForm'
import Carousel from './components/Carousel'
import Nosotros from './components/about'
import Servicios from './components/Servicios'
import PorQueNosEligen from './components/eligen'
import WhatsAppButton from './components/WhatsApp'
import TrackOrderButton from './components/TrackButton'
import Objetivos from './components/Objetivos'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (

    <div>
      <Navbar/>
      <Carousel/>
      <Contact/>
      <Nosotros/>
      <Servicios/>
      <PorQueNosEligen/>
      <Objetivos/>
      <Footer/>
      <WhatsAppButton/>
      <TrackOrderButton/>
    </div>
  )
}

export default App
