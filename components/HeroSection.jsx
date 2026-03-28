// // 'use client'
// // // components/HeroSection.jsx
// // // Full-screen hero with scooter SVG animation, floating orbs, CTA buttons

// // import { motion } from 'framer-motion'

// // import { ArrowDown, Sparkles } from 'lucide-react'

// // // Inline scooter SVG — animated wheels
// // function ScooterIllustration() {
// //     return (
// //         <div className="scooter-bounce relative">
// //             <svg
// //                 viewBox="0 0 420 280"
// //                 fill="none"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="w-full max-w-md"
// //             >
// //                 {/* Glow behind scooter */}
// //                 <ellipse cx="210" cy="240" rx="120" ry="20" fill="rgba(153,156,253,0.15)" />

// //                 {/* Scooter body */}
// //                 <path
// //                     d="M80 180 Q90 120 150 110 L260 105 Q310 105 330 130 L350 155 L340 185 L100 190 Z"
// //                     fill="#000A12"
// //                     stroke="#999CFD"
// //                     strokeWidth="2"
// //                 />

// //                 {/* Windshield */}
// //                 <path
// //                     d="M155 110 Q165 80 195 75 L240 75 L245 105 Z"
// //                     fill="rgba(153,156,253,0.3)"
// //                     stroke="#999CFD"
// //                     strokeWidth="1.5"
// //                 />

// //                 {/* Seat */}
// //                 <path
// //                     d="M190 108 Q230 100 265 105 L265 118 Q230 113 190 120 Z"
// //                     fill="#1a1a2e"
// //                     stroke="#999CFD"
// //                     strokeWidth="1"
// //                 />

// //                 {/* Handlebar */}
// //                 <line x1="245" y1="90" x2="265" y2="105" stroke="#999CFD" strokeWidth="3" strokeLinecap="round" />
// //                 <circle cx="248" cy="88" r="6" fill="#999CFD" />

// //                 {/* Front fork */}
// //                 <path d="M330 130 L345 185" stroke="#999CFD" strokeWidth="3" strokeLinecap="round" />

// //                 {/* Rear wheel */}
// //                 <g className="wheel-spin" style={{ transformOrigin: '115px 205px' }}>
// //                     <circle cx="115" cy="205" r="38" fill="#0d1a2e" stroke="#999CFD" strokeWidth="2.5" />
// //                     <circle cx="115" cy="205" r="28" fill="none" stroke="rgba(153,156,253,0.3)" strokeWidth="1" />
// //                     <circle cx="115" cy="205" r="8" fill="#999CFD" />
// //                     {/* Spokes */}
// //                     {[0, 45, 90, 135].map((angle) => (
// //                         <line
// //                             key={angle}
// //                             x1={115 + 8 * Math.cos((angle * Math.PI) / 180)}
// //                             y1={205 + 8 * Math.sin((angle * Math.PI) / 180)}
// //                             x2={115 + 28 * Math.cos((angle * Math.PI) / 180)}
// //                             y2={205 + 28 * Math.sin((angle * Math.PI) / 180)}
// //                             stroke="#999CFD"
// //                             strokeWidth="1.5"
// //                             opacity="0.6"
// //                         />
// //                     ))}
// //                 </g>

// //                 {/* Front wheel */}
// //                 <g className="wheel-spin" style={{ transformOrigin: '335px 200px' }}>
// //                     <circle cx="335" cy="200" r="34" fill="#0d1a2e" stroke="#999CFD" strokeWidth="2.5" />
// //                     <circle cx="335" cy="200" r="25" fill="none" stroke="rgba(153,156,253,0.3)" strokeWidth="1" />
// //                     <circle cx="335" cy="200" r="7" fill="#999CFD" />
// //                     {[0, 45, 90, 135].map((angle) => (
// //                         <line
// //                             key={angle}
// //                             x1={335 + 7 * Math.cos((angle * Math.PI) / 180)}
// //                             y1={200 + 7 * Math.sin((angle * Math.PI) / 180)}
// //                             x2={335 + 25 * Math.cos((angle * Math.PI) / 180)}
// //                             y2={200 + 25 * Math.sin((angle * Math.PI) / 180)}
// //                             stroke="#999CFD"
// //                             strokeWidth="1.5"
// //                             opacity="0.6"
// //                         />
// //                     ))}
// //                 </g>

// //                 {/* Headlight */}
// //                 <ellipse cx="350" cy="148" rx="10" ry="7" fill="#999CFD" opacity="0.9" />
// //                 <path d="M360 145 L380 138 M360 151 L380 155" stroke="#999CFD" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

// //                 {/* Rider — woman silhouette */}
// //                 {/* Body */}
// //                 <path
// //                     d="M195 115 Q185 120 178 140 Q172 155 175 175 L200 175 Q200 160 202 145 L215 130 Z"
// //                     fill="#000A12"
// //                     stroke="#999CFD"
// //                     strokeWidth="1"
// //                 />
// //                 {/* Skirt/pants */}
// //                 <path
// //                     d="M175 175 Q178 190 185 195 Q192 190 200 175 Z"
// //                     fill="#999CFD"
// //                     opacity="0.7"
// //                 />
// //                 {/* Head */}
// //                 <circle cx="198" cy="98" r="18" fill="#000A12" stroke="#999CFD" strokeWidth="1.5" />
// //                 {/* Hair — long */}
// //                 <path
// //                     d="M185 95 Q178 108 182 125 Q185 130 187 118"
// //                     stroke="#999CFD"
// //                     strokeWidth="3"
// //                     fill="none"
// //                     strokeLinecap="round"
// //                     opacity="0.8"
// //                 />
// //                 {/* Helmet highlight */}
// //                 <path d="M185 90 Q195 82 210 87" stroke="#C5C7FE" strokeWidth="2" fill="none" opacity="0.5" />
// //                 {/* Arm to handlebar */}
// //                 <path d="M210 128 Q228 118 248 95" stroke="#000A12" strokeWidth="8" fill="none" strokeLinecap="round" />
// //                 <path d="M210 128 Q230 118 248 95" stroke="#999CFD" strokeWidth="1.5" fill="none" strokeLinecap="round" />

// //                 {/* Speed lines */}
// //                 <line x1="30" y1="170" x2="75" y2="170" stroke="#999CFD" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
// //                 <line x1="20" y1="182" x2="70" y2="182" stroke="#999CFD" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
// //                 <line x1="35" y1="158" x2="68" y2="158" stroke="#999CFD" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
// //             </svg>
// //         </div>
// //     )
// // }

