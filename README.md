# Modern Portfolio Website 🚀

A sleek, responsive, and high-performance personal developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, designed for frictionless deployment to **GitHub** and **Vercel**.

---

## 🌟 Highlights & Features

- ⚡ **Next.js App Router & React 19** – Optimized server-side rendering, ultra-fast initial paint.
- 🎨 **Modern Dark Aesthetics** – Polished dark UI with subtle gradient accents, responsive typography, and glassmorphic header.
- 📱 **100% Responsive** – Designed to look great on desktop, tablet, and mobile screens.
- 🛠️ **Centralized Configuration** – All personal information, bio, skills, projects, and work history live in [`src/data/portfolio.ts`](src/data/portfolio.ts) for effortless updating.
- 📦 **Zero-Config Vercel Deployment** – Native integration with Vercel and GitHub Actions CI.

---

## 📁 Project Structure

```text
Portfolio Website/
├── .github/workflows/       # GitHub Actions automated CI workflow
│   └── ci.yml
├── public/                  # Static assets & icons
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind CSS imports & theme styling
│   │   ├── layout.tsx       # Root layout & SEO metadata
│   │   └── page.tsx         # Portfolio single-page layout
│   ├── components/
│   │   ├── Navbar.tsx       # Responsive navigation bar with mobile menu
│   │   ├── Hero.tsx         # Introduction, status pill & call-to-actions
│   │   ├── Skills.tsx       # Categorized technical skills
│   │   ├── Projects.tsx     # Featured project showcase cards
│   │   ├── Experience.tsx   # Career timeline & milestones
│   │   ├── Contact.tsx      # Contact form & social connections
│   │   ├── Icons.tsx        # Optimized SVG vector icons
│   │   └── Footer.tsx       # Clean footer with dynamic year
│   └── data/
│       └── portfolio.ts     # Single source of truth for portfolio data
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```

---

## ✏️ Customizing Your Information

To personalize the portfolio with your own details:
Open [`src/data/portfolio.ts`](src/data/portfolio.ts) and edit:
- **`personal`**: Name, title, status, bio, email, social profile links.
- **`skills`**: Your core frontend, backend, database, and devops proficiencies.
- **`projects`**: Project titles, summaries, tags, live URLs, and GitHub links.
- **`experience`**: Your roles, companies, and key achievements.

---

## 🚢 Deploying to GitHub & Vercel

### Step 1: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new) (e.g. `portfolio`).
2. Run the following commands in your terminal:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel (1-Click)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Import your GitHub repository (`portfolio`).
4. Keep the default settings (Next.js preset) and click **"Deploy"**.
5. Your portfolio will be live worldwide on a custom `*.vercel.app` domain (with free SSL & automated preview deployments on git push)!
