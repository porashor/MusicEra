import React from 'react'
import Navber from './Components/Navber'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"
import NotFound from './Pages/NotFound'
import Foother from './Components/Foother'

const App = () => {
  return (
    <div className='font-serif'>
      <Router>
        <Navber/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        <Foother/>
      </Router>
    </div>
  )
}

export default App
