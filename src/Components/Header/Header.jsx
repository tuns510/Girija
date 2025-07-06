import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
      <img src={assets.Hero} alt="" />
      <div className="overlay">
        <h1>Girija Foundation - A Home for <br/> Every Child in Need</h1>
        <p>Giving vulnerable children a safe space, education,<br/> and a brighter future since 2010.</p>
        <button className="donate-hero">Donate Now</button>
      </div>
    </div>
  )
}

export default Header
