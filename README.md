# Babe's Bakery Menu Website

A modern, fully responsive React application showcasing Babe's Bakery menu with improved mobile experience, better visual design, and enhanced user interactions.

## Features

- 🎨 Modern, mobile-first responsive design
- 📱 Fully responsive with breakpoints for mobile, tablet, and desktop
- 🎭 Smooth animations and transitions
- 🍔 Interactive menu sections with card-based layouts
- 📋 Complete menu data for Lunch, Breakfast, Beverages, and Baked Goods
- 🎯 Smooth scrolling navigation
- 📞 Click-to-call phone number links

## Technology Stack

- **React 19+** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Modern CSS** - Custom responsive design with CSS Grid and Flexbox
- **GitHub Pages** - Static site hosting

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd new-babes-bakery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

## Deployment to GitHub Pages

### Option 1: Using gh-pages (Recommended)

1. Install gh-pages as a dev dependency:
```bash
npm install --save-dev gh-pages
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

3. Configure GitHub Pages:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the sidebar
   - Under "Source", select the `gh-pages` branch
   - Save the changes

Your site will be available at: `https://<your-username>.github.io/new-babes-bakery/`

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Copy the contents of the `dist` folder to your repository's `gh-pages` branch or a `docs` folder

3. Configure GitHub Pages to serve from the `gh-pages` branch or `docs` folder

## Project Structure

```
new-babes-bakery/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── Header.jsx
│   │   ├── MenuSection.jsx
│   │   ├── MenuCard.jsx
│   │   └── Footer.jsx
│   ├── data/        # Menu data
│   │   └── menuData.js
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html
├── vite.config.js   # Vite configuration
└── package.json
```

## Responsive Breakpoints

- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (2 columns, expanded navigation)
- **Desktop**: > 1024px (3 columns, full navigation)

## Customization

### Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --color-primary: #d4a574;
  --color-primary-dark: #b8915f;
  --color-secondary: #8b6f47;
  /* ... */
}
```

### Menu Items

Edit `src/data/menuData.js` to update menu items, descriptions, and categories.

## License

This project is created for Babe's Bakery.

## Contact

Babe's Bakery  
(541) 476-1710  
Grants Pass, OR
