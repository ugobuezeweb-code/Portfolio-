
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Ugochukwu Meshach – Full‑Stack Developer',
  description: 'I build production-ready web apps with React, Next.js, TypeScript, and Node.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container flex items-center justify-between">
            <a href="/" className="text-xl font-bold">Ugochukwu Meshach</a>
            <nav className="flex items-center gap-3">
              <a className="nav-link" href="/projects">Projects</a>
              <a className="nav-link" href="/about">About</a>
              <a className="nav-link" href="/hire-me">Contact</a>
              <a className="nav-link" href="/public/Ugochukwu_Meshach_Resume.pdf">Resume</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} Ugochukwu Meshach — <a href="https://github.com/ugobuez">GitHub</a> · <a href="https://www.linkedin.com/in/ugochukwu-meshach-69b830285">LinkedIn</a>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