// // export default function HeroSection() {
// //     const scrollToSignup = () => {
// //         document.querySelector('#early-access')?.scrollIntoView({ behavior: 'smooth' })
// //     }
// //     const scrollToAbout = () => {
// //         document.querySelector('#what-is-migo')?.scrollIntoView({ behavior: 'smooth' })
// //     }

// //     return (
// //         <section
// //             id="hero"
// //             className="relative min-h-screen flex items-center justify-center overflow-hidden bg-migo-dark"
// //         >
// //             {/* Background gradient */}
// //             <div className="absolute inset-0 bg-hero-gradient" />

// //             {/* Floating orbs */}
// //             <div className="orb orb-1" />
// //             <div className="orb orb-2" />

// //             {/* Subtle grid */}
// //             <div
// //                 className="absolute inset-0 opacity-[0.03]"
// //                 style={{
// //                     backgroundImage: `linear-gradient(rgba(153,156,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(153,156,253,1) 1px, transparent 1px)`,
// //                     backgroundSize: '60px 60px',
// //                 }}
// //             />

// //             {/* Content */}
// //             <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
// //                 {/* Left: Text */}
// //                 <div className="text-center lg:text-left">
// //                     {/* Eyebrow tag */}
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 20 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.5 }}
// //                         className="inline-flex items-center gap-2 mb-6"
// //                     >
// //                         <span className="section-tag">
// //                             <Sparkles size={12} /> Early Access Open
// //                         </span>
// //                     </motion.div>

// //                     {/* Headline */}
// //                     <motion.h1
// //                         initial={{ opacity: 0, y: 30 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.7, delay: 0.1 }}
// //                         className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6"
// //                     >
// //                         Drive Your{' '}
// //                         <span className="gradient-text">Freedom.</span>
// //                     </motion.h1>

// //                     {/* Subtext */}
// //                     <motion.p
// //                         initial={{ opacity: 0, y: 20 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.6, delay: 0.25 }}
// //                         className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
// //                     >
// //                         Learn to ride with{' '}
// //                         <span className="text-migo-lavender font-semibold">trusted women trainers</span>{' '}
// //                         near you. A safe, structured, empowering 2-week journey to independence.
// //                     </motion.p>

// //                     {/* CTA Buttons */}
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 20 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.6, delay: 0.4 }}
// //                         className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
// //                     >
// //                         <button onClick={scrollToSignup} className="btn-primary text-base px-8 py-4">
// //                             Join Early Access ✦
// //                         </button>
// //                         <button onClick={scrollToAbout} className="btn-secondary text-base px-8 py-4 border-white/20 text-white hover:border-migo-lavender">
// //                             Learn More →
// //                         </button>
// //                     </motion.div>

// //                     {/* Trust indicator */}
// //                     {/* <motion.div
// //                         initial={{ opacity: 0 }}
// //                         animate={{ opacity: 1 }}
// //                         transition={{ duration: 0.6, delay: 0.6 }}
// //                         className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
// //                     >
// //                         <div className="flex -space-x-2">
// //                             {['#999CFD', '#C5C7FE', '#7275DB', '#B8BAFC'].map((color, i) => (
// //                                 <div
// //                                     key={i}
// //                                     className="w-8 h-8 rounded-full border-2 border-migo-dark"
// //                                     style={{ background: color }}
// //                                 />
// //                             ))}
// //                         </div>
// //                         <p className="text-white/50 text-sm">
// //                             <span className="text-migo-lavender font-semibold">500+</span> women already signed up
// //                         </p>
// //                     </motion.div> */}
// //                 </div>

// //                 {/* Right: Illustration */}
// //                 <motion.div
// //                     initial={{ opacity: 0, x: 60 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
// //                     className="flex justify-center lg:justify-end"
// //                 >
// //                     <div className="relative">
// //                         {/* Glow behind illustration */}
// //                         <div className="absolute inset-0 rounded-full bg-lavender-glow scale-125" />
// //                         <ScooterIllustration />
// //                     </div>
// //                 </motion.div>
// //             </div>

// //             {/* Scroll indicator */}
// //             <motion.button
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ delay: 1.2 }}
// //                 onClick={scrollToAbout}
// //                 className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-migo-lavender transition-colors"
// //             >
// //                 <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
// //                 <motion.div
// //                     animate={{ y: [0, 6, 0] }}
// //                     transition={{ repeat: Infinity, duration: 1.5 }}
// //                 >
// //                     <ArrowDown size={16} />
// //                 </motion.div>
// //             </motion.button>

// //             {/* Marquee strip */}
// //             <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 border-t border-migo-lavender/10 bg-migo-lavender/5">
// //                 <div className="marquee-track flex items-center gap-8 text-migo-lavender/60 text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
// //                     {Array(8).fill('✦ Women Teaching Women  ✦ Drive Your Freedom  ✦ Learn. Ride. Thrive  ✦ Made By Women').map((text, i) => (
// //                         <span key={i}>{text}&nbsp;&nbsp;&nbsp;&nbsp;</span>
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     )
// // }
// 'use client'
// // components/HeroSection.jsx
// // Full-screen hero with scooter SVG animation, floating orbs, CTA buttons

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ArrowDown, Sparkles } from 'lucide-react'

// // Scooter Illustration
// function Scooter() {
//     return (
//         <svg
//                 viewBox="0 0 420 280"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-full max-w-md"
//             >
//                 {/* Glow behind scooter */}
//                 <ellipse cx="210" cy="240" rx="120" ry="20" fill="rgba(153,156,253,0.15)" />

//                 {/* Scooter body */}
//                 <path
//                     d="M80 180 Q90 120 150 110 L260 105 Q310 105 330 130 L350 155 L340 185 L100 190 Z"
//                     fill="#000A12"
//                     stroke="#999CFD"
//                     strokeWidth="2"
//                 />

//                 {/* Windshield */}
//                 <path
//                     d="M155 110 Q165 80 195 75 L240 75 L245 105 Z"
//                     fill="rgba(153,156,253,0.3)"
//                     stroke="#999CFD"
//                     strokeWidth="1.5"
//                 />

