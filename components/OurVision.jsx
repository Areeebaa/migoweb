'use client'
// components/OurVision.jsx
// Mission, empowerment values, and founder story placeholder

import { motion } from 'framer-motion'
import { Heart, Zap, Globe } from 'lucide-react'
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

const stats = [
    { value: '500+', label: 'Early Signups' },
    { value: '10+', label: 'Cities' },
    { value: '2 Weeks', label: 'To Ride Solo' },
]

export default function OurVision() {
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

                {/* Stats row */}
                <StaggerContainer className="grid grid-cols-3 gap-4 mb-16 max-w-xl mx-auto" staggerDelay={0.1}>
                    {stats.map((stat, i) => (
                        <StaggerItem key={i}>
                            <div className="text-center glass-card-dark py-6 px-4">
                                <p className="text-3xl font-extrabold text-migo-lavender mb-1">{stat.value}</p>
                                <p className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

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

                {/* Founder story placeholder */}
                <ScrollAnimation variant="fadeUp">
                    <div className="relative rounded-3xl border border-migo-lavender/20 p-10 md:p-14 overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, rgba(153,156,253,0.06), transparent)' }}
                    >
                        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-migo-lavender/8 blur-3xl" />
                        <div className="grid md:grid-cols-[120px_1fr] gap-8 items-center relative z-10">
                            {/* Founder avatar placeholder */}
                            <div className="mx-auto md:mx-0">
                                <div className="w-24 h-24 rounded-2xl bg-migo-lavender/10 border border-migo-lavender/20 flex items-center justify-center text-4xl">
                                    👩‍💼
                                </div>
                            </div>
                            <div>
                                <p className="text-white/70 text-base md:text-lg leading-relaxed italic mb-5">
                                    "I founded MIGO because I know what it feels like to want to ride but not have a safe
                                    space to learn. Every girl deserves that breakthrough moment — and I'm building it for them."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <p className="text-migo-lavender font-bold text-sm">Founder, MIGO</p>
                                        {/* Replace with actual founder name */}
                                        <p className="text-white/30 text-xs">Founder Story coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
