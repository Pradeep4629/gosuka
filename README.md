# GOSUKA Business Website

A modern, responsive business website built with React and Vite.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with Vite
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🎭 Beautiful animations and transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.jsx       # Navigation bar
    Hero.jsx         # Hero section
    About.jsx        # About section
    Services.jsx     # Services section
    Contact.jsx      # Contact form
    Footer.jsx       # Footer
  App.jsx           # Main app component
  main.jsx          # Entry point
  index.css         # Global styles
```

## Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1e40af;
  --secondary-color: #10b981;
  /* ... */
}
```

### Updating Content

- Edit component files in `src/components/` to update text, services, and contact information
- Modify `src/components/Hero.jsx` for the hero section
- Update `src/components/Services.jsx` to change services
- Edit `src/components/Contact.jsx` for contact information

## Technologies Used

- React 18
- Vite
- CSS3
- Modern JavaScript (ES6+)

## License

MIT License - feel free to use this project for your business!