//                 {/* Seat */}
//                 <path
//                     d="M190 108 Q230 100 265 105 L265 118 Q230 113 190 120 Z"
//                     fill="#1a1a2e"
//                     stroke="#999CFD"
//                     strokeWidth="1"
//                 />

//                 {/* Handlebar */}
//                 <line x1="245" y1="90" x2="265" y2="105" stroke="#999CFD" strokeWidth="3" strokeLinecap="round" />
//                 <circle cx="248" cy="88" r="6" fill="#999CFD" />

//                 {/* Front fork */}
//                 <path d="M330 130 L345 185" stroke="#999CFD" strokeWidth="3" strokeLinecap="round" />

//                 {/* Rear wheel */}
//                 <g className="wheel-spin" style={{ transformOrigin: '115px 205px' }}>
//                     <circle cx="115" cy="205" r="38" fill="#0d1a2e" stroke="#999CFD" strokeWidth="2.5" />
//                     <circle cx="115" cy="205" r="28" fill="none" stroke="rgba(153,156,253,0.3)" strokeWidth="1" />
//                     <circle cx="115" cy="205" r="8" fill="#999CFD" />
//                     {/* Spokes */}
//                     {[0, 45, 90, 135].map((angle) => (
//                         <line
//                             key={angle}
//                             x1={115 + 8 * Math.cos((angle * Math.PI) / 180)}
//                             y1={205 + 8 * Math.sin((angle * Math.PI) / 180)}
//                             x2={115 + 28 * Math.cos((angle * Math.PI) / 180)}
//                             y2={205 + 28 * Math.sin((angle * Math.PI) / 180)}
//                             stroke="#999CFD"
//                             strokeWidth="1.5"
//                             opacity="0.6"
//                         />
//                     ))}
//                 </g>

//                 {/* Front wheel */}
//                 <g className="wheel-spin" style={{ transformOrigin: '335px 200px' }}>
//                     <circle cx="335" cy="200" r="34" fill="#0d1a2e" stroke="#999CFD" strokeWidth="2.5" />
//                     <circle cx="335" cy="200" r="25" fill="none" stroke="rgba(153,156,253,0.3)" strokeWidth="1" />
//                     <circle cx="335" cy="200" r="7" fill="#999CFD" />
//                     {[0, 45, 90, 135].map((angle) => (
//                         <line
//                             key={angle}
//                             x1={335 + 7 * Math.cos((angle * Math.PI) / 180)}
//                             y1={200 + 7 * Math.sin((angle * Math.PI) / 180)}
//                             x2={335 + 25 * Math.cos((angle * Math.PI) / 180)}
//                             y2={200 + 25 * Math.sin((angle * Math.PI) / 180)}
//                             stroke="#999CFD"
//                             strokeWidth="1.5"
//                             opacity="0.6"
//                         />
//                     ))}
//                 </g>

//                 {/* Headlight */}
//                 <ellipse cx="350" cy="148" rx="10" ry="7" fill="#999CFD" opacity="0.9" />
//                 <path d="M360 145 L380 138 M360 151 L380 155" stroke="#999CFD" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

//                 {/* Rider — woman silhouette */}
//                 {/* Body */}
//                 <path
//                     d="M195 115 Q185 120 178 140 Q172 155 175 175 L200 175 Q200 160 202 145 L215 130 Z"
//                     fill="#000A12"
//                     stroke="#999CFD"
//                     strokeWidth="1"
//                 />
//                 {/* Skirt/pants */}
//                 <path
//                     d="M175 175 Q178 190 185 195 Q192 190 200 175 Z"
//                     fill="#999CFD"
//                     opacity="0.7"
//                 />
//                 {/* Head */}
//                 <circle cx="198" cy="98" r="18" fill="#000A12" stroke="#999CFD" strokeWidth="1.5" />
//                 {/* Hair — long */}
//                 <path
//                     d="M185 95 Q178 108 182 125 Q185 130 187 118"
//                     stroke="#999CFD"
//                     strokeWidth="3"
//                     fill="none"
//                     strokeLinecap="round"
//                     opacity="0.8"
//                 />
//                 {/* Helmet highlight */}
//                 <path d="M185 90 Q195 82 210 87" stroke="#C5C7FE" strokeWidth="2" fill="none" opacity="0.5" />
//                 {/* Arm to handlebar */}
//                 <path d="M210 128 Q228 118 248 95" stroke="#000A12" strokeWidth="8" fill="none" strokeLinecap="round" />
//                 <path d="M210 128 Q230 118 248 95" stroke="#999CFD" strokeWidth="1.5" fill="none" strokeLinecap="round" />

//                 {/* Speed lines */}
//                 <line x1="30" y1="170" x2="75" y2="170" stroke="#999CFD" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
//                 <line x1="20" y1="182" x2="70" y2="182" stroke="#999CFD" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
//                 <line x1="35" y1="158" x2="68" y2="158" stroke="#999CFD" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
//             </svg>
//     )
// }

// // Bike / Motorcycle Illustration
// function Bike() {
//     return (
//         <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
//             <ellipse cx="210" cy="240" rx="120" ry="20" fill="rgba(153,156,253,0.15)" />
            
//             <path d="M100 150 Q120 135 150 140 L195 140 L210 120" stroke="#999CFD" strokeWidth="2" fill="none" />
//             <path d="M195 140 Q225 110 255 115 Q265 115 270 130 L280 160 L230 170 Z" fill="#000A12" stroke="#999CFD" strokeWidth="2" />
//             <path d="M150 155 Q170 190 200 190 L240 190 Q270 180 280 160 L230 170 Z" fill="#000A12" stroke="#999CFD" strokeWidth="1.5" />
//             <path d="M255 115 L265 100" stroke="#999CFD" strokeWidth="2" />
//             <line x1="250" y1="100" x2="275" y2="90" stroke="#999CFD" strokeWidth="3" strokeLinecap="round" />
//             <circle cx="250" cy="100" r="6" fill="#999CFD" />
//             <path d="M200 180 L110 185 L100 175" fill="none" stroke="rgba(153,156,253,0.6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M280 120 L335 200" stroke="#999CFD" strokeWidth="3" strokeLinecap="round" />
//             <path d="M295 165 Q325 155 350 185" stroke="#999CFD" strokeWidth="1.5" fill="none" strokeLinecap="round" />
//             <path d="M120 145 Q150 135 195 140 L190 147 L120 152 Z" fill="#1a1a2e" stroke="#999CFD" strokeWidth="1" />
            
