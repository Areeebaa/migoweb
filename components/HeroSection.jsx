'use client'
// components/HeroSection.jsx
// Full-screen hero with scooter SVG animation, floating orbs, CTA buttons

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

// Inline scooter SVG — animated wheels
function ScooterIllustration() {
    return (
        <div className="scooter-bounce relative">
            <svg
                viewBox="0 0 420 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-md"
            >
                {/* Glow behind scooter */}
                <ellipse cx="210" cy="240" rx="120" ry="20" fill="rgba(153,156,253,0.15)" />

                {/* Scooter body */}
                <path
                    d="M80 180 Q90 120 150 110 L260 105 Q310 105 330 130 L350 155 L340 185 L100 190 Z"
                    fill="#000A12"
                    stroke="#999CFD"
                    strokeWidth="2"
                />

                {/* Windshield */}
                <path
                    d="M155 110 Q165 80 195 75 L240 75 L245 105 Z"
                    fill="rgba(153,156,253,0.3)"
                    stroke="#999CFD"
                    strokeWidth="1.5"
                />

                {/* Seat */}
                <path
                    d="M190 108 Q230 100 265 105 L265 118 Q230 113 190 120 Z"
                    fill="#1a1a2e"
                    stroke="#999CFD"
                    strokeWidth="1"
                />

                {/* Handlebar */}
                <line x1="245" y1="90" x2="265" y2="105" stroke="#999CFD" strokeWidth="3" strokeLinecap="round" />
                <circle cx="248" cy="88" r="6" fill="#999CFD" />

                {/* Front fork */}
                <path d="M330 130 L345 185" stroke="#999CFD" strokeWidth="3" strokeLinecap="round" />

                {/* Rear wheel */}
                <g className="wheel-spin" style={{ transformOrigin: '115px 205px' }}>
                    <circle cx="115" cy="205" r="38" fill="#0d1a2e" stroke="#999CFD" strokeWidth="2.5" />
                    <circle cx="115" cy="205" r="28" fill="none" stroke="rgba(153,156,253,0.3)" strokeWidth="1" />
                    <circle cx="115" cy="205" r="8" fill="#999CFD" />
                    {/* Spokes */}
                    {[0, 45, 90, 135].map((angle) => (
                        <line
                            key={angle}
                            x1={115 + 8 * Math.cos((angle * Math.PI) / 180)}
                            y1={205 + 8 * Math.sin((angle * Math.PI) / 180)}
                            x2={115 + 28 * Math.cos((angle * Math.PI) / 180)}
                            y2={205 + 28 * Math.sin((angle * Math.PI) / 180)}
                            stroke="#999CFD"
                            strokeWidth="1.5"
                            opacity="0.6"
                        />
                    ))}
                </g>

                {/* Front wheel */}
                <g className="wheel-spin" style={{ transformOrigin: '335px 200px' }}>
                    <circle cx="335" cy="200" r="34" fill="#0d1a2e" stroke="#999CFD" strokeWidth="2.5" />
                    <circle cx="335" cy="200" r="25" fill="none" stroke="rgba(153,156,253,0.3)" strokeWidth="1" />
                    <circle cx="335" cy="200" r="7" fill="#999CFD" />
                    {[0, 45, 90, 135].map((angle) => (
                        <line
                            key={angle}
                            x1={335 + 7 * Math.cos((angle * Math.PI) / 180)}
                            y1={200 + 7 * Math.sin((angle * Math.PI) / 180)}
                            x2={335 + 25 * Math.cos((angle * Math.PI) / 180)}
                            y2={200 + 25 * Math.sin((angle * Math.PI) / 180)}
                            stroke="#999CFD"
                            strokeWidth="1.5"
                            opacity="0.6"
                        />
                    ))}
                </g>

                {/* Headlight */}
                <ellipse cx="350" cy="148" rx="10" ry="7" fill="#999CFD" opacity="0.9" />
                <path d="M360 145 L380 138 M360 151 L380 155" stroke="#999CFD" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

                {/* Rider — woman silhouette */}
                {/* Body */}
                <path
                    d="M195 115 Q185 120 178 140 Q172 155 175 175 L200 175 Q200 160 202 145 L215 130 Z"
                    fill="#000A12"
                    stroke="#999CFD"
                    strokeWidth="1"
                />
                {/* Skirt/pants */}
                <path
                    d="M175 175 Q178 190 185 195 Q192 190 200 175 Z"
                    fill="#999CFD"
                    opacity="0.7"
                />
                {/* Head */}
                <circle cx="198" cy="98" r="18" fill="#000A12" stroke="#999CFD" strokeWidth="1.5" />
                {/* Hair — long */}
                <path
                    d="M185 95 Q178 108 182 125 Q185 130 187 118"
                    stroke="#999CFD"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.8"
                />
                {/* Helmet highlight */}
                <path d="M185 90 Q195 82 210 87" stroke="#C5C7FE" strokeWidth="2" fill="none" opacity="0.5" />
                {/* Arm to handlebar */}
                <path d="M210 128 Q228 118 248 95" stroke="#000A12" strokeWidth="8" fill="none" strokeLinecap="round" />
                <path d="M210 128 Q230 118 248 95" stroke="#999CFD" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                {/* Speed lines */}
                <line x1="30" y1="170" x2="75" y2="170" stroke="#999CFD" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
                <line x1="20" y1="182" x2="70" y2="182" stroke="#999CFD" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
                <line x1="35" y1="158" x2="68" y2="158" stroke="#999CFD" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
            </svg>
        </div>
    )
}

