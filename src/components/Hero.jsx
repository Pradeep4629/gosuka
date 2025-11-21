import React from 'react'
// import FallingLeaves from './FallingLeaves'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      {/* <FallingLeaves /> */}
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">GOSUKA</span>
          </h1>
          <p className="hero-subtitle">
            Your trusted partner for innovative business solutions.
            We help businesses grow and succeed in the digital age.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={() => {
              document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View Catalog
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="graphic-circle"></div>
            <div className="graphic-circle"></div>
            <div className="graphic-circle"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