//             <g className="wheel-spin" style={{ transformOrigin: '115px 205px' }}>
//                 <circle cx="115" cy="205" r="38" fill="#0d1a2e" stroke="#999CFD" strokeWidth="2.5" />
//                 <circle cx="115" cy="205" r="28" fill="none" stroke="rgba(153,156,253,0.3)" strokeWidth="1" />
//                 <circle cx="115" cy="205" r="8" fill="#999CFD" />
//                 {[0, 45, 90, 135].map((angle) => (
//                     <line key={angle} x1={115 + 8 * Math.cos((angle * Math.PI) / 180)} y1={205 + 8 * Math.sin((angle * Math.PI) / 180)} x2={115 + 28 * Math.cos((angle * Math.PI) / 180)} y2={205 + 28 * Math.sin((angle * Math.PI) / 180)} stroke="#999CFD" strokeWidth="1.5" opacity="0.6" />
//                 ))}
//             </g>
//             <g className="wheel-spin" style={{ transformOrigin: '335px 200px' }}>
//                 <circle cx="335" cy="200" r="34" fill="#0d1a2e" stroke="#999CFD" strokeWidth="2.5" />
//                 <circle cx="335" cy="200" r="25" fill="none" stroke="rgba(153,156,253,0.3)" strokeWidth="1" />
//                 <circle cx="335" cy="200" r="7" fill="#999CFD" />
//                 {[0, 45, 90, 135].map((angle) => (
//                     <line key={angle} x1={335 + 7 * Math.cos((angle * Math.PI) / 180)} y1={200 + 7 * Math.sin((angle * Math.PI) / 180)} x2={335 + 25 * Math.cos((angle * Math.PI) / 180)} y2={200 + 25 * Math.sin((angle * Math.PI) / 180)} stroke="#999CFD" strokeWidth="1.5" opacity="0.6" />
//                 ))}
//             </g>

//             <ellipse cx="285" cy="120" rx="10" ry="7" fill="#999CFD" opacity="0.9" />
//             <path d="M295 118 L320 110 M295 123 L320 125" stroke="#999CFD" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

//             {/* Rider - woman silhouette */}
//             <path d="M170 138 Q165 110 180 90 L210 90 Q205 115 170 138 Z" fill="#000A12" stroke="#999CFD" strokeWidth="1" />
//             <path d="M170 138 Q180 115 210 90" stroke="#999CFD" strokeWidth="2" fill="none" />
//             <path d="M140 148 Q155 170 170 175 Q180 170 185 150 Q160 145 140 148 Z" fill="#999CFD" opacity="0.7" />
//             <circle cx="215" cy="70" r="18" fill="#000A12" stroke="#999CFD" strokeWidth="1.5" />
//             <path d="M205 60 Q215 55 225 60" stroke="#C5C7FE" strokeWidth="2" fill="none" opacity="0.5" />
//             <path d="M200 65 Q185 75 180 95 Q190 100 195 85" stroke="#999CFD" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
//             <path d="M225 90 Q240 95 255 100" stroke="#000A12" strokeWidth="8" fill="none" strokeLinecap="round" />
//             <path d="M225 90 Q240 95 255 100" stroke="#999CFD" strokeWidth="1.5" fill="none" strokeLinecap="round" />

//             <line x1="30" y1="170" x2="75" y2="170" stroke="#999CFD" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
//             <line x1="20" y1="182" x2="70" y2="182" stroke="#999CFD" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
//             <line x1="35" y1="158" x2="68" y2="158" stroke="#999CFD" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
//         </svg>
//     )
// }

// // Car Illustration
// function Car() {
//     return (
//         <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
//             <ellipse cx="210" cy="240" rx="140" ry="20" fill="rgba(153,156,253,0.15)" />

//             <path d="M60 160 L60 145 Q80 135 110 130 L160 130 L260 130 Q290 130 320 145 L360 145 Q375 145 375 160 L55 160 Q45 160 60 160 Z" fill="#000A12" stroke="#999CFD" strokeWidth="2" />
//             <path d="M60 160 Q110 155 140 155" stroke="rgba(153,156,253,0.4)" strokeWidth="1.5" />
//             <path d="M250 155 Q310 155 375 160" stroke="rgba(153,156,253,0.4)" strokeWidth="1.5" />
            
//             <path d="M260 130 L285 105 L295 105 L270 130" fill="rgba(153,156,253,0.3)" stroke="#999CFD" strokeWidth="1.5" />
//             <path d="M160 130 Q165 115 175 115 Q185 115 185 130 Z" fill="#1a1a2e" stroke="#999CFD" strokeWidth="1" />

//             <ellipse cx="372" cy="150" rx="8" ry="5" fill="#999CFD" opacity="0.9" />
//             <path d="M380 148 L400 143 M380 152 L400 157" stroke="#999CFD" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
            
//             <g style={{ transform: 'translate(5px, 15px)' }}>
//                 <path d="M195 115 Q185 110 170 115 Q165 125 180 130 Z" fill="#000A12" stroke="#999CFD" strokeWidth="1" />
//                 <circle cx="198" cy="98" r="18" fill="#000A12" stroke="#999CFD" strokeWidth="1.5" />
//                 <path d="M185 90 Q195 82 210 87" stroke="#C5C7FE" strokeWidth="2" fill="none" opacity="0.5" />
//                 <path d="M185 95 Q178 108 182 125 Q185 130 187 118" stroke="#999CFD" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
//                 <path d="M205 115 Q220 125 240 110" stroke="#000A12" strokeWidth="6" fill="none" strokeLinecap="round" />
//                 <path d="M205 115 Q220 125 240 110" stroke="#999CFD" strokeWidth="1.5" fill="none" strokeLinecap="round" />
//             </g>
            
//             <path d="M260 130 L250 110" stroke="#999CFD" strokeWidth="2" strokeLinecap="round" />
//             <path d="M245 110 L260 110" stroke="#999CFD" strokeWidth="2" strokeLinecap="round" />
            
