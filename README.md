# Abhay Garodi — Professional Software Portfolio

A highly optimized, recruiter-ready personal portfolio website showcasing full-stack engineering capability, system designs, AI workflows, and competitive programming achievements. 

Built using **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, featuring modern glassmorphism, responsive navigation drawers, dynamic code terminals, and downloadable professional credentials.

---

## 🚀 Key Features

* **Grounded AI Case Studies**: In-depth breakdowns of real projects, including system architectures, code snippets (RAG prompt grounding, Spring Security filters), and metric outcomes.
* **Interactive Code Terminal**: A beautiful live-updating typewriter terminal on the hero landing page representing system initialization protocols.
* **Recruiter-First Integrations**:
  * **Verified PDF Certificates**: Integrated downloadable credentials (including Anthropic's Claude Cowork certification) opening directly in a new tab.
  * **Direct Resume Access**: Quick-download CTAs linked directly to a professional PDF copy.
  * **Unified Coding Badges**: Quick-nav tiles linking LeetCode, HackerRank, GeeksforGeeks, and GitHub profiles with live stats.
* **Performance-First Design**: Fully static generation support with responsive side navigation layout for desktop and slide-out header menu for mobile viewports.
* **Responsive Dark/Light System**: Dynamic client-side theme synchronization using `next-themes` with custom-designed scrollbars and color palettes.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | Next.js 14 (React 18, App Router), TypeScript |
| **Styling & Theme** | Tailwind CSS, CSS Grid/Flexbox, `next-themes` |
| **Animations** | CSS Keyframe Animations, Micro-interaction Hovers |
| **Icons & Fonts** | Google Fonts (Hanken Grotesk, JetBrains Mono), Material Symbols |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```bash
abhay-garodi-portfolio/
├── public/                 # Static assets (Resume PDF, Headshots, Certificates)
│   ├── images/             # Profile photos and graphics
│   ├── resume.pdf          # Professional Resume PDF
│   └── introduction-to-claude-cowork.pdf
├── src/
│   ├── app/                # Next.js App Router Pages
│   │   ├── about/          # Profile bio, timeline, skills, and certifications
│   │   ├── projects/       # Projects gallery and dynamic case study slugs
│   │   ├── globals.css     # Tailwind overrides & custom animations layer
│   │   └── layout.tsx      # Main wrapper & metadata configurations
│   ├── components/         # Reusable UI Components
│   │   ├── ThemeToggle.tsx # Theme toggling logic
│   │   ├── TopNavBar.tsx   # Mobile-friendly top header menu
│   │   ├── SideNavBar.tsx  # Desktop-persistent sidebar navigation
│   │   ├── Typewriter.tsx  # Dynamic terminal typing effect
│   │   └── AnimatedSection.tsx # Entrance viewport motion wrapper
│   └── lib/
│       └── projects.ts     # Static metadata content for projects & case studies
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Design tokens (Colors, Typography, Animations)
└── tsconfig.json           # TypeScript configuration options
```

---

## 💻 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

Ensure you have Node.js (version 18 or higher recommended) and npm installed.

```bash
node -v
npm -v
```

### Installation

1. Clone or download the repository:
   ```bash
   git clone https://github.com/abhaygarodi/AbhayPortfolio.git
   cd AbhayPortfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the live site.

### Creating a Production Build

To build the optimized production output:

```bash
npm run build
npm run start
```

---

## 📝 Unified Brand & Identity

This portfolio represents professional work at **Ravulapati TecHub**, building the **ImpactSuite.AI** field-force automation product.
For inquiries, please contact:
* **Email**: [abhayhgarodi365@gmail.com](mailto:abhayhgarodi365@gmail.com)
* **LinkedIn**: [linkedin.com/in/abhaygarodi](https://linkedin.com/in/abhaygarodi)
* **LeetCode**: [leetcode.com/u/abhaygarodi18/](https://leetcode.com/u/abhaygarodi18/)
* **GitHub**: [github.com/abhaygarodi](https://github.com/abhaygarodi)
