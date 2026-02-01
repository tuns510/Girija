import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Donate from './Pages/Donate/Donate'
import Events from './Pages/Events/Events'
import Mangao from './Pages/Mangao/Mangao'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/donate-now' element={<Donate/>}/>
        <Route path='/mangaon' element={<Mangao/>}/>
      </Routes>
    </div>
  )
}

export default App