//             <g className="wheel-spin" style={{ transformOrigin: '115px 175px' }}>
//                 <circle cx="115" cy="175" r="38" fill="#0d1a2e" stroke="#999CFD" strokeWidth="2.5" />
//                 <circle cx="115" cy="175" r="28" fill="none" stroke="rgba(153,156,253,0.3)" strokeWidth="1" />
//                 <circle cx="115" cy="175" r="8" fill="#999CFD" />
//                 {[0, 45, 90, 135].map((angle) => (
//                     <line key={angle} x1={115 + 8 * Math.cos((angle * Math.PI) / 180)} y1={175 + 8 * Math.sin((angle * Math.PI) / 180)} x2={115 + 28 * Math.cos((angle * Math.PI) / 180)} y2={175 + 28 * Math.sin((angle * Math.PI) / 180)} stroke="#999CFD" strokeWidth="1.5" opacity="0.6" />
//                 ))}
//             </g>
//             <g className="wheel-spin" style={{ transformOrigin: '305px 175px' }}>
//                 <circle cx="305" cy="175" r="34" fill="#0d1a2e" stroke="#999CFD" strokeWidth="2.5" />
//                 <circle cx="305" cy="175" r="25" fill="none" stroke="rgba(153,156,253,0.3)" strokeWidth="1" />
//                 <circle cx="305" cy="175" r="7" fill="#999CFD" />
//                 {[0, 45, 90, 135].map((angle) => (
//                     <line key={angle} x1={305 + 7 * Math.cos((angle * Math.PI) / 180)} y1={175 + 7 * Math.sin((angle * Math.PI) / 180)} x2={305 + 25 * Math.cos((angle * Math.PI) / 180)} y2={175 + 25 * Math.sin((angle * Math.PI) / 180)} stroke="#999CFD" strokeWidth="1.5" opacity="0.6" />
//                 ))}
//             </g>

//             <line x1="30" y1="140" x2="75" y2="140" stroke="#999CFD" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
//             <line x1="20" y1="152" x2="70" y2="152" stroke="#999CFD" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
//             <line x1="35" y1="128" x2="68" y2="128" stroke="#999CFD" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
//         </svg>
//     )
// }

// function DynamicVehicle() {
//     const [vehicleIdx, setVehicleIdx] = useState(0);
//     const vehicles = ['scooter', 'bike', 'car'];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setVehicleIdx((prev) => (prev + 1) % vehicles.length);
//         }, 3500);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="scooter-bounce relative flex items-center justify-center">
//             <AnimatePresence mode="wait">
//                 {vehicles[vehicleIdx] === 'scooter' && (
//                     <motion.div
//                         key="scooter"
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 1.05 }}
//                         transition={{ duration: 0.5 }}
//                         className="w-full max-w-md"
//                     >
//                         <Scooter />
//                     </motion.div>
//                 )}
//                 {vehicles[vehicleIdx] === 'bike' && (
//                     <motion.div
//                         key="bike"
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 1.05 }}
//                         transition={{ duration: 0.5 }}
//                         className="w-full max-w-md"
//                     >
//                         <Bike />
//                     </motion.div>
//                 )}
//                 {vehicles[vehicleIdx] === 'car' && (
//                     <motion.div
//                         key="car"
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 1.05 }}
//                         transition={{ duration: 0.5 }}
//                         className="w-full max-w-md"
//                     >
//                         <Car />
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// }

// export default function HeroSection() {
//     const scrollToSignup = () => {
//         document.querySelector('#early-access')?.scrollIntoView({ behavior: 'smooth' })
//     }
//     const scrollToAbout = () => {
//         document.querySelector('#what-is-migo')?.scrollIntoView({ behavior: 'smooth' })
//     }

//     return (
//         <section
//             id="hero"
//             className="relative min-h-screen flex items-center justify-center overflow-hidden bg-migo-dark"
//         >
//             {/* Background gradient */}
//             <div className="absolute inset-0 bg-hero-gradient" />

//             {/* Floating orbs */}
//             <div className="orb orb-1" />
//             <div className="orb orb-2" />

//             {/* Subtle grid */}
//             <div
//                 className="absolute inset-0 opacity-[0.03]"
//                 style={{
//                     backgroundImage: `linear-gradient(rgba(153,156,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(153,156,253,1) 1px, transparent 1px)`,
//                     backgroundSize: '60px 60px',
//                 }}
//             />

//             {/* Content */}
//             <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
//                 {/* Left: Text */}
//                 <div className="text-center lg:text-left">
//                     {/* Eyebrow tag */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="inline-flex items-center gap-2 mb-6"
//                     >
//                         <span className="section-tag">
//                             <Sparkles size={12} /> Early Access Open
//                         </span>
//                     </motion.div>

//                     {/* Headline */}
//                     <motion.h1
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, delay: 0.1 }}
//                         className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6"
//                     >
//                         Drive Your{' '}
//                         <span className="gradient-text">Freedom.</span>
//                     </motion.h1>

//                     {/* Subtext */}
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
//                     >
//                         Learn to ride with{' '}
//                         <span className="text-migo-lavender font-semibold">trusted women trainers</span>{' '}
//                         near you. A safe, structured, empowering 2-week journey to independence.
//                     </motion.p>

//                     {/* CTA Buttons */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.4 }}
//                         className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//                     >
//                         <button onClick={scrollToSignup} className="btn-primary text-base px-8 py-4">
//                             Join Early Access ✦
//                         </button>
//                         <button onClick={scrollToAbout} className="btn-secondary text-base px-8 py-4 border-white/20 text-white hover:border-migo-lavender">
//                             Learn More →
//                         </button>
//                     </motion.div>

//                     {/* Trust indicator */}
//                     {/* <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.6 }}
//                         className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
//                     >
//                         <div className="flex -space-x-2">
//                             {['#999CFD', '#C5C7FE', '#7275DB', '#B8BAFC'].map((color, i) => (
//                                 <div
//                                     key={i}
//                                     className="w-8 h-8 rounded-full border-2 border-migo-dark"
//                                     style={{ background: color }}
//                                 />
//                             ))}
//                         </div>
//                         <p className="text-white/50 text-sm">
//                             <span className="text-migo-lavender font-semibold">500+</span> women already signed up
//                         </p>
//                     </motion.div> */}
//                 </div>

//                 {/* Right: Illustration */}
//                 <motion.div
//                     initial={{ opacity: 0, x: 60 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
//                     className="flex justify-center lg:justify-end"
//                 >
//                     <div className="relative">
//                         {/* Glow behind illustration */}
//                         <div className="absolute inset-0 rounded-full bg-lavender-glow scale-125" />
//                         <DynamicVehicle />
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Scroll indicator */}
//             <motion.button
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2 }}
//                 onClick={scrollToAbout}
//                 className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-migo-lavender transition-colors"
//             >
//                 <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
//                 <motion.div
//                     animate={{ y: [0, 6, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.5 }}
//                 >
//                     <ArrowDown size={16} />
//                 </motion.div>
//             </motion.button>

