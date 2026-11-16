# Sultan Mia — Portfolio

Personal portfolio of **MD Sultan Mia**, a Full Stack Developer from Dhaka, Bangladesh.

🔗 **Live:** [sultan-portfolio.vercel.app](https://sultan-portfolio.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + DaisyUI
- **Animation:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

---

## Features

- Responsive design — mobile, tablet, desktop
- Smooth scroll + active nav link detection
- Animated sections with FadeIn on scroll
- Project details page with dynamic routes
- Floating contact button (WhatsApp, Email, LinkedIn, GitHub)
- Downloadable + viewable CV
- Mobile slide-in drawer navigation
- SEO metadata + Open Graph tags

---

## Sections

| Section | Description |
|---|---|
| Hero | Intro, CTA buttons, tech stack badges |
| About | Bio, info, stats, CV download |
| Skills | Tech categories with skill badges |
| Education | Timeline layout |
| Projects | Card grid with details page |
| Contact | Form + contact info |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/[id]/page.tsx
├── Components/
│   ├── Layouts/
│   │   ├── Navbar/
│   │   └── Footer/
│   ├── Sections/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Education/
│   │   ├── Projects/
│   │   └── Contact/
│   └── Ui/
│       ├── Container.tsx
│       ├── FadeIn.tsx
│       └── FloatingContact.tsx
└── data/
    ├── about.json
    ├── contact.json
    ├── cv.json
    ├── education.json
    ├── projects.json
    └── skills.json
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` branch triggers auto-deploy.

```bash
git add .
git commit -m "update"
git push
```

---

## Contact

- **Email:** sultanmia2257@gmail.com
- **GitHub:** [github.com/Sultanmia22](https://github.com/Sultanmia22)
- **LinkedIn:** [linkedin.com/in/devmdsultanmia](https://linkedin.com/in/devmdsultanmia)
