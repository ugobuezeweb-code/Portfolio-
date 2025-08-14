
'use client'
import { useState } from 'react'
export default function Contact(){ 
  const [status,setStatus]=useState('idle'); const [msg,setMsg]=useState('')
  async function onSubmit(e){ e.preventDefault(); setStatus('sending'); setMsg('')
    const form=e.currentTarget; const body={ name: form.name.value, email: form.email.value, message: form.message.value }
    const res = await fetch('/api/contact',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })
    const data = await res.json()
    if (res.ok) { setStatus('sent'); setMsg('Message sent — I will reply within 24 hours.') } else { setStatus('error'); setMsg(data.error || 'Failed to send. Please email ugobuezeweb@gmail.com') }
  }
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <form onSubmit={onSubmit} className="card p-6">
          <input name="name" placeholder="Your name" className="w-full mb-3 p-2 bg-transparent border border-white/6 rounded" required />
          <input name="email" type="email" placeholder="Your email" className="w-full mb-3 p-2 bg-transparent border border-white/6 rounded" required />
          <textarea name="message" rows={6} placeholder="Tell me about the role/timeline" className="w-full mb-3 p-2 bg-transparent border border-white/6 rounded" required />
          <button className="btn-primary">Send message</button>
          {msg && <p className={status==='error' ? 'text-red-500 mt-3' : 'text-green-400 mt-3'}>{msg}</p>}
        </form>
        <aside className="card">
          <h3 className="font-semibold">Work with me</h3>
          <p className="mt-2 text-gray-300">I respond quickly to roles and freelance opportunities. Prefer async communication and overlap with GMT+1.</p>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/ugobuez" className="btn-ghost">GitHub</a>
            <a href="https://www.linkedin.com/in/ugochukwu-meshach-69b830285" className="btn-ghost">LinkedIn</a>
          </div>
        </aside>
      </div>
      <p className="mt-4 text-sm text-gray-400">If email delivery fails, contact: <strong>ugobuezeweb@gmail.com</strong></p>
    </main>
  )
}
