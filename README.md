### Job Portal (React + Vite)

Live app: https://job-portal-frontend-nu.vercel.app/

A modern job portal where candidates can browse and apply to jobs, and recruiters can manage companies, post jobs, and review applicants. Built with React, Vite, Tailwind CSS, Redux Toolkit, and React Router.

### Features
- **Authentication**: Signup/Login with role-based access (student/recruiter)
- **Job browsing**: Search and filter jobs, view job details
- **Apply to jobs**: Students can submit applications and track applied jobs
- **Recruiter dashboard**: Manage companies and jobs, view applicants
- **Responsive UI**: Tailwind CSS + shadcn/ui components, icons via lucide-react
- **State management**: Redux Toolkit with persistence

### Tech stack
- **Frontend**: React 18, Vite, React Router, Redux Toolkit, Tailwind CSS, shadcn/ui
- **UX/Components**: lucide-react, embla-carousel-react, tailwindcss-animate
- **HTTP**: axios

### Configuration
API endpoints are defined in `src/utils/constant.js`:
- `USER_API_END_POINT`
- `JOB_API_END_POINT`
- `APPLICATION_API_END_POINT`
- `COMPANY_API_END_POINT`

Update these values if your backend URLs change.

```js
// src/utils/constant.js
export const USER_API_END_POINT = "https://<your-backend>/api/v1/user";
export const JOB_API_END_POINT = "https://<your-backend>/api/v1/job";
export const APPLICATION_API_END_POINT = "https://<your-backend>/api/v1/application";
export const COMPANY_API_END_POINT = "https://<your-backend>/api/v1/company";
```

### Getting started
Prerequisites: Node 18+

1) Install dependencies
```bash
npm install
```

2) Run the dev server
```bash
npm run dev
```

3) Production build
```bash
npm run build
npm run preview
```

### Project structure (frontend)
```
frontend/
  src/
    components/       # UI components and pages (admin, auth, shared, ui)
    hooks/            # Custom data-fetching hooks
    redux/            # Redux slices and store
    utils/            # Constants and helpers
    main.jsx          # App bootstrap
    App.jsx           # Routes/layout
  index.html          # Vite entry HTML
  tailwind.config.js  # Tailwind theme/config
  postcss.config.js   # PostCSS plugins
  vite.config.js      # Vite configuration
```

### Deployment
- Build the project: `npm run build`
- Deploy the `dist/` directory to your static hosting (e.g., Vercel)

