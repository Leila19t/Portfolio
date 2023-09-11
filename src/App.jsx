import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './sections/Header'
import Home from './sections/Home'

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  )
}


