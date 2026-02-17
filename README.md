# ⚡ Sanjeth's Portfolio (Steel Glass Edition)

A modern, high-performance personal portfolio website featuring a **Steel Grey Glassmorphism** theme. Built with React, Tailwind CSS v4, and Framer Motion, it offers a premium, industrial-tech aesthetic with deep slate gradients and cyan accents.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

- **Steel Glassmorphism**: Frosted glass cards with metallic borders and inner glows (`backdrop-blur-xl`, `bg-white/10`).
- **3D Particle Background**: Subtle floating silver dust effect using `@react-three/fiber` for depth.
- **Smooth Scrolling**: Integrated `Lenis` for a luxurious, buttery-smooth scroll experience.
- **Micro-Interactions**:
    - Magnetic hover effects on cards.
    - **Pulsating Status Dot**: A minimalist, cyan-glowing indicator in the header showing availability.
    - Neon/Cyan glow effects on badges and buttons.
- **Responsive Design**: Fully responsive layout that looks great on all devices.

## 🛠 Tech Stack

- **Frontend**: [React](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/sanjeth2006/FUTURE_FS_01.git
    cd FUTURE_FS_01
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # Important: Ensure @tailwindcss/postcss is installed for v4 support
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🌍 Deployment

The project is configured for **GitHub Pages** using the `gh-pages` package.

### How to Deploy
Run this single command to build and deploy:
```bash
npm run deploy
```

Your site will be live at:
**[https://sanjeth2006.github.io/FUTURE_FS_01/](https://sanjeth2006.github.io/FUTURE_FS_01/)**

### Configuration Details
- **Base Path**: `/FUTURE_FS_01/` (Set in `vite.config.js`)
- **Homepage**: Configured in `package.json`

## 📂 Project Structure

```
src/
├── components/       # UI Components (Header, About, Projects, etc.)
│   ├── Background.jsx  # 3D Particle System
│   └── ...
├── data/            # Static data (portfolio.js)
├── index.css        # Global styles & Tailwind directives
├── main.jsx         # Entry point
└── App.jsx          # Main layout & routing
```

## 🎨 Customization

- **Theme Colors**: Modified in `src/index.css` (Background gradient, text colors).
- **Data**: Update `src/data/portfolio.js` to change your bio, projects, and skills without touching the UI code.

---

© 2026 Sanjeth. Built for the future.
