import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='aboutus'>

      <div className="about-hero">
        <img src={assets.abthero} alt="Group of children and adults" className="about-hero-img" />
        <div className="about-overlay">
          <h1>Nurturing Hope, Empowering Lives</h1>
          <p>Together, we build a just and compassionate society</p>
          <Link to='/donate-now'><button className="about-donate-btn">Donate Now</button></Link>
        </div>
      </div>

      <section id="about-section">
        <h2>About Girija</h2>
        <p>
          <strong>Girija Foundation</strong>, registered under Regd. No. U85300MH2023NPL396618, is a charitable organization dedicated to serving humanity by uplifting children from vulnerable and underprivileged backgrounds. Founded with the mission to provide a safe, nurturing environment for children who have no secure place to call home - such as orphans, children from broken families, or those living in poverty - the Foundation established Girija Balgruha, a residential shelter home in Panvel, Navi Mumbai, in 2004. The shelter caters to children aged 6 to 18, offering them not only food, clothing, and a safe place to live, but also access to formal and non-formal education, health care, life skills training, and emotional counseling.
        </p>
        <p>
          With a focus on holistic development, the shelter has successfully rehabilitated over 300+ children by enrolling them in mainstream schools and guiding them toward a brighter, more stable future. The Foundation also engages with parents or guardians when possible, working towards reintegration and long-term well-being. Girija Foundation stands as a beacon of hope, committed to transforming lives and giving every child a chance to thrive.
        </p>
      </section>

      <div className="our-story-section">
        <h2>Our Story</h2>
        <div className="story-content">
          <div className="story-image">
            <img src={assets.leader1} alt="Mrs. Sunanda with elderly person" />
          </div>
          <div className="story-text">
            <p><strong>Managing director:</strong> Mrs. Sunanda Ganesh Sapling</p>
            <p><strong>Established:</strong> 2015, Registered in 2023 as a Section 8 Company</p>
            <p className="quote">“What we take with us from this life is not our wealth or fame, but the selfless deeds we do for others.”<br /> ~ <i>Mrs. Sunanda Ganesh Sapling</i></p>
            <p>Girija Foundation was born from a dream to support orphaned children, neglected elders, and the underprivileged in Navi Mumbai and beyond. Through tireless service, we’ve touched over 10,000 lives.</p>
          </div>
        </div>
      </div>

      <div className="vision-mission-section">
        <div className="card vision">
          <h2>Our Vision 🔭</h2>
          <p>
            A world where everyone, regardless of background or status,
            lives with dignity, equality, and joy.
          </p>
          <em>“To create a society based on equality, justice, and dignity for all.”</em>
        </div>

        <div className="card mission">
          <h2>Our Mission 🎯</h2>
          <p>
            To uplift marginalized communities through education, healthcare,
            skill training, and compassionate support, led by grassroots efforts.
          </p>
          <em>“To empower the underprivileged through education, health, and care.”</em>
        </div>
      </div>

      <section className="stats-section">
        <div className="stat-box">
          <h2>10,000+</h2>
          <p>Lives Touched</p>
        </div>
        <div className="stat-box">
          <h2>100</h2>
          <p>Beds in Old Age Home</p>
        </div>
        <div className="stat-box">
          <h2>9+</h2>
          <p>Social Initiatives</p>
        </div>
      </section>

      <section id="team-section">
        <h2>Founders & Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={assets.sgp2} alt="Sunanda Sapling" />
            <p>Sunanda Sapling <span>(President)</span></p>
          </div>
          <div className="team-member">
            <img src={assets.gs} alt="Ganesh Sapling" />
            <p>Ganesh Sapling <span>(Director)</span></p>
          </div>
          <div className="team-member">
            <img src={assets.baby} alt="Navin Kumar" />
            <p>Isha Sapling <span>(Daughter)</span></p>
          </div>
        </div>
      </section>


      <div id="contact-container">
        <h2>Contact & Visit Us</h2>
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
                Girija Foundation: Om Bungalow no.324,<br />
                Matheran Road Nere, New Panvel<br/> 410206.
              </p>
            </div>

            {/* Contact */}
            <div className="contact-card">
              <h3 className="card-title">📞 Contact</h3>
              <p className="card-text">
                📧 Email: girijafoundationngo@gmail.com<br />
                📱 Number: 9969339091 / 8767196323
              </p>
            </div>
          </div>
        </div>

      <Footer />
    </div>
  )
}

export default About
