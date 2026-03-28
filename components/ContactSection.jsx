// 'use client'
// // components/ContactSection.jsx
// // Contact form + social links, submits to /api/contact

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Mail, MessageSquare, User, Loader2, CheckCircle2, AlertCircle, Instagram, Twitter, Linkedin } from 'lucide-react'
// import ScrollAnimation from './ScrollAnimation'

// export default function ContactSection() {
//     const [form, setForm] = useState({ name: '', email: '', message: '' })
//     const [errors, setErrors] = useState({})
//     const [status, setStatus] = useState('idle') // idle | loading | success | error
//     const [serverMessage, setServerMessage] = useState('')

//     const validate = () => {
//         const e = {}
//         if (!form.name.trim()) e.name = 'Name is required'
//         if (!form.email) e.email = 'Email is required'
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
//         if (!form.message.trim()) e.message = 'Message is required'
//         setErrors(e)
//         return !Object.keys(e).length
//     }

//     const handleSubmit = async (ev) => {
//         ev.preventDefault()
//         if (!validate()) return
//         setStatus('loading')
//         try {
//             const res = await fetch('/api/contact', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(form),
//             })
//             const data = await res.json()
//             setServerMessage(data.message)
//             setStatus(data.success ? 'success' : 'error')
//             if (data.success) setForm({ name: '', email: '', message: '' })
//         } catch {
//             setStatus('error')
//             setServerMessage('Network error, please try again.')
//         }
//     }

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value })
//         if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
//     }

//     const socials = [
//         { icon: <Instagram size={18} />, href: 'https://instagram.com', label: 'Instagram' },
//         { icon: <Twitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
//         { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
//     ]

//     return (
//         <section id="contact" className="py-28 px-6 bg-migo-white relative overflow-hidden">
//             <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-migo-lavender/20 to-transparent" />

//             <div className="max-w-6xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-14">
//                     <ScrollAnimation variant="fadeUp">
//                         <span className="section-tag mb-4 inline-flex">✦ Get in Touch</span>
//                     </ScrollAnimation>
//                     <ScrollAnimation variant="fadeUp" delay={0.1}>
//                         <h2 className="text-4xl sm:text-5xl font-extrabold text-migo-dark mt-4 mb-5">
//                             Contact <span className="gradient-text-dark">Us</span>
//                         </h2>
//                     </ScrollAnimation>
//                     <ScrollAnimation variant="fadeUp" delay={0.2}>
//                         <p className="text-migo-dark/55 text-lg max-w-lg mx-auto">
//                             Have a question, partnership idea, or just want to say hi? We'd love to hear from you.
//                         </p>
//                     </ScrollAnimation>
//                 </div>

//                 <div className="grid md:grid-cols-[1fr_360px] gap-10 items-start">
//                     {/* Form */}
//                     <ScrollAnimation variant="fadeLeft" delay={0.1}>
//                         <div className="glass-card p-8">
//                             <AnimatePresence mode="wait">
//                                 {status === 'success' ? (
//                                     <motion.div
//                                         key="ok"
//                                         initial={{ opacity: 0, scale: 0.9 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         className="text-center py-12"
//                                     >
//                                         <div className="w-16 h-16 rounded-full bg-migo-lavender/15 flex items-center justify-center mx-auto mb-5">
//                                             <CheckCircle2 size={32} className="text-migo-lavender" />
//                                         </div>
//                                         <h3 className="text-xl font-bold text-migo-dark mb-2">Message sent! 🎉</h3>
//                                         <p className="text-migo-dark/55 text-sm">{serverMessage}</p>
//                                         <button className="btn-dark mt-6 text-sm" onClick={() => setStatus('idle')}>Send another message</button>
//                                     </motion.div>
//                                 ) : (
//                                     <motion.form key="form" onSubmit={handleSubmit} noValidate className="space-y-5">
//                                         {/* Name */}
//                                         <div>
//                                             <label className="block text-migo-dark font-semibold text-sm mb-2">Name</label>
//                                             <div className="relative">
//                                                 <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-migo-dark/30" />
//                                                 <input type="text" name="name" value={form.name} onChange={handleChange}
//                                                     placeholder="Your name" className={`form-input pl-10 ${errors.name ? 'error' : ''}`} />
//                                             </div>
//                                             {errors.name && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
//                                         </div>
//                                         {/* Email */}
//                                         <div>
//                                             <label className="block text-migo-dark font-semibold text-sm mb-2">Email</label>
//                                             <div className="relative">
//                                                 <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-migo-dark/30" />
//                                                 <input type="email" name="email" value={form.email} onChange={handleChange}
//                                                     placeholder="you@example.com" className={`form-input pl-10 ${errors.email ? 'error' : ''}`} />
//                                             </div>
//                                             {errors.email && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
//                                         </div>
//                                         {/* Message */}
//                                         <div>
//                                             <label className="block text-migo-dark font-semibold text-sm mb-2">Message</label>
//                                             <div className="relative">
//                                                 <MessageSquare size={15} className="absolute left-4 top-5 text-migo-dark/30" />
//                                                 <textarea name="message" value={form.message} onChange={handleChange}
//                                                     placeholder="Your message…" rows={5}
//                                                     className={`form-input pl-10 resize-none ${errors.message ? 'error' : ''}`} />
//                                             </div>
//                                             {errors.message && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
//                                         </div>
//                                         {status === 'error' && (
//                                             <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
//                                                 <AlertCircle size={15} />{serverMessage}
//                                             </div>
//                                         )}
//                                         <button type="submit" disabled={status === 'loading'}
//                                             className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed">
//                                             {status === 'loading' ? <><Loader2 size={17} className="animate-spin" /> Sending…</> : 'Send Message →'}
//                                         </button>
//                                     </motion.form>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     </ScrollAnimation>

