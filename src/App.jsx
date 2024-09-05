import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './views/Header'
import Home from './views/Home'
import Projects from './views/Projects'
import About from './views/About'
import Contact from './views/Contact'
import Footer from './views/Footer'

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


