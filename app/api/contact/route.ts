
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
const TO = process.env.CONTACT_TO || ''
const HOST = process.env.SMTP_HOST || ''
const PORT = Number(process.env.SMTP_PORT || 587)
const USER = process.env.SMTP_USER || ''
const PASS = process.env.SMTP_PASS || ''
const SECURE = (process.env.SMTP_SECURE || 'false') === 'true'

async function createTransport() {
  if (!HOST || !USER || !PASS) {
    // create Ethereal test account if no SMTP provided (dev only)
    const nodemailerLib = require('nodemailer')
    const test = await nodemailerLib.createTestAccount()
    return nodemailerLib.createTransport({ host: 'smtp.ethereal.email', port: 587, secure: false, auth: { user: test.user, pass: test.pass } })
  }
  return nodemailer.createTransport({ host: HOST, port: PORT, secure: SECURE, auth: { user: USER, pass: PASS } })
}

export async function POST(req) {
  try {
    if (!TO) return NextResponse.json({ error: 'CONTACT_TO not configured on server' }, { status: 500 })
    const json = await req.json(); const { name, email, message } = json
    if (!name || !email || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    const transporter = await createTransport()
    const from = USER || 'no-reply@example.com'
    const info = await transporter.sendMail({ from, to: TO, subject: `Portfolio inquiry from ${name}`, text: `${message}\n\nFrom: ${name} <${email}>`, html: `<p>${message.replace(/\n/g,'<br/>')}</p><hr/><p>From: ${name} &lt;${email}&gt;</p>` })
    // if Ethereal, return preview URL
    const nodemailerLib = require('nodemailer')
    const getTestUrl = nodemailerLib.getTestMessageUrl ? nodemailerLib.getTestMessageUrl(info) : null
    return NextResponse.json({ ok: true, previewUrl: getTestUrl })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Email failed to send' }, { status: 500 })
  }
}
