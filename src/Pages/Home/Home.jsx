import React, { useEffect } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import { assets } from '../../assets/assets'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect(() => {
    // ✅ Page Title
    document.title = "Girija Foundation | Panvel NGO for Children | Girija Ashram";

    // ✅ Meta Description
    const description = document.querySelector("meta[name='description']");
    if (description) {
      description.setAttribute(
        "content",
        "Girija Foundation Panvel - Empowering children from vulnerable backgrounds through shelter, education, health, counseling, and life skills since 2004."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Girija Foundation Panvel - Empowering children from vulnerable backgrounds through shelter, education, health, counseling, and life skills since 2004.";
      document.head.appendChild(meta);
    }

    // ✅ Meta Keywords
    const keywords = document.querySelector("meta[name='keywords']");
    if (keywords) {
      keywords.setAttribute(
        "content",
        "Girija Foundation, Girija Foundation Panvel, Girija Ashram, Girija NGO, Panvel children shelter, Girija Foundation Nere"
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content =
        "Girija Foundation, Girija Foundation Panvel, Girija Ashram, Girija NGO, Panvel children shelter, Girija Foundation Nere";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <Header />
      <div id="what_we_do">
        <h2>What we do</h2>
        <p>Empowering children from critical backgrounds (orphans, broken families, single-parent homes, etc.) through shelter, education, and life skills.</p>
        <div className="what-we-do-grid">
          <div className="card">
            <span className="emoji">🏠</span>
            <h3>Residential Shelter (Ages 6–18)</h3>
            <p>We provide a safe, nurturing home for children from vulnerable backgrounds including orphans, children from broken homes, or those rescued from street life ensuring they grow up in a stable environment.</p>
          </div>
          <div className="card">
            <span className="emoji">📚</span>
            <h3>Education Support</h3>
            <p>From non-formal bridge education to mainstream school enrollment, we empower children to catch up academically and thrive. Every child is guided toward achieving age-appropriate academic levels.</p>
          </div>
          <div className="card">
            <span className="emoji">🩺</span>
            <h3>Health & Hygiene</h3>
            <p>Regular health check-ups, hygiene awareness sessions, and access to medical camps keep our children mentally and physically healthy. Clean habits and wellness are part of daily life.</p>
          </div>
          <div className="card">
            <span className="emoji">💬</span>
            <h3>Counseling & Life Skills</h3>
            <p>Dedicated staff provide emotional support, behavioral guidance, and life skills training to help children become confident and self-sufficient individuals.</p>
          </div>
          <div className="card">
            <span className="emoji">🎨</span>
            <h3>Extra-Curricular Activities</h3>
            <p>Children participate in music, dance, elocution, and art—unleashing their creativity and boosting confidence through school and shelter-organized events.</p>
          </div>
          <div className="card">
            <span className="emoji">👨‍👩‍👧‍👦</span>
            <h3>Parent Engagement</h3>
            <p>We believe in strengthening family ties. Regular meetings with parents ensure they remain involved in their child's growth journey and are part of their long-term well-being.</p>
          </div>
        </div>
      </div>

      <div className="imgs">
        <img src={assets.img1} alt="" />
        <img src={assets.img2} alt="" />
        <img src={assets.img3} alt="" />
      </div>

      <div className="impact-section">
        <div id="impact-container">
          <h2>Our Impact</h2>
          <p><span>Location:</span> Panvel–Matheran Road, Nere</p>
          <p><span>Established:</span> June 2004</p>
          <p><span>Children Helped:</span> 300+ children enrolled in schools and rehabilitated</p>
          <p><span>Schools Partnered:</span> New English School, Nere; Nere High School; Nere Junior Arts and Commerce College</p>
          <div className="impact-btn">
            <Link to='/donate-now'><button className='btn-primary'>Donate Now</button></Link>
            <Link to='/about'><button className='btn-secondary'>Learn More</button></Link>
          </div>
        </div>
        <div id="Impact-img">
          <img src={assets.baby} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
