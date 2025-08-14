
Next.js Portfolio — FINAL Rebuild
--------------------------------

What I built:
- Dark, modern portfolio with tailwind-ready globals and a consistent background.
- Hero, Featured Projects, Skills, About, Contact pages.
- Nodemailer contact API (Ethereal fallback for local testing).
- Resume PDF included at /public/Ugochukwu_Meshach_Resume.pdf
- AAL project removed per your request.

Quickstart (local):
1. npm install
   - On macOS, if you get platform errors: npm install --no-optional
2. cp .env.example .env.local and fill SMTP vars if you want real emails.
3. npm run dev
4. Open http://localhost:3000 (or the port Next prints)

Environment variables (.env.local):
- NEXT_PUBLIC_SITE_URL (your deployed URL)
- CONTACT_TO (your email, eg ugobuezeweb@gmail.com)
- SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / SMTP_SECURE (for production email)
  - If these are not set, the API uses Ethereal and returns preview URLs in the API response.

Notes:
- Replace placeholder 'View Live' links with your actual live URLs in the projects array in app/page.tsx or app/projects/[slug]/page.tsx.
- For best deliverability in production, use a real SMTP provider (Mailgun, Sendinblue, MailerSend, or Gmail App Passwords).

Next steps I can do for you:
- Replace emoji skill badges with SVG icons (simple-icons or devicon).
- Create OG images and dynamic social previews.
- Push this to a GitHub repo and provide Vercel deploy commands.
