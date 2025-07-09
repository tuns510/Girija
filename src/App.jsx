import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import ContactUs from './Pages/Contact/ContactUs'
import Donate from './Pages/Donate/Donate'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/donate-now' element={<Donate/>}/>
      </Routes>
    </div>
  )
}

export default App