//             {/* Marquee strip */}
//             <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 border-t border-migo-lavender/10 bg-migo-lavender/5">
//                 <div className="marquee-track flex items-center gap-8 text-migo-lavender/60 text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
//                     {Array(8).fill('✦ Women Teaching Women  ✦ Drive Your Freedom  ✦ Learn. Ride. Thrive  ✦ Made By Women').map((text, i) => (
//                         <span key={i}>{text}&nbsp;&nbsp;&nbsp;&nbsp;</span>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }
'use client'
// components/HeroSection.jsx
// Full-screen hero with scooter SVG animation, floating orbs, CTA buttons

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

// Scooter Illustration
function ScooterIllustration() {
    return (
        <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg drop-shadow-[0_0_15px_rgba(153,156,253,0.3)]">
            <defs>
                <linearGradient id="scooterGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#999CFD" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="wheelGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="50%" stopColor="#999CFD" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#000A12" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Floating shadow */}
            <ellipse cx="250" cy="320" rx="140" ry="15" fill="#000000" opacity="0.4" />
            <ellipse cx="250" cy="320" rx="160" ry="25" fill="rgba(153,156,253,0.2)" filter="blur(10px)" />

            {/* Speed lines */}
            <g opacity="0.4" stroke="#999CFD" strokeWidth="2" strokeLinecap="round">
                <line x1="20" y1="260" x2="80" y2="260" />
                <line x1="40" y1="280" x2="110" y2="280" opacity="0.2" />
                <line x1="10" y1="240" x2="60" y2="240" opacity="0.6" />
                <line x1="380" y1="290" x2="430" y2="290" />
                <line x1="400" y1="270" x2="460" y2="270" opacity="0.3" />
            </g>

            {/* Scooter body */}
            <g transform="translate(0, 10)">
                <path
                    d="M120 250 Q120 180 160 160 Q200 140 250 160 L320 165 C350 165 370 180 380 220 L390 260 L370 280 L130 280 Z"
                    fill="#000A12"
                    stroke="url(#scooterGlow)"
                    strokeWidth="3"
                />
                <path d="M160 160 C200 140 250 160 320 165" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />

                {/* Side panel curve */}
                <path d="M150 200 C200 210 280 210 350 210" fill="none" stroke="#999CFD" strokeWidth="1.5" opacity="0.4" />
            </g>

            {/* Front section & handlebar */}
            <path
                d="M320 175 L350 100 Q360 80 380 80 L390 80"
                fill="none"
                stroke="#999CFD"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M350 100 L380 180" stroke="#999CFD" strokeWidth="4" />

            {/* Windshield */}
            <path d="M350 100 Q360 40 400 30 L410 70 Z" fill="rgba(153,156,253,0.15)" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
            <path d="M370 60 Q385 50 395 65" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

            {/* Headlight */}
            <circle cx="400" cy="180" r="15" fill="#FFFFFF" />
            <ellipse cx="400" cy="180" r="25" fill="rgba(153,156,253,0.6)" filter="blur(5px)" />
            <path d="M410 175 L460 165 M412 185 L440 185" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

            {/* Seat */}
            <path
                d="M180 170 Q230 150 280 165 L280 180 Q230 165 180 185 Z"
                fill="#000000"
                stroke="#999CFD"
                strokeWidth="2"
            />

            {/* Backrest */}
            <path d="M150 180 L140 140 Q150 130 160 140 L160 170 Z" fill="#000000" stroke="#999CFD" strokeWidth="2" />

            {/* Rear wheel */}
            <g className="origin-[160px_270px] animate-[spin_3s_linear_infinite]">
                <circle cx="160" cy="270" r="45" fill="#000000" stroke="#999CFD" strokeWidth="6" />
                <circle cx="160" cy="270" r="35" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
                <circle cx="160" cy="270" r="10" fill="#999CFD" />
                {[0, 60, 120].map((angle) => (
                    <line
                        key={angle}
                        x1={160 - 35 * Math.cos((angle * Math.PI) / 180)}
                        y1={270 - 35 * Math.sin((angle * Math.PI) / 180)}
                        x2={160 + 35 * Math.cos((angle * Math.PI) / 180)}
                        y2={270 + 35 * Math.sin((angle * Math.PI) / 180)}
                        stroke="#999CFD"
                        strokeWidth="3"
                    />
                ))}
            </g>

            {/* Front wheel */}
            <g className="origin-[380px_270px] animate-[spin_3s_linear_infinite]">
                <circle cx="380" cy="270" r="45" fill="#000000" stroke="#999CFD" strokeWidth="6" />
                <circle cx="380" cy="270" r="35" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
                <circle cx="380" cy="270" r="10" fill="#999CFD" />
                {[0, 60, 120].map((angle) => (
                    <line
                        key={angle}
                        x1={380 - 35 * Math.cos((angle * Math.PI) / 180)}
                        y1={270 - 35 * Math.sin((angle * Math.PI) / 180)}
                        x2={380 + 35 * Math.cos((angle * Math.PI) / 180)}
                        y2={270 + 35 * Math.sin((angle * Math.PI) / 180)}
                        stroke="#999CFD"
                        strokeWidth="3"
                    />
                ))}
            </g>

            {/* Rider - Girl */}
            <g>
                {/* Legs */}
                <path d="M230 180 L230 250 L270 250" fill="none" stroke="#999CFD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />

                {/* Body */}
                <path d="M230 180 Q210 120 230 80 L270 80 Q280 120 250 180 Z" fill="#000000" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />

                {/* Arms */}
                <path d="M260 100 Q300 110 350 85" fill="none" stroke="#999CFD" strokeWidth="7" strokeLinecap="round" />

                {/* Head / Helmet */}
                <circle cx="250" cy="60" r="22" fill="#000000" stroke="#999CFD" strokeWidth="3" />
                <path d="M235 50 Q250 40 265 50" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

                {/* Flowing hair */}
                <path
                    d="M230 60 Q200 70 180 100 Q190 120 210 110 Q200 100 220 80"
                    fill="#999CFD"
                    opacity="0.8"
                />
            </g>

            {/* Sparkles / Magic details */}
            <path d="M50 150 L60 140 L70 150 L60 160 Z" fill="#FFFFFF" opacity="0.6" />
            <path d="M90 100 L95 95 L100 100 L95 105 Z" fill="#999CFD" />
            <path d="M420 100 L425 90 L430 100 L425 110 Z" fill="#FFFFFF" opacity="0.8" />
        </svg>
    )
}