export default function HeroSection() {
    const scrollToSignup = () => {
        document.querySelector('#early-access')?.scrollIntoView({ behavior: 'smooth' })
    }
    const scrollToAbout = () => {
        document.querySelector('#what-is-migo')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-migo-dark"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-hero-gradient" />

            {/* Floating orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(153,156,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(153,156,253,1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
                {/* Left: Text */}
                <div className="text-center lg:text-left">
                    {/* Eyebrow tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <span className="section-tag">
                            <Sparkles size={12} /> Early Access Open
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6"
                    >
                        Drive Your{' '}
                        <span className="gradient-text">Freedom.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
                    >
                        Learn to ride with{' '}
                        <span className="text-migo-lavender font-semibold">trusted women trainers</span>{' '}
                        near you. A safe, structured, empowering 2-week journey to independence.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <button onClick={scrollToSignup} className="btn-primary text-base px-8 py-4">
                            Join Early Access ✦
                        </button>
                        <button onClick={scrollToAbout} className="btn-secondary text-base px-8 py-4 border-white/20 text-white hover:border-migo-lavender">
                            Learn More →
                        </button>
                    </motion.div>

                    {/* Trust indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
                    >
                        <div className="flex -space-x-2">
                            {['#999CFD', '#C5C7FE', '#7275DB', '#B8BAFC'].map((color, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full border-2 border-migo-dark"
                                    style={{ background: color }}
                                />
                            ))}
                        </div>
                        <p className="text-white/50 text-sm">
                            <span className="text-migo-lavender font-semibold">500+</span> women already signed up
                        </p>
                    </motion.div>
                </div>

                {/* Right: Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        {/* Glow behind illustration */}
                        <div className="absolute inset-0 rounded-full bg-lavender-glow scale-125" />
                        <ScooterIllustration />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-migo-lavender transition-colors"
            >
                <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowDown size={16} />
                </motion.div>
            </motion.button>

            {/* Marquee strip */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 border-t border-migo-lavender/10 bg-migo-lavender/5">
                <div className="marquee-track flex items-center gap-8 text-migo-lavender/60 text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
                    {Array(8).fill('✦ Women Teaching Women  ✦ Drive Your Freedom  ✦ Learn. Ride. Thrive  ✦ Made By Women').map((text, i) => (
                        <span key={i}>{text}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    ))}
                </div>
            </div>
        </section>
    )
}
