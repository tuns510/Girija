import React from 'react'
import './ContactUs.css';
import { assets } from '../../assets/assets';
import Footer from '../../Components/Footer/Footer'


const ContactUs = () => {
  return (
    <div className='contact-us'>
          <div className="extra">
        <p>Home &gt; About Us</p>
      </div>
    <div className="contact-container">
      <div className="cards-wrapper">
        {/* Visit. Donate. Celebrate. */}
        <div className="contact-card">
          <h3 className="card-title">❤️ Visit. Donate. Celebrate.</h3>
          <ul className="card-list">
            <li>Plan a visit to meet the children</li>
            <li>Celebrate birthdays or anniversaries with us</li>
            <li>Sponsor meals or school kits</li>
          </ul>
        </div>

        {/* Address */}
        <div className="contact-card">
          <h3 className="card-title">📍 Address</h3>
          <p className="card-text">
            Girija Welfare Association G-82,<br />
            Behind Mini Market, Near Shivaji Chowk,<br />
            Sector 12, Kharghar, Navi Mumbai – 410210,<br />
            Maharashtra, India
          </p>
        </div>

        {/* Contact */}
        <div className="contact-card">
          <h3 className="card-title">📞 Contact</h3>
          <p className="card-text">
            📧 Email: abcd@gmail.com<br />
            📱 Number: 8899347381
          </p>
        </div>
      </div>
    </div>

        <div className="gallery-container">
      <div className="gallery-images">
        <img src={assets.p4} className="rotate-left" />
        <img src={assets.p3} className="rotate-right" />
        <img src={assets.p1} className="center-image" />
        <img src={assets.p2} className="rotate-left" />
        <img src={assets.p5} className="rotate-right" />
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ContactUs