// Bike / Motorcycle Illustration
function BikeIllustration() {
    return (
        <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg drop-shadow-[0_0_15px_rgba(153,156,253,0.3)]">
            <defs>
                <linearGradient id="bikeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#999CFD" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
                </linearGradient>
            </defs>

            {/* Floating shadow */}
            <ellipse cx="250" cy="320" rx="140" ry="15" fill="#000000" opacity="0.4" />
            <ellipse cx="250" cy="320" rx="160" ry="25" fill="rgba(153,156,253,0.2)" filter="blur(10px)" />

            {/* Speed lines */}
            <g opacity="0.4" stroke="#999CFD" strokeWidth="2" strokeLinecap="round">
                <line x1="20" y1="260" x2="80" y2="260" />
                <line x1="40" y1="280" x2="110" y2="280" opacity="0.2" />
                <line x1="10" y1="240" x2="60" y2="240" opacity="0.6" />
                <line x1="380" y1="290" x2="430" y2="290" />
            </g>

            <g transform="translate(0, 10)">
                {/* Bike chassis/body */}
                <path
                    d="M120 230 C 130 180, 170 150, 230 150 L280 150 C320 150, 360 170, 380 200 L350 240 L160 250 Z"
                    fill="#000A12"
                    stroke="url(#bikeGlow)"
                    strokeWidth="3"
                />

                {/* Engine exhaust details */}
                <path d="M180 230 L280 230 C300 230, 320 220, 330 200" fill="none" stroke="#FFFFFF" strokeWidth="4" opacity="0.6" />
                <path d="M220 180 L260 180" stroke="#999CFD" strokeWidth="2" />
                <path d="M225 190 L255 190" stroke="#999CFD" strokeWidth="2" />
                <path d="M230 200 L250 200" stroke="#999CFD" strokeWidth="2" />

                {/* Gas Tank */}
                <path d="M200 150 C220 120, 270 120, 290 140 L280 150 Z" fill="#999CFD" opacity="0.2" stroke="#FFFFFF" strokeWidth="1.5" />
            </g>

            {/* Front forks and handlebar */}
            <path d="M290 140 L330 80 L350 80" fill="none" stroke="#999CFD" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M330 80 L390 270" stroke="#999CFD" strokeWidth="4" />

            {/* Headlight */}
            <circle cx="385" cy="180" r="12" fill="#FFFFFF" />
            <ellipse cx="410" cy="180" rx="40" ry="15" fill="rgba(153,156,253,0.4)" filter="blur(8px)" />
            <path d="M395 180 L440 170 M395 185 L430 190" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

            {/* Rear wheel */}
            <g className="origin-[160px_270px] animate-[spin_3s_linear_infinite]">
                <circle cx="160" cy="270" r="48" fill="#000000" stroke="#999CFD" strokeWidth="7" />
                <circle cx="160" cy="270" r="35" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />
                <circle cx="160" cy="270" r="10" fill="#999CFD" />
                {[0, 45, 90, 135].map((angle) => (
                    <line
                        key={angle}
                        x1={160 - 40 * Math.cos((angle * Math.PI) / 180)}
                        y1={270 - 40 * Math.sin((angle * Math.PI) / 180)}
                        x2={160 + 40 * Math.cos((angle * Math.PI) / 180)}
                        y2={270 + 40 * Math.sin((angle * Math.PI) / 180)}
                        stroke="#999CFD"
                        strokeWidth="2"
                    />
                ))}
            </g>

            {/* Front wheel */}
            <g className="origin-[390px_270px] animate-[spin_3s_linear_infinite]">
                <circle cx="390" cy="270" r="48" fill="#000000" stroke="#999CFD" strokeWidth="7" />
                <circle cx="390" cy="270" r="35" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />
                <circle cx="390" cy="270" r="10" fill="#999CFD" />
                {[0, 45, 90, 135].map((angle) => (
                    <line
                        key={angle}
                        x1={390 - 40 * Math.cos((angle * Math.PI) / 180)}
                        y1={270 - 40 * Math.sin((angle * Math.PI) / 180)}
                        x2={390 + 40 * Math.cos((angle * Math.PI) / 180)}
                        y2={270 + 40 * Math.sin((angle * Math.PI) / 180)}
                        stroke="#999CFD"
                        strokeWidth="2"
                    />
                ))}
            </g>

            {/* Rider - Girl leaning forward */}
            <g>
                {/* Legs */}
                <path d="M190 140 L220 210 L180 230" fill="none" stroke="#999CFD" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />

                {/* Body leaning */}
                <path d="M190 140 C 200 90, 240 70, 280 80 L250 130 Z" fill="#000000" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />

                {/* Arms reaching */}
                <path d="M270 85 L320 90 L340 80" fill="none" stroke="#999CFD" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

                {/* Head / Helmet */}
                <circle cx="285" cy="65" r="20" fill="#000000" stroke="#999CFD" strokeWidth="3" />
                <path d="M275 55 C 285 50, 295 55, 300 65" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

                {/* Hair streaming back */}
                <path
                    d="M265 65 C 240 65, 210 80, 190 70 C 220 85, 240 90, 260 80"
                    fill="#999CFD"
                    opacity="0.8"
                />
            </g>

            {/* Sparkles */}
            <path d="M70 120 L75 110 L80 120 L75 130 Z" fill="#FFFFFF" opacity="0.7" />
        </svg>
    )
}

