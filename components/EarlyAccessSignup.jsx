'use client'
// components/EarlyAccessSignup.jsx
// Main early access waitlist form — submits to /api/signup

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, CheckCircle2, AlertCircle, Loader2, Mail, MapPin, User } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

export default function EarlyAccessSignup() {
    const [form, setForm] = useState({ email: '', pincode: '', name: '' })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle') // idle | loading | success | duplicate | error
    const [serverMessage, setServerMessage] = useState('')

    const validate = () => {
        const newErrors = {}
        if (!form.email) newErrors.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email'
        if (!form.pincode) newErrors.pincode = 'Pincode is required'
        else if (!/^\d{6}$/.test(form.pincode)) newErrors.pincode = 'Enter a valid 6-digit pincode'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return

        setStatus('loading')
        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            setServerMessage(data.message)

            if (data.alreadyRegistered) {
                setStatus('duplicate')
            } else if (data.success) {
                setStatus('success')
                setForm({ email: '', pincode: '', name: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
            setServerMessage('Network error — please try again.')
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
    }

    return (
        <section
            id="early-access"
            className="py-28 px-6 bg-migo-white relative overflow-hidden"
        >
            {/* Top bg accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-migo-lavender/6 blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <ScrollAnimation variant="fadeUp">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="section-tag"><Sparkles size={12} /> Join the Movement</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.1}>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-migo-dark mb-5">
                            Get{' '}
                            <span className="relative inline-block">
                                Early Access
                                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #999CFD, #C5C7FE)' }} />
                            </span>
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.2}>
                        <p className="text-migo-dark/60 text-lg leading-relaxed">
                            Be the first to know when MIGO launches in your city.
                            Sign up now and get priority access + an exclusive launch offer.
                        </p>
                    </ScrollAnimation>
                </div>

                {/* Form / Success states */}
                <ScrollAnimation variant="scale" delay={0.15}>
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="glass-card p-12 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                                    className="w-20 h-20 rounded-full bg-migo-lavender/15 flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle2 size={40} className="text-migo-lavender" />
                                </motion.div>
                                <h3 className="text-2xl font-extrabold text-migo-dark mb-3">You're on the list! 🎉</h3>
                                <p className="text-migo-dark/60 leading-relaxed mb-6">{serverMessage}</p>
                                <p className="text-migo-lavender text-sm font-medium">Check your email for a confirmation ✦</p>
                            </motion.div>
                        ) : status === 'duplicate' ? (
                            <motion.div
                                key="duplicate"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="glass-card p-12 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-migo-lavender/15 flex items-center justify-center mx-auto mb-6">
                                    <Sparkles size={40} className="text-migo-lavender" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-migo-dark mb-3">Already registered! 🚀</h3>
                                <p className="text-migo-dark/60 leading-relaxed">{serverMessage}</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="glass-card p-8 md:p-10"
                            >
                                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                    {/* Email */}
                                    <div>
                                        <label className="block text-migo-dark font-semibold text-sm mb-2">
                                            Email Address <span className="text-migo-lavender">*</span>
                                        </label>
                                        <div className="relative">
                                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-migo-dark/30" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                className={`form-input pl-10 ${errors.email ? 'error' : ''}`}
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="mt-1.5 text-red-500 text-xs flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Pincode */}
                                    <div>
                                        <label className="block text-migo-dark font-semibold text-sm mb-2">
                                            Pincode <span className="text-migo-lavender">*</span>
                                        </label>
                                        <div className="relative">
                                            <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-migo-dark/30" />
                                            <input
                                                type="text"
                                                name="pincode"
                                                value={form.pincode}
                                                onChange={handleChange}
                                                placeholder="6-digit pincode"
                                                maxLength={6}
                                                className={`form-input pl-10 ${errors.pincode ? 'error' : ''}`}
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                        {errors.pincode && (
                                            <p className="mt-1.5 text-red-500 text-xs flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.pincode}
                                            </p>
                                        )}
                                        <p className="mt-1 text-migo-dark/40 text-xs">This helps us prioritize launching in your area first.</p>
                                    </div>

                                    {/* Name (optional) */}
                                    <div>
                                        <label className="block text-migo-dark font-semibold text-sm mb-2">
                                            Your Name <span className="text-migo-dark/30 font-normal">(optional)</span>
                                        </label>
                                        <div className="relative">
                                            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-migo-dark/30" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="What should we call you?"
                                                className="form-input pl-10"
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                    </div>

                                    {/* Server error */}
                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
                                            <AlertCircle size={16} />
                                            {serverMessage}
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="btn-primary w-full py-4 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Saving your spot…
                                            </>
                                        ) : (
                                            'Join Early Access ✦'
                                        )}
                                    </button>

                                    <p className="text-center text-migo-dark/35 text-xs">
                                        No spam, ever. We'll only email you when MIGO launches. 🔒
                                    </p>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </ScrollAnimation>

                {/* Trust badges */}
                <ScrollAnimation variant="fadeUp" delay={0.3} className="mt-8 flex items-center justify-center gap-6 flex-wrap">
                    {['🔒 100% Private', '📍 Location-based', '🚀 Launch Notified'].map((badge) => (
                        <span key={badge} className="text-migo-dark/40 text-xs font-medium">{badge}</span>
                    ))}
                </ScrollAnimation>
            </div>
        </section>
    )
}
