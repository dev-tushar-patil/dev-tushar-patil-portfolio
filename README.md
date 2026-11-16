# dev-tushar-patil

Portfolio of **Tushar Patil**, Java Full Stack Developer.

**Live site:** https://dev-tushar-patil.github.io/dev-tushar-patil-portfolio/

Built with React 19, Vite, Tailwind CSS v4, Framer Motion and Lucide.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run deploy   # build and publish dist/ to the gh-pages branch
```

## Editing content

All content lives in `src/data/`. You don't need to touch the components to change it.

| File | What it holds |
|---|---|
| `profileData.js` | name, tagline, email, phone, resume path, achievements, profile links |
| `experienceData.js` | timeline entries |
| `projectsData.js` | company projects, personal projects, "More Projects" strip |
| `skillsData.js` | skill categories and icons |

- **Add a project:** append an object to `personalProjects` (or `companyProjects`).
- **Project links:** set `url` on a project; the card becomes clickable.
- **Screenshots:** put an image in `src/assets/projects/` and point `image` at it.
  The current images are generated mockups and should be replaced with real screenshots.
- **Resume:** copy your PDF to `public/resume/Tushar-Patil-Resume.pdf`.
  The Download Resume button picks it up automatically.
