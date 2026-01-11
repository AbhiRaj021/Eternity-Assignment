# Myewacare Landing Page (Eternity Assignment)

This project is a modern, responsive landing page for **Myewacare**, focusing on health and wellness packages. It features a pixel-perfect implementation of provided designs, including a custom hexagon layout, a responsive navigation bar, and a dynamic hero section.

![Project Preview](public/landingPage.png)

## 🚀 Tech Stack

- **Framework:** [React](https://reactjs.org/) (TypeScript)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Poppins (Google Fonts)

## ✨ Features

- **Responsive Navbar:**
  - Standard desktop navigation with hover effects.
  - Mobile-responsive hamburger menu with smooth transitions.
  
- **Adaptive Landing Section:**
  - **Mobile:** Vertical stack layout for readability.
  - **Laptop/Tablet:** Fluid side-by-side flex layout.
  - **Desktop (1440px+):** Strict absolute positioning to match the design mockups pixel-for-pixel.

- **Custom Hexagon Component:**
  - Interactive hexagon grid layout for features ("Selecting tests", "Doctor consultations", etc.).
  - Responsive fallback for smaller screens (vertical stack).
  - SVG-based hexagonal shapes and connectors.

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbhiRaj021/Eternity-Assignment.git
   cd Eternity Assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Folder Structure

```
src/
├── Components/
│   ├── HomePage/
│   │   ├── HeroSection.tsx   # Combines LandingPage and Hexagon
│   │   ├── LandingPage.tsx   # Main hero banner with responsive layouts
│   │   └── Hexagon.tsx       # Custom SVG hexagon feature grid
│   └── Navbar/
│       └── Navbar.tsx        # Responsive navigation bar
├── App.tsx                   # Main application entry
└── main.tsx                  # React DOM rendering
```

## 🎨 Design Decisions

- **Pixel Perfection:** The application switches to a fixed coordinate system on large screens (>1440px) to ensure the design matches the provided Figma/image references exactly.
- **Fluid Layouts:** For layouts between 1024px and 1440px, a flex-row approach is used to prevent element overlap while maintaining a horizontal aesthetic.
- **Mobile First:** All components degrade gracefully to vertical stacks on smaller screens for optimal mobile usability.
