
export default function About(){ return (
  <main className="container py-12">
    <h1 className="text-3xl font-bold">About Me</h1>
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 prose text-gray-300">
        <p>I'm <strong>Ugochukwu Meshach</strong>. I began building small web tools to automate tasks and soon fell in love with creating products people use. Across multiple projects I focus on performance, accessibility, and building maintainable systems that scale.</p>
        <p>Highlights of my journey include completing a Full-Stack internship at <strong>Pluralcode Academy</strong>, building an e-commerce storefront, a gift-card redemption & referral system, and AI-assisted dashboards. I value clean code, clear APIs, and strong observability for production apps.</p>
        <h3 className="mt-4">How I work</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Write accessible, performant UI with Next.js and Tailwind</li>
          <li>Design REST APIs with Node/Express and MongoDB</li>
          <li>Deploy on Vercel, Railway, or Render with monitoring</li>
        </ul>
        <h3 className="mt-4">Timeline & Achievements</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>2023 — Started building production apps</li>
          <li>2024 — Launched Zutech and Gift-Card projects</li>
          <li>2025 — Pluralcode Academy internship</li>
        </ul>
      </div>
      <aside className="card text-center">
        <img src="https://i.ibb.co/Zp9dshXd/Ugobueze-53ca8918c78af07ace1e.jpg" alt="Ugochukwu" className="w-40 h-40 rounded-full mx-auto"/>
        <h3 className="mt-4 font-semibold">Ugochukwu Meshach</h3>
        <p className="text-sm text-gray-400">Full-Stack Developer — Open to Remote</p>
        <div className="mt-4 flex justify-center gap-3">
          <a href="https://github.com/ugobuez" className="nav-link">GitHub</a>
          <a href="https://www.linkedin.com/in/ugochukwu-meshach-69b830285" className="nav-link">LinkedIn</a>
        </div>
      </aside>
    </div>
  </main>
)}
