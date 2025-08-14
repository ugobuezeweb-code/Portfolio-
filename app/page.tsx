
import Link from 'next/link'
import SkillIcon from '../components/SkillIcon'

const projects = [
  { slug: 'giftcard-referral', title: 'Gift-Card Redemption + Referral', desc: 'Upload gift cards, admin approval workflow, referral tracking & leaderboard.', img: 'https://i.ibb.co/4gNphhR4/Screenshot-2025-08-14-at-13-12-46.png', live: 'https://ugobueze-web.vercel.app' },
  { slug: 'zutech-ecommerce', title: 'Zutech – E-commerce', desc: 'SEO-optimized storefront with checkout UX and image optimization.', img: 'https://i.ibb.co/20B0YLvN/Screenshot-2025-08-14-at-13-13-25.png', live: 'https://zutech.vercel.app' },
  { slug: 'ai-job-match', title: 'AI Job Match Dashboard', desc: 'Job scoring dashboard with matching algorithms and dashboards.', img: '', live: '' },
]

export default function HomePage(){
  return (
    <main className="container py-12">
      <section className="hero grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm text-gray-400">Full‑Stack • React • Next.js • TypeScript • Node • MongoDB</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">I build fast, reliable web apps that ship to production</h1>
          <p className="mt-4 text-gray-300 max-w-xl">From e-commerce stores to referral systems and production-grade dashboards — I design, build, and deploy with a focus on performance, accessibility, and real user value.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects" className="btn-primary">View Projects</Link>
            <Link href="/hire-me" className="btn-ghost">Contact</Link>
          </div>
          <div className="mt-6 text-gray-400">
            <div>Open to Remote · GMT+1</div>
            <div className="mt-2">4+ projects shipped · ~1.7s LCP · 99.9% uptime</div>
          </div>
        </div>
        <div className="card text-center">
          <img src="https://i.ibb.co/Zp9dshXd/Ugobueze-53ca8918c78af07ace1e.jpg" alt="Ugochukwu" className="w-36 h-36 rounded-full mx-auto" />
          <h3 className="mt-4 font-semibold">Ugochukwu Meshach</h3>
          <p className="text-sm text-gray-400">Full‑Stack Developer — Open to Remote</p>
          <div className="mt-4 flex justify-center gap-2">
            <a href="https://github.com/ugobuez" className="nav-link">GitHub</a>
            <a href="https://www.linkedin.com/in/ugochukwu-meshach-69b830285" className="nav-link">LinkedIn</a>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <SkillIcon name="React" />
            <SkillIcon name="Next" />
            <SkillIcon name="TypeScript" />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p=> (
            <article key={p.slug} className="card">
              {p.img ? <img src={p.img} className="w-full h-48 object-cover rounded-md" alt={p.title}/> : null}
              <div className="mt-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-300 mt-2">{p.desc}</p>
                <div className="mt-4 flex gap-2">
                  <Link href={'/projects/'+p.slug}><button className="btn-ghost">Details</button></Link>
                  {p.live ? <a href={p.live} target="_blank" className="btn-primary">View Live</a> : <button className="btn-ghost" disabled>View Live</button>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <h4 className="font-semibold">Frontend</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              <SkillIcon name="React" /><SkillIcon name="Next" /><SkillIcon name="TypeScript" /><SkillIcon name="Tailwind" />
            </div>
          </div>
          <div className="card">
            <h4 className="font-semibold">Backend & DevOps</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              <SkillIcon name="Node" /><SkillIcon name="MongoDB" /><SkillIcon name="Nodemailer" /><SkillIcon name="AWS" /><SkillIcon name="Docker" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
