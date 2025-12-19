# Front-End Trial Task - Bezawit Teshome Workie

## 🚀 Live Deployment
**View the project here:** :https://parallax-demo-o4sw4eyqt-bezateshome1234gmailcoms-projects.vercel.app/

## 🛠 Tech Stack
- **Framework:** React + Vite (TypeScript)
- **Styling:** Tailwind CSS (v4)
- **Animation:** Framer Motion + React Scroll Parallax
- **Icons:** Lucide React

## 🏗 Architecture & Approach
I chose a **Component-Based Architecture** to keep the codebase modular and readable.

### Key Technical Decisions:
1. **Parallax Engine:** I used a hybrid approach.
   - **Framer Motion (`useScroll`)** for complex transforms (like the "Scroll to Explore" hero fade).
   

2. **Performance Optimization:**

   - Implemented **Responsive Design** by splitting complex animations (like the Logo Slide) into two separate renders: a high-fidelity parallax version for Desktop and a static, performant grid for Mobile.

3. **Styling:**
   - Used **Tailwind CSS** for rapid layout.
   - Implemented complex CSS tricks like `mask-image` and `mix-blend-mode` to integrate the planet assets seamlessly into the dark background without visible borders.


