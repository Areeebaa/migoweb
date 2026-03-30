'use client'
// components/OurVision.jsx
// Mission, empowerment values, and founder testimonial slider

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Zap, Globe, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import ScrollAnimation, { StaggerContainer, StaggerItem } from './ScrollAnimation'

const values = [
    {
        icon: <Heart size={20} />,
        title: 'Independence',
        desc: `Every woman deserves the freedom to go wherever she wants, whenever she wants — on her own two wheels.`,
    },
    {
        icon: <Zap size={20} />,
        title: 'Confidence',
        desc: `We build more than riding skills. We build the kind of confidence that changes how women move through the world.`,
    },
    {
        icon: <Globe size={20} />,
        title: 'Accessibility',
        desc: `From tier-1 cities to small towns — we're making women-first riding education accessible across India.`,
    },
]

const testimonials = [
    {
        quote: 'Mobility isn't just about getting from A to B—it's about freedom. MIGO exists to make that freedom accessible to every woman.',
        name: 'Dr. S. Fouzia Sayeedunnisa',
        role: 'Co-Founder, MIGO',
    },
    {
        quote: 'We didn't just see a gap in the market—we saw women being left behind. MIGO is our way of changing that.',
        name: 'Syeda Arriyan Fatima',
        role: 'Co-Founder, MIGO',
    },
    {
        quote: 'Confidence on the road changes everything. When a woman learns to ride, she doesn't just gain a skill—she gains independence.',
        name: 'Adeeba Maryam',
        role: 'Co-Founder, MIGO',
    },
    {
        quote: 'MIGO is a movement to redefine who owns the road.',
        name: 'Adeeba Anees',
        role: 'Co-Founder, MIGO',
    },
]

export default function OurVision() {
    const [current, setCurrent] = useState(0)

    // Auto-slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
    const next = () => setCurrent((c) => (c + 1) % testimonials.length)

    return (
        <section id="vision" className="py-28 px-6 bg-migo-dark relative overflow-hidden">
            {/* BG accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-migo-lavender/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-migo-lavender/5 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <ScrollAnimation variant="fadeUp">
                        <span className="section-tag mb-4 inline-flex">✦ Our Mission</span>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.1}>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-6">
                            Our{' '}
                            <span className="gradient-text">Vision</span>
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.2}>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                            We believe mobility is a right, not a privilege. MIGO exists to give every woman in India the
                            skills, safety, and confidence to ride freely — with women who understand that journey firsthand.
                        </p>
                    </ScrollAnimation>
                </div>

                {/* Values */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20" staggerDelay={0.1}>
                    {values.map((v, i) => (
                        <StaggerItem key={i}>
                            <div className="group glass-card-dark p-8 h-full hover:border-migo-lavender/40 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-migo-lavender/10 flex items-center justify-center text-migo-lavender mb-5 group-hover:bg-migo-lavender group-hover:text-migo-dark transition-all duration-300">
                                    {v.icon}
                                </div>
                                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Founder Testimonial Slider */}
                <ScrollAnimation variant="fadeUp">
                    <div
                        className="relative rounded-3xl border border-migo-lavender/20 p-10 md:p-14 overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, rgba(153,156,253,0.06), transparent)' }}
                    >
                        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-migo-lavender/8 blur-3xl" />

                        {/* Quote icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-migo-lavender/10 border border-migo-lavender/20 flex items-center justify-center">
                                <Quote size={20} className="text-migo-lavender" />
                            </div>
                        </div>

                        {/* Slide area */}
                        <div className="relative min-h-[160px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                                    className="text-center px-4 md:px-16"
                                >
                                    <p className="text-white/80 text-base md:text-xl leading-relaxed italic mb-8">
                                        "{testimonials[current].quote}"
                                    </p>
                                    <div>
                                        <p className="text-migo-lavender font-bold text-sm tracking-wide">
                                            {testimonials[current].name}
                                        </p>
                                        <p className="text-white/30 text-xs mt-1">
                                            {testimonials[current].role}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-center gap-6 mt-8">
                            <button
                                onClick={prev}
                                className="w-9 h-9 rounded-full border border-migo-lavender/30 flex items-center justify-center text-migo-lavender/60 hover:text-migo-lavender hover:border-migo-lavender transition-all duration-200"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            i === current
                                                ? 'bg-migo-lavender w-5'
                                                : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="w-9 h-9 rounded-full border border-migo-lavender/30 flex items-center justify-center text-migo-lavender/60 hover:text-migo-lavender hover:border-migo-lavender transition-all duration-200"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
