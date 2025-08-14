
import Link from 'next/link'
export default function Projects(){ return (
  <main className="container py-12">
    <h1 className="text-3xl font-bold">Projects</h1>
    <div className="mt-6 grid md:grid-cols-2 gap-6">
      <Link href="/projects/giftcard-referral" className="card p-4">Gift-Card Redemption + Referral</Link>
      <Link href="/projects/zutech-ecommerce" className="card p-4">Zutech – E-commerce</Link>
      <Link href="/projects/ai-job-match" className="card p-4">AI Job Match Dashboard</Link>
    </div>
  </main>
)}
