import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './sections/Header'
import Home from './sections/Home'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer/>
    </BrowserRouter>
  )
}


