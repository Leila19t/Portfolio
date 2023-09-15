import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './sections/Header'
import Home from './sections/Home'
import Projects from './sections/Projects'

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Projects id="projects"/>
    </BrowserRouter>
  )
}


