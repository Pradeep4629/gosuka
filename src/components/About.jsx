import React from 'react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Goal-Oriented',
      description: 'We focus on achieving your business objectives with precision and dedication.'
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'Cutting-edge approaches to solve complex business challenges.'
    },
    {
      icon: '🤝',
      title: 'Trusted Partnership',
      description: 'Building long-term relationships based on trust and mutual success.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Efficient processes that deliver results on time, every time.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            We are a team of dedicated professionals committed to helping your business thrive.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At GOSUKA, we believe in delivering exceptional value to our clients through 
              innovative solutions and unwavering commitment to excellence. Our mission is to 
              empower businesses to reach their full potential in an ever-evolving digital landscape.
            </p>
            <p>
              With years of experience and a passion for excellence, we've helped numerous 
              businesses transform their operations and achieve remarkable growth.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

