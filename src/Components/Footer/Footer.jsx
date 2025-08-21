import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
            <a href="https://www.facebook.com/share/1C9ni93aBU/"><FaFacebookF /></a>
            <a href="https://youtube.com/@girijafoundation9531?si=wZl6597LZPGu9a7a"><FaYoutube /></a>
            <a href="https://www.instagram.com/girija_ngo_panvel?igsh=b2xrcXB1dTVycnVh"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4><Link to='/'>Home</Link></h4>
            <HashLink smooth to="/#what_we_do"><p>What we do</p></HashLink>
            <HashLink smooth to="/#impact-container"><p>Our Impact</p></HashLink>
          </div>
          <div>
            <h4><Link to='/about'>About us</Link></h4>
            <HashLink smooth to='/about#about-section'><p>About Girija</p></HashLink>
            <HashLink smooth to='/about#team-section'><p>Founder</p></HashLink>
          </div>
          <div>
            <h4><Link to='/donate-now'>Donate</Link></h4>
            <HashLink smooth to='/donate-now#donation-section'><p>Help Children</p></HashLink>
            <HashLink smooth to='/about#contact-container'><p>Contact Us</p></HashLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
