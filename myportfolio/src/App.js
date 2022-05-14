import React from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Header from './pages/Header'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