// Car Illustration
function CarIllustration() {
    return (
        <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg drop-shadow-[0_0_15px_rgba(153,156,253,0.3)]">
            <defs>
                <linearGradient id="carGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#999CFD" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
                </linearGradient>
            </defs>

            {/* Floating shadow */}
            <ellipse cx="250" cy="320" rx="180" ry="18" fill="#000000" opacity="0.4" />
            <ellipse cx="250" cy="320" rx="200" ry="30" fill="rgba(153,156,253,0.2)" filter="blur(10px)" />

            {/* Speed lines */}
            <g opacity="0.4" stroke="#999CFD" strokeWidth="2" strokeLinecap="round">
                <line x1="10" y1="260" x2="60" y2="260" />
                <line x1="30" y1="280" x2="90" y2="280" opacity="0.2" />
                <line x1="5" y1="230" x2="50" y2="230" opacity="0.5" />
                <line x1="420" y1="290" x2="480" y2="290" />
            </g>

            {/* Car Body outline */}
            <path
                d="M70 250 C 70 200, 100 170, 160 160 C 190 120, 260 120, 320 160 C 380 160, 420 200, 430 240 L430 260 C 430 280, 410 290, 390 290 L100 290 C 80 290, 70 270, 70 250 Z"
                fill="#000A12"
                stroke="url(#carGlow)"
                strokeWidth="3"
            />

            {/* Door markings & style lines */}
            <path d="M150 200 L340 200" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" />
            <path d="M250 200 L250 280" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.2" />
            <path d="M160 200 L160 280" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.2" />

            {/* Windows / Glass */}
            <path
                d="M170 160 C 200 130, 260 130, 310 160 L340 200 L160 200 Z"
                fill="rgba(153,156,253,0.15)"
                stroke="#FFFFFF"
                strokeWidth="2"
            />

            {/* Window glare */}
            <path d="M220 140 L280 140 L260 190 L200 190 Z" fill="#FFFFFF" opacity="0.1" />
            <line x1="280" y1="140" x2="260" y2="190" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />

            {/* Headlights */}
            <ellipse cx="415" cy="220" rx="8" ry="12" fill="#FFFFFF" />
            <ellipse cx="430" cy="220" rx="30" ry="20" fill="rgba(153,156,253,0.5)" filter="blur(6px)" />
            <path d="M425 215 L470 205 M425 225 L460 230" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

            {/* Taillights */}
            <path d="M70 220 L80 215 L80 230 Z" fill="#FF5555" opacity="0.8" />
            <ellipse cx="65" cy="225" rx="15" ry="10" fill="rgba(255,85,85,0.4)" filter="blur(4px)" />

            {/* Rear wheel */}
            <g className="origin-[130px_280px] animate-[spin_3s_linear_infinite]">
                <circle cx="130" cy="280" r="35" fill="#000000" stroke="#999CFD" strokeWidth="5" />
                <circle cx="130" cy="280" r="25" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
                <circle cx="130" cy="280" r="8" fill="#999CFD" />
                {[0, 60, 120].map((angle) => (
                    <line
                        key={angle}
                        x1={130 - 25 * Math.cos((angle * Math.PI) / 180)}
                        y1={280 - 25 * Math.sin((angle * Math.PI) / 180)}
                        x2={130 + 25 * Math.cos((angle * Math.PI) / 180)}
                        y2={280 + 25 * Math.sin((angle * Math.PI) / 180)}
                        stroke="#999CFD"
                        strokeWidth="2"
                    />
                ))}
            </g>

            {/* Front wheel */}
            <g className="origin-[350px_280px] animate-[spin_3s_linear_infinite]">
                <circle cx="350" cy="280" r="35" fill="#000000" stroke="#999CFD" strokeWidth="5" />
                <circle cx="350" cy="280" r="25" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
                <circle cx="350" cy="280" r="8" fill="#999CFD" />
                {[0, 60, 120].map((angle) => (
                    <line
                        key={angle}
                        x1={350 - 25 * Math.cos((angle * Math.PI) / 180)}
                        y1={280 - 25 * Math.sin((angle * Math.PI) / 180)}
                        x2={350 + 25 * Math.cos((angle * Math.PI) / 180)}
                        y2={280 + 25 * Math.sin((angle * Math.PI) / 180)}
                        stroke="#999CFD"
                        strokeWidth="2"
                    />
                ))}
            </g>

            {/* Girl Driver visible through window */}
            <g>
                <circle cx="230" cy="165" r="15" fill="#000000" stroke="#999CFD" strokeWidth="2" />
                <path d="M210 200 C 210 180, 250 180, 250 200" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* Hands on steering wheel */}
                <path d="M245 190 L270 180 L280 190 L270 200 Z" fill="none" stroke="#999CFD" strokeWidth="2" />

                {/* Hair */}
                <path d="M215 165 C 205 170, 205 180, 220 185" fill="#999CFD" opacity="0.8" />
            </g>

        </svg>
    )
}

export default function HeroSection() {
    const [vehicleIdx, setVehicleIdx] = useState(() => 0);
    const vehicles = ['scooter', 'bike', 'car'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setVehicleIdx((prev) => (prev + 1) % vehicles.length);
        }, 3000); // 3 seconds per user requirement
        return () => clearTimeout(timer);
    }, [vehicleIdx]);

    // Wrapper component animation variants
    const wrapperVariants = {
        initial: { opacity: 1, x: 0, scale: 1 },   // Enter from slightly left and smaller
        animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            x: 50,                                      // Exit smoothly towards right
            scale: 1.05,
            transition: { duration: 0.4, ease: "easeIn" }
        }
    };

    const renderVehicle = () => {
        return (
            <div className="relative flex items-center justify-center w-full min-h-[400px]">
                {/* Subtle bounce wrapper to mimic vehicle motion */}
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut"
                    }}
                    className="w-full flex justify-center"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {vehicles[vehicleIdx] === 'scooter' && (
                            <motion.div
                                key={vehicles[vehicleIdx]}
                                variants={wrapperVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="flex justify-center w-full"
                            >
                                <ScooterIllustration />
                            </motion.div>
                        )}
                        {vehicles[vehicleIdx] === 'bike' && (
                            <motion.div
                                key="bike"
                                variants={wrapperVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="flex justify-center w-full"
                            >
                                <BikeIllustration />
                            </motion.div>
                        )}
                        {vehicles[vehicleIdx] === 'car' && (
                            <motion.div
                                key="car"
                                variants={wrapperVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="flex justify-center w-full"
                            >
                                <CarIllustration />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        );
    };

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
                        <button onClick={scrollToSignup} className="btn-primary">
                            Join Early Access ✦
                        </button>
                        <button onClick={scrollToAbout} className="btn-secondary border-white/20 text-white hover:border-migo-lavender">
                            Learn More →
                        </button>
                    </motion.div>

                    {/* Trust indicator */}
                    {/* <motion.div
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
                    </motion.div> */}
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
                        {renderVehicle()}
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
