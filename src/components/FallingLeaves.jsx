import React from 'react'
import './FallingLeaves.css'

const FallingLeaves = () => {
  // Generate falling items with different types
  const items = []
  
  // Add leaves
  for (let i = 0; i < 15; i++) {
    items.push({
      id: `leaf-${i}`,
      type: 'leaf',
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      size: 25 + Math.random() * 35, // 25-60px
      rotation: Math.random() * 360,
    })
  }
  
  // Add mangoes
  for (let i = 0; i < 8; i++) {
    items.push({
      id: `mango-${i}`,
      type: 'mango',
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      size: 35 + Math.random() * 25, // 35-60px
      rotation: Math.random() * 360,
    })
  }
  
  // Add cashews
  for (let i = 0; i < 10; i++) {
    items.push({
      id: `cashew-${i}`,
      type: 'cashew',
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      size: 20 + Math.random() * 20, // 20-40px
      rotation: Math.random() * 360,
    })
  }

  // Shuffle items for random distribution
  const shuffledItems = items.sort(() => Math.random() - 0.5)

  const getAnimationDuration = (item, index) => {
    switch (item.type) {
      case 'leaf':
        return 12 + (index % 3) * 2 // 12-16s
      case 'mango':
        return 7 + (index % 2) * 1.5 // 7-8.5s (faster, heavier)
      case 'cashew':
        return 9 + (index % 2) * 1 // 9-10s
      default:
        return 12
    }
  }

  const renderItem = (item) => {
    switch (item.type) {
      case 'leaf':
        return (
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main leaf shape */}
            <path
              d="M20 4C16 4 12 6 10 10C8 14 10 18 14 20C18 22 22 20 24 16C26 12 24 8 20 4Z"
              fill="#2d5016"
              fillOpacity="0.7"
            />
            <path
              d="M20 4C18 5 16 7 15 9C14 11 15 13 17 14C19 15 21 14 22 12C23 10 22 8 20 4Z"
              fill="#228B22"
              fillOpacity="0.8"
            />
            {/* Leaf veins */}
            <path
              d="M20 4L20 20M15 10L20 20M25 10L20 20"
              stroke="#1a3d0e"
              strokeWidth="0.5"
              strokeOpacity="0.5"
              strokeLinecap="round"
            />
            {/* Stem */}
            <path
              d="M20 20L20 24"
              stroke="#1a3d0e"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        )
      
      case 'mango':
        return (
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Mango body */}
            <ellipse cx="20" cy="22" rx="12" ry="15" fill="#FFA500" />
            <ellipse cx="20" cy="22" rx="10" ry="13" fill="#FFD700" />
            <ellipse cx="18" cy="20" rx="6" ry="8" fill="#FF8C00" fillOpacity="0.4" />
            {/* Mango stem */}
            <path
              d="M20 8L19 12L20 13L21 12L20 8Z"
              fill="#228B22"
            />
            <path
              d="M19 12Q20 11 21 12"
              stroke="#2d5016"
              strokeWidth="0.5"
              fill="none"
            />
            {/* Highlight */}
            <ellipse cx="18" cy="18" rx="4" ry="5" fill="#FFF" fillOpacity="0.3" />
          </svg>
        )
      
      case 'cashew':
        return (
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cashew nut shape */}
            <path
              d="M20 10C18 8 15 9 13 11C11 13 10 16 11 18C12 20 14 21 16 20C18 19 19 17 20 15C21 17 22 19 24 20C26 21 28 20 29 18C30 16 29 13 27 11C25 9 22 8 20 10Z"
              fill="#D2B48C"
            />
            <path
              d="M20 10C18 9 16 10 15 11.5C14 13 14 15 15 16.5C16 18 17.5 18.5 19 18C20.5 17.5 21 16 21 14.5C21 13 20.5 11.5 20 10Z"
              fill="#F5DEB3"
            />
            {/* Cashew texture lines */}
            <path
              d="M17 13L19 15M19 13L21 15M17 17L19 19"
              stroke="#C19A6B"
              strokeWidth="0.5"
              strokeOpacity="0.5"
              strokeLinecap="round"
            />
            {/* Highlight */}
            <ellipse cx="18" cy="13" rx="2" ry="2.5" fill="#FFF" fillOpacity="0.4" />
          </svg>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="falling-leaves-container">
      {shuffledItems.map((item, index) => (
        <div
          key={item.id}
          className={`falling-item ${item.type}`}
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.animationDelay}s`,
            animationDuration: `${getAnimationDuration(item, index)}s`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            transform: `rotate(${item.rotation}deg)`,
          }}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  )
}

export default FallingLeaves
