'use client'
// components/WhatIsMIGO.jsx
// Feature grid section explaining the MIGO platform

import { ShieldCheck, MapPin, Star, Clock, Users, Award } from 'lucide-react'
import ScrollAnimation, { StaggerContainer, StaggerItem } from './ScrollAnimation'

const features = [
    {
        icon: <Users size={22} />,
        title: 'Women Trainers Only',
        desc: 'Every trainer on MIGO is a woman — creating a comfortable, judgment-free learning environment.',
    },
    {
        icon: <ShieldCheck size={22} />,
        title: 'Verified & Licensed',
        desc: 'All trainers are background-checked with valid driving licenses and proven experience.',
    },
    {
        icon: <MapPin size={22} />,
        title: 'Trainers Near You',
        desc: 'Search by location and connect with certified trainers right in your neighborhood.',
    },
    {
        icon: <Clock size={22} />,
        title: '2-Week Program',
        desc: 'A structured, progressive 14-day curriculum covering basics to confident riding.',
    },
    {
        icon: <Star size={22} />,
        title: 'Ratings & Reviews',
        desc: 'Choose trainers based on real reviews and ratings from other women learners.',
    },
    {
        icon: <Award size={22} />,
        title: 'Safe Learning',
        desc: 'Dedicated practice sessions in safe environments — your comfort is always the priority.',
    },
]

export default function WhatIsMIGO() {
    return (
        <section id="what-is-migo" className="py-28 px-6 bg-migo-white relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-migo-lavender/5 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <ScrollAnimation variant="fadeUp">
                        <span className="section-tag mb-4 inline-flex">✦ The Platform</span>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.1}>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-migo-dark mt-4 mb-6">
                            What is{' '}
                            <span className="relative inline-block">
                                MIGO?
                                <span
                                    className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-migo-lavender"
                                    style={{ background: 'linear-gradient(90deg, #999CFD, #C5C7FE)' }}
                                />
                            </span>
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.2}>
                        <p className="text-migo-dark/60 text-lg leading-relaxed max-w-2xl mx-auto">
                            MIGO is a marketplace that connects women who want to learn two-wheeler riding
                            with <span className="text-migo-dark font-semibold">verified, experienced women trainers</span> in
                            their city. Think of it as your personal riding coach — found, booked, and managed on one app.
                        </p>
                    </ScrollAnimation>
                </div>

                {/* Feature Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
                    {features.map((feature, idx) => (
                        <StaggerItem key={idx}>
                            <div className="group glass-card p-7 hover:shadow-card-hover transition-all duration-300 cursor-default h-full">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-migo-lavender/10 border border-migo-lavender/20 flex items-center justify-center text-migo-lavender mb-5 group-hover:bg-migo-lavender group-hover:text-migo-dark transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-migo-dark text-lg mb-2">{feature.title}</h3>
                                <p className="text-migo-dark/55 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Bottom CTA nudge */}
                <ScrollAnimation variant="fadeUp" delay={0.2} className="text-center mt-16">
                    <p className="text-migo-dark/50 text-base mb-4">Ready to find your trainer?</p>
                    <button
                        onClick={() => document.querySelector('#early-access')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-dark"
                    >
                        Join the Waitlist
                    </button>
                </ScrollAnimation>
            </div>
        </section>
    )
}
