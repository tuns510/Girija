import React from 'react';
import './footer.css';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-quote">
        <h2>Changing Lives, One Child <br/> at a Time.</h2>
      </div>

      <div className="footer-main">
        <div className="footer-left">
          <div className="Flogo">
            <a href='/'><img src={assets.logo} alt="" /></a>
            <a href='/'><h2>GIRIJA FOUNDATION </h2></a>
           </div>
          <div className="footer-socials">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4><Link to='/'>Home</Link></h4>
            <a href="#what_we_do"><p>What we do</p></a>
            <a href="#impact-container"><p>Our Impact</p></a>
          </div>
          <div>
            <h4><Link to='/about'>About us</Link></h4>
            <a href='#about-section'><p>About Girija</p></a>
            <a href='#team-section'><p>Founder</p></a>
          </div>
          <div>
            <h4><Link to='/donate-now'>Donate</Link></h4>
            <a href='#donation-section'><p>Help Children</p></a>
            <a href='#contact-container'><p>Contact Us</p></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
