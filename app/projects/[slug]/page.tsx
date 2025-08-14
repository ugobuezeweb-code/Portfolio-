
import { notFound } from 'next/navigation'
const data = {
  'giftcard-referral': {
    title: 'Gift-Card Redemption + Referral',
    img: 'https://i.ibb.co/4gNphhR4/Screenshot-2025-08-14-at-13-12-46.png',
    story: `When I noticed many gift-card platforms lacked transparency and a growth loop, I built this system to combine secure redemption with viral referrals. Users upload gift cards with image proof; admins approve each submission to reduce fraud. A referral system rewards users and tracks leaderboard standings. The app was designed to handle image uploads, fraud checks, and admin workflows.`,
    features: ['Image uploads (Cloudinary)', 'Admin approval workflow', 'Referral tracking & leaderboard', 'Secure JWT auth', 'Admin dashboard & notifications'],
    tech: ['React/Next.js','Express','MongoDB','Cloudinary','Vercel'],
    live: 'https://ugobueze-web.vercel.app'
  },
  'zutech-ecommerce': {
    title: 'Zutech – E-commerce',
    img: 'https://i.ibb.co/20B0YLvN/Screenshot-2025-08-14-at-13-13-25.png',
    story: `Zutech started as a performance-first storefront for small merchants. I focused on SEO, fast image delivery, and a frictionless checkout. Implemented product catalog, cart, and server-side product pages to maximize indexability and speed.`,
    features: ['Product catalog & filters','Cart & checkout','SEO optimized pages','Optimized images (Cloudinary)'],
    tech: ['Next.js','Node.js','MongoDB','Cloudinary'],
    live: 'https://zutech.vercel.app'
  },
  'ai-job-match': {
    title: 'AI Job Match Dashboard',
    img: '',
    story: `An AI-assisted dashboard that scores job matches for candidates using a set of heuristics and machine-learned signals. Built to help recruiters surface top matches quickly.`,
    features: ['Candidate scoring','Job matching algorithm','Dashboard & export'],
    tech: ['Next.js','Python (ML)','Postgres'],
    live: ''
  }
}

export default function Project({ params }:{ params:{ slug:string }}){
  const p = data[params.slug]
  if (!p) return notFound()
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">{p.title}</h1>
      {p.img && <img src={p.img} alt={p.title} className="w-full h-64 object-cover rounded-lg mt-4" />}
      <section className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">The Story</h2>
          <p className="mt-2 text-gray-300">{p.story}</p>
          <h3 className="mt-4 font-semibold">Impact & Outcomes</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>Improved trust with admin verification</li>
            <li>Increased referral-driven signups</li>
            <li>Scalable image handling</li>
          </ul>
        </div>
        <aside className="card">
          <h3 className="font-semibold">Tech & Features</h3>
          <p className="mt-2"><strong>Tech:</strong> {p.tech.join(', ')}</p>
          <ul className="mt-2 list-disc pl-5">
            {p.features.map(f=> <li key={f}>{f}</li>)}
          </ul>
          <div className="mt-4 flex gap-2">
            {p.live ? <a className="btn-primary" href={p.live} target="_blank">View Live</a> : <button className="btn-ghost" disabled>View Live</button>}
            <a className="btn-ghost" href="https://github.com/ugobuez" target="_blank">View Code</a>
          </div>
        </aside>
      </section>
    </main>
  )
}
