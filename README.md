# Developer Portfolio

A modern, responsive developer portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Introduction with name, role, bio, and quick stats
- **About Page**: Detailed bio and categorized skills (Automation, Programming, Tools, Cloud/DevOps)
- **Projects Page**: Showcase of projects with tech stack, GitHub links, and live demos
- **Experience Page**: Professional experience and internships with detailed descriptions
- **Certifications Page**: Professional certifications and achievements
- **Contact Page**: Contact form and social media links

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Tailwind CSS** for styling
- **shadcn/ui** components for UI elements
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

All portfolio content is stored in `src/data/portfolio.ts`. Update the following to personalize:

- `personalInfo`: Your name, role, bio, and contact information
- `skills`: Your technical skills categorized by type
- `projects`: Your project portfolio
- `experiences`: Your work experience and internships
- `certifications`: Your professional certifications

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation, Footer, Section components
│   └── ui/              # Reusable UI components (Button, Card, etc.)
├── data/
│   └── portfolio.ts     # Portfolio data (projects, skills, experience)
├── pages/               # Page components (Home, About, Projects, etc.)
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## Features Highlights

- ✅ Responsive design (mobile-first)
- ✅ Smooth navigation with React Router
- ✅ SEO-friendly structure
- ✅ Modern UI with shadcn/ui components
- ✅ Easy to customize and extend
- ✅ Type-safe with TypeScript
- ✅ Clean, maintainable code structure

## License

This project is open source and available for personal use.