//                     {/* Info sidebar */}
//                     <ScrollAnimation variant="fadeRight" delay={0.15}>
//                         <div className="space-y-5">
//                             {/* Email */}
//                             <div className="glass-card p-6">
//                                 <p className="text-migo-dark/50 text-xs font-semibold uppercase tracking-widest mb-3">Email Us</p>
//                                 <a href="https://mail.google.com/mail/?view=cm&to=migoteamm@gmail.com" className="text-migo-dark font-bold text-base hover:text-migo-lavender transition-colors flex items-center gap-2">
//                                     <Mail size={16} className="text-migo-lavender" />
//                                     migoteamm@gmail.com
//                                 </a>
//                             </div>

//                             {/* Socials */}
//                             <div className="glass-card p-6">
//                                 <p className="text-migo-dark/50 text-xs font-semibold uppercase tracking-widest mb-4">Follow MIGO</p>
//                                 <div className="flex flex-col gap-3">
//                                     {socials.map((s) => (
//                                         <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
//                                             className="flex items-center gap-3 text-migo-dark/60 hover:text-migo-lavender transition-colors font-medium text-sm">
//                                             <span className="w-8 h-8 rounded-xl bg-migo-lavender/10 flex items-center justify-center text-migo-lavender">
//                                                 {s.icon}
//                                             </span>
//                                             {s.label}
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Tag */}
//                             <div className="glass-card p-6 text-center">
//                                 <p className="text-migo-lavender font-extrabold text-lg mb-1">Made by Women.</p>
//                                 <p className="text-migo-dark font-extrabold text-lg">Built for Women.</p>
//                                 <p className="text-migo-dark/40 text-xs mt-2">© 2025 MIGO</p>
//                             </div>
//                         </div>
//                     </ScrollAnimation>
//                 </div>
//             </div>
//         </section>
//     )
// }
'use client'
// components/ContactSection.jsx
// Contact form + social links, submits to /api/contact

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MessageSquare, User, Loader2, CheckCircle2, AlertCircle, Instagram, Twitter, Linkedin } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const [serverMessage, setServerMessage] = useState('')

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!form.email) e.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
        if (!form.message.trim()) e.message = 'Message is required'
        setErrors(e)
        return !Object.keys(e).length
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        if (!validate()) return
        setStatus('loading')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            setServerMessage(data.message)
            setStatus(data.success ? 'success' : 'error')
            if (data.success) setForm({ name: '', email: '', message: '' })
        } catch {
            setStatus('error')
            setServerMessage('Network error, please try again.')
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
    }

    const socials = [
        { icon: <Instagram size={18} />, href: 'https://www.instagram.com/migo_official_app?igsh=MWF1OG16YmtpcTM1eQ%3D%3D', label: 'Instagram' },
        { icon: <Twitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
        { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    ]

    return (
        <section id="contact" className="py-28 px-6 bg-migo-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-migo-lavender/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <ScrollAnimation variant="fadeUp">
                        <span className="section-tag mb-4 inline-flex">✦ Get in Touch</span>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.1}>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-migo-dark mt-4 mb-5">
                            Contact <span className="gradient-text-dark">Us</span>
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.2}>
                        <p className="text-migo-dark/55 text-lg max-w-lg mx-auto">
                            Have a question, partnership idea, or just want to say hi? We'd love to hear from you.
                        </p>
                    </ScrollAnimation>
                </div>

                <div className="grid md:grid-cols-[1fr_360px] gap-10 items-start">
                    {/* Form */}
                    <ScrollAnimation variant="fadeLeft" delay={0.1}>
                        <div className="glass-card p-8">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="ok"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-migo-lavender/15 flex items-center justify-center mx-auto mb-5">
                                            <CheckCircle2 size={32} className="text-migo-lavender" />
                                        </div>
                                        <h3 className="text-xl font-bold text-migo-dark mb-2">Message sent! 🎉</h3>
                                        <p className="text-migo-dark/55 text-sm">{serverMessage}</p>
                                        <button className="btn-dark mt-6 text-sm" onClick={() => setStatus('idle')}>Send another message</button>
                                    </motion.div>
                                ) : (
                                    <motion.form key="form" onSubmit={handleSubmit} noValidate className="space-y-5">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-migo-dark font-semibold text-sm mb-2">Name</label>
                                            <div className="relative">
                                                <User size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-migo-dark/30" />
                                                <input type="text" name="name" value={form.name} onChange={handleChange}
                                                    placeholder="Your name" className={`form-input pl-16 ${errors.name ? 'error' : ''}`} />
                                            </div>
                                            {errors.name && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                                        </div>
                                        {/* Email */}
                                        <div>
                                            <label className="block text-migo-dark font-semibold text-sm mb-2">Email</label>
                                            <div className="relative">
                                                <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-migo-dark/30" />
                                                <input type="email" name="email" value={form.email} onChange={handleChange}
                                                    placeholder="you@example.com" className={`form-input pl-10 ${errors.email ? 'error' : ''}`} />
                                            </div>
                                            {errors.email && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                                        </div>
                                        {/* Message */}
                                        <div>
                                            <label className="block text-migo-dark font-semibold text-sm mb-2">Message</label>
                                            <div className="relative">
                                                <MessageSquare size={15} className="absolute left-4 top-5 text-migo-dark/30" />
                                                <textarea name="message" value={form.message} onChange={handleChange}
                                                    placeholder="Your message…" rows={5}
                                                    className={`form-input pl-10 resize-none ${errors.message ? 'error' : ''}`} />
                                            </div>
                                            {errors.message && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
                                        </div>
                                        {status === 'error' && (
                                            <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
                                                <AlertCircle size={15} />{serverMessage}
                                            </div>
                                        )}
                                        <button type="submit" disabled={status === 'loading'}
                                            className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                                            {status === 'loading' ? <><Loader2 size={17} className="animate-spin" /> Sending…</> : 'Send Message →'}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollAnimation>

                    {/* Info sidebar */}
                    <ScrollAnimation variant="fadeRight" delay={0.15}>
                        <div className="space-y-5">
                            {/* Email */}
                            <div className="glass-card p-6">
                                <p className="text-migo-dark/50 text-xs font-semibold uppercase tracking-widest mb-3">Email Us</p>
                                <a href="https://mail.google.com/mail/?view=cm&to=official.migo.app@gmail.com" className="text-migo-dark hover:text-migo-lavender transition-colors duration-200 flex items-center gap-2">
                                    <Mail size={16} className="text-current transition-colors" />
                                    official.migo.app@gmail.com
                                </a>
                            </div>

                            {/* Socials */}
                            <div className="glass-card p-6">
                                <p className="text-migo-dark/50 text-xs font-semibold uppercase tracking-widest mb-4">Follow MIGO</p>
                                <div className="flex flex-col gap-3">
                                    {socials.map((s) => (
                                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-migo-dark/60 hover:text-migo-lavender transition-colors font-medium text-sm">
                                            <span className="w-8 h-8 rounded-xl bg-migo-lavender/10 flex items-center justify-center text-migo-lavender">
                                                {s.icon}
                                            </span>
                                            {s.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Tag */}
                            <div className="glass-card p-6 text-center">
                                <p className="text-migo-lavender font-extrabold text-lg mb-1">Made by Women.</p>
                                <p className="text-migo-dark font-extrabold text-lg">Built for Women.</p>
                                <p className="text-migo-dark/40 text-xs mt-2">© 2025 MIGO</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}

