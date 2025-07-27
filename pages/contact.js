import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        {submitted ? (
          <p className="text-green-400">Thanks for reaching out! I'll get back to you soon.</p>
        ) : (
          <form onSubmit={onSubmit} className="max-w-xl space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input className="w-full px-3 py-2 rounded bg-gray-800" name="name" value={form.name} onChange={onChange} required />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full px-3 py-2 rounded bg-gray-800" name="email" value={form.email} onChange={onChange} required />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea className="w-full px-3 py-2 rounded bg-gray-800" name="message" rows="5" value={form.message} onChange={onChange} required />
            </div>
            <button className="bg-blue-600 px-5 py-2 rounded text-white" type="submit">Send</button>
          </form>
        )}
      </main>
      <Footer />
    </>
  )
}
