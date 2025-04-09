import React from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App