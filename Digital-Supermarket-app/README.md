# 🛒 Digital Supermarket App — Frontend Sample Project

A sample and experimental frontend project for a **Digital Supermarket** web application built with **React** and **Vite**. This project is intended for learning and exploring modern frontend development practices including component-based architecture, routing, styling, and containerization with Docker.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI component library |
| Vite | Fast frontend build tool and dev server |
| JSX | Component templating |
| CSS Modules | Component-scoped styling |
| ESLint | Code linting and quality checks |
| Docker | Containerized deployment |

---

## ✅ What's Covered

- Component-based UI structure with React
- Sign-up page with form handling
- App routing setup via `App.jsx`
- Global and scoped CSS styling
- Vite configuration for fast development builds
- Dockerfile for containerized deployment
- ESLint configuration for clean code standards

---

## ⚙️ Prerequisites

- Node.js 18+ installed
- npm or yarn installed
- Docker (optional, for containerized run)

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/Digital-Supermarket-app.git

# Navigate to the project
cd Digital-Supermarket-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🐳 Run with Docker

```bash
# Build the Docker image
docker build -t digital-supermarket-app .

# Run the container
docker run -p 3000:3000 digital-supermarket-app
```

---

## 📁 Project Structure

```
Digital-Supermarket-app/
├── public/                        # Static assets
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── SignUpPage/
│   │       ├── SignUpPage.jsx      # Sign-up form component
│   │       └── SignUpPage.css      # Sign-up page styles
│   ├── App.jsx                    # Root component and routing
│   ├── main.jsx                   # App entry point
│   └── index.css                  # Global styles
├── Dockerfile                     # Docker configuration
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint rules
└── package.json                   # Project dependencies
```

---

> ⚠️ **Note:** This is a sample and experimental project intended for learning purposes. Features and structure may change as development progresses.
