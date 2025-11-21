import React from 'react'
import './Catalog.css'

const Catalog = () => {
  const catalogItems = [
    {
      icon: '🌿',
      title: 'Tamarind',
      description: 'Premium quality tamarind, naturally sourced and carefully selected. Rich in flavor and nutrients, perfect for culinary and medicinal uses.'
    },
    {
      icon: '🥭',
      title: 'Mango',
      description: 'Fresh, juicy mangoes available in various varieties. Sweet and delicious, harvested at peak ripeness for the best taste and quality.'
    },
    {
      icon: '🥜',
      title: 'Raw Cashew',
      description: 'High-grade raw cashew nuts, sourced directly from trusted growers. Premium quality nuts perfect for processing or direct consumption.'
    },
    {
      icon: '🌽',
      title: 'Maize',
      description: 'Quality maize grains, carefully selected and stored. Versatile crop suitable for various uses including food production and animal feed.'
    },
    {
      icon: '🍏',
      title: 'Custard Apple',
      description: 'Sweet and creamy custard apples, hand-picked for premium quality. Known for their delightful taste and rich nutritional value.'
    }
  ]

  return (
    <section id="catalog" className="catalog">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Catalog</h2>
          <p className="section-subtitle">
            Explore our premium selection of agricultural products. Quality guaranteed, sourced directly from trusted growers.
          </p>
        </div>

        <div className="catalog-grid">
          {catalogItems.map((item, index) => (
            <div key={index} className="catalog-card">
              <div className="catalog-icon">{item.icon}</div>
              <h3 className="catalog-title">{item.title}</h3>
              <p className="catalog-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog

