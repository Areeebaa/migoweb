'use client'
// components/WhyMIGOExists.jsx
// Problem-solution section with the bold "Made by Women" statement

import { motion } from 'framer-motion'
import { XCircle, CheckCircle2 } from 'lucide-react'
import ScrollAnimation, { StaggerContainer, StaggerItem } from './ScrollAnimation'

const problems = [
    { text: 'Uncomfortable learning from male trainers' },
    { text: 'Almost no access to women instructors' },
    { text: 'Safety concerns during training sessions' },
    { text: 'Cultural and social barriers to learning' },
    { text: 'Lack of structured, beginner-friendly programs' },
]

const solutions = [
    { text: '100% women trainers — always safe & comfortable' },
    { text: 'Trainers verified with licenses and experience' },
    { text: 'Train at your own pace, in your neighborhood' },
    { text: 'Culturally sensitive, women-first approach' },
    { text: '14-day structured curriculum for real confidence' },
]

export default function WhyMIGOExists() {
    return (
        <section id="why-migo" className="py-28 px-6 bg-migo-dark relative overflow-hidden">
            {/* Background orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-migo-lavender/5 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <ScrollAnimation variant="fadeUp">
                        <span className="section-tag mb-4 inline-flex">✦ The Problem</span>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.1}>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-6">
                            Why MIGO{' '}
                            <span className="gradient-text">Exists</span>
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.2}>
                        <p className="text-white/50 text-lg max-w-xl mx-auto">
                            Millions of women want to learn to ride — but the system hasn't been built for them.
                        </p>
                    </ScrollAnimation>
                </div>

                {/* Problem vs Solution grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Before MIGO */}
                    <ScrollAnimation variant="fadeLeft" delay={0.1}>
                        <div className="glass-card-dark p-8 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                                    <XCircle size={20} className="text-red-400" />
                                </div>
                                <h3 className="text-white font-bold text-xl">Before MIGO</h3>
                            </div>
                            <div className="space-y-4">
                                {problems.map((p, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex items-start gap-3"
                                    >
                                        <XCircle size={16} className="text-red-400/60 mt-0.5 flex-shrink-0" />
                                        <p className="text-white/50 text-sm leading-relaxed">{p.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* With MIGO */}
                    <ScrollAnimation variant="fadeRight" delay={0.1}>
                        <div className="glass-card-dark p-8 h-full border-migo-lavender/30 relative overflow-hidden">
                            {/* Glow top-right */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-migo-lavender/10 blur-3xl" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-migo-lavender/15 flex items-center justify-center">
                                    <CheckCircle2 size={20} className="text-migo-lavender" />
                                </div>
                                <h3 className="text-white font-bold text-xl">With MIGO</h3>
                            </div>
                            <div className="space-y-4">
                                {solutions.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 size={16} className="text-migo-lavender mt-0.5 flex-shrink-0" />
                                        <p className="text-white/80 text-sm leading-relaxed">{s.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                {/* Bold Statement */}
                <ScrollAnimation variant="scale" delay={0.1}>
                    <div className="relative text-center py-16 px-8 rounded-3xl border border-migo-lavender/20 overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, rgba(153,156,253,0.05), rgba(153,156,253,0.02))' }}
                    >
                        <div className="absolute inset-0 bg-lavender-glow opacity-60" />
                        <div className="relative z-10">
                            <p className="text-migo-lavender/60 text-sm font-semibold tracking-widest uppercase mb-4">Our Promise</p>
                            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                                Made by Women.
                                <br />
                                <span className="gradient-text">Built for Women.</span>
                            </h3>
                            <p className="mt-6 text-white/50 text-lg max-w-lg mx-auto">
                                Every decision we make puts women's comfort, safety, and empowerment first.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
