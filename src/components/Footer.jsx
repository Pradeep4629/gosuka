import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">GOSUKA</h3>
            <p className="footer-description">
              Your trusted partner for innovative business solutions. 
              Empowering businesses to reach their full potential.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>Catalog</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>📧 info@gosuka.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Business Street, City, State</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} GOSUKA. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

