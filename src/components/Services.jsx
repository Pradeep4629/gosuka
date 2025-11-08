import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '💼',
      title: 'Business Consulting',
      description: 'Strategic advice to help your business grow and succeed in today\'s competitive market.'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.'
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and reach.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to streamline your business operations.'
    },
    {
      icon: '🔒',
      title: 'Security Services',
      description: 'Protect your business with robust security solutions and compliance support.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights for better decision-making.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to meet your business needs and exceed your expectations.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

