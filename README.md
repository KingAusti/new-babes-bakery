<div align="center">

# 🍰 Babe's Bakery Menu Website

**A modern, fully responsive React application showcasing Babe's Bakery menu with improved mobile experience, better visual design, and enhanced user interactions.**

[![React](https://img.shields.io/badge/React-19+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

[🚀 Live Demo](#) • [📖 Documentation](#getting-started) • [🐛 Report Bug](#) • [💡 Request Feature](#)

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Building for Production](#building-for-production)
- [📦 Deployment](#-deployment)
  - [Option 1: Using gh-pages (Recommended)](#option-1-using-gh-pages-recommended)
  - [Option 2: Manual Deployment](#option-2-manual-deployment)
- [📁 Project Structure](#-project-structure)
- [📱 Responsive Breakpoints](#-responsive-breakpoints)
- [🎨 Customization](#-customization)
- [📞 Contact](#-contact)

---

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🎨 **Modern Design** | Mobile-first responsive design with beautiful UI |
| 📱 **Fully Responsive** | Breakpoints for mobile, tablet, and desktop |
| 🎭 **Smooth Animations** | Elegant transitions and interactive elements |
| 🍔 **Interactive Menu** | Card-based layouts for easy browsing |
| 📋 **Complete Menu Data** | Lunch, Breakfast, Beverages, and Baked Goods |
| 🎯 **Smooth Navigation** | Seamless scrolling between sections |
| 📞 **Click-to-Call** | Direct phone number links for easy contact |

</div>

---

## 🛠️ Technology Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| **React 19+** | Modern React with hooks for component-based architecture |
| **Vite** | Lightning-fast build tool and development server |
| **Modern CSS** | Custom responsive design with CSS Grid and Flexbox |
| **GitHub Pages** | Free static site hosting |

</div>

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js

> 💡 **Tip:** You can check your Node.js version by running `node --version` in your terminal.

### Installation

Follow these steps to get the project up and running:

#### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd new-babes-bakery
```

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Start the development server

```bash
npm run dev
```

#### 4️⃣ Open in browser

Navigate to `http://localhost:5173` in your preferred browser.

> 🎉 **Success!** You should now see the Babe's Bakery website running locally.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate an optimized production build in the `dist` directory, ready for deployment.

---

## 📦 Deployment

### Option 1: Using gh-pages (Recommended)

This is the easiest and most automated way to deploy to GitHub Pages.

#### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

#### Step 2: Deploy

```bash
npm run deploy
```

This command will:
- ✅ Build the project
- ✅ Push it to the `gh-pages` branch
- ✅ Make it ready for GitHub Pages

#### Step 3: Configure GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **"Pages"** in the sidebar
3. Under **"Source"**, select the `gh-pages` branch
4. Click **Save**

Your site will be available at:
```
https://<your-username>.github.io/new-babes-bakery/
```

### Option 2: Manual Deployment

If you prefer manual control over the deployment process:

#### Step 1: Build the project

```bash
npm run build
```

#### Step 2: Deploy the dist folder

Copy the contents of the `dist` folder to your repository's:
- `gh-pages` branch, or
- `docs` folder in your main branch

#### Step 3: Configure GitHub Pages

Configure GitHub Pages to serve from the `gh-pages` branch or `docs` folder in your repository settings.

---

## 📁 Project Structure

```
new-babes-bakery/
├── 📁 public/              # Static assets
│   └── vite.svg
├── 📁 src/
│   ├── 📁 components/      # React components
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── MenuSection.jsx
│   │   ├── MenuSection.css
│   │   ├── MenuCard.jsx
│   │   ├── MenuCard.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── 📁 data/            # Menu data
│   │   └── menuData.js
│   ├── 📁 assets/          # Images and other assets
│   ├── App.jsx             # Main app component
│   ├── App.css             # App styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

---

## 📱 Responsive Breakpoints

The website is fully responsive and optimized for all device sizes:

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| 📱 **Mobile** | `< 768px` | Single column, hamburger menu |
| 📱 **Tablet** | `768px - 1024px` | 2 columns, expanded navigation |
| 💻 **Desktop** | `> 1024px` | 3 columns, full navigation |

---

## 🎨 Customization

### Colors

Customize the color scheme by editing CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #d4a574;
  --color-primary-dark: #b8915f;
  --color-secondary: #8b6f47;
  /* Add more custom colors here */
}
```

### Menu Items

Update menu items, descriptions, and categories by editing `src/data/menuData.js`:

```javascript
export const menuData = {
  breakfast: [
    {
      name: "Item Name",
      description: "Item description",
      price: "$X.XX"
    },
    // Add more items...
  ],
  // Add more categories...
};
```

---

## 📞 Contact

<div align="center">

### 🍰 Babe's Bakery

**📍 Location:** Grants Pass, OR  
**📞 Phone:** [(541) 476-1710](tel:+15414761710)

---

<div align="center">

**Made with ❤️ for Babe's Bakery**

⭐ Star this repo if you find it helpful!

</div>
