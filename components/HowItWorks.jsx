'use client'
// components/HowItWorks.jsx
// 3-step road timeline with animated dashed connector

import { motion } from 'framer-motion'
import { Search, CalendarCheck, Bike } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'


const steps = [
    {
        number: '01',
        icon: <Search size={26} />,
        title: 'Find a Trainer',
        desc: 'Search verified women trainers in your city or pincode. Browse profiles, experience, ratings, and pricing.',
        color: 'from-migo-lavender/20 to-migo-lavender/5',
    },
    {
        number: '02',
        icon: <CalendarCheck size={26} />,
        title: 'Book a Session',
        desc: 'Choose your preferred trainer and schedule your 2-week training program at a time that suits you.',
        color: 'from-migo-lavender/30 to-migo-lavender/10',
    },
    {
        number: '03',
        icon: <Bike size={26} />,
        title: 'Ride with Confidence',
        desc: 'Complete your training, earn your certificate, and hit the road independently — forever.',
        color: 'from-migo-lavender/40 to-migo-lavender/15',
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-28 px-6 bg-migo-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-migo-lavender/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <ScrollAnimation variant="fadeUp">
                        <span className="section-tag mb-4 inline-flex">✦ The Journey</span>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.1}>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-migo-dark mt-4 mb-6">
                            How It{' '}
                            <span className="relative inline-block">
                                Works
                                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #999CFD, #C5C7FE)' }} />
                            </span>
                        </h2>
                    </ScrollAnimation>
                    <ScrollAnimation variant="fadeUp" delay={0.2}>
                        <p className="text-migo-dark/60 text-lg max-w-xl mx-auto">
                            Three simple steps from complete beginner to confident rider.
                        </p>
                    </ScrollAnimation>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Desktop connector road line */}
                    <div className="hidden lg:block absolute top-20 left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] z-0">
                        <div className="road-line" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                            >
                                <div className="group relative bg-white border border-migo-lavender/15 rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-center">
                                    {/* Step number */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-migo-lavender text-migo-dark text-xs font-black px-4 py-1.5 rounded-full tracking-widest">
                                        {step.number}
                                    </div>

                                    {/* Icon circle */}
                                    <div className={`w-16 h-16 mx-auto mb-6 mt-4 rounded-2xl bg-gradient-to-br ${step.color} border border-migo-lavender/20 flex items-center justify-center text-migo-lavender group-hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>

                                    <h3 className="font-extrabold text-migo-dark text-xl mb-3">{step.title}</h3>
                                    <p className="text-migo-dark/55 text-sm leading-relaxed">{step.desc}</p>

                                    {/* Arrow for mobile */}
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden flex justify-center mt-6 text-migo-lavender/40">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Road decoration */}
                <ScrollAnimation variant="fadeUp" delay={0.3} className="mt-16">
                    <div className="relative h-16 overflow-hidden rounded-full">
                        <div className="absolute inset-0 bg-migo-dark/5 rounded-full" />
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center px-8">
                            <motion.div
  className="flex-1 h-0.5"
  style={{
    background:
      "repeating-linear-gradient(90deg,#999CFD 0,#999CFD 24px,transparent 24px,transparent 48px)"
  }}
  animate={{
    backgroundPosition: ["0px 0px", "-120px 0px"]
  }}
  transition={{
    duration: 1.5,
    ease: "linear",
    repeat: Infinity
  }}
/>
                        </div>
                        {/* Mini scooter icon */}
                        <motion.div
  className="absolute left-0 top-[13%] -translate-y-1/2 text-migo-lavender text-4xl"
  initial={{x: "100vw"}}
  animate={{ x: "-120%" }}
  transition={{
    duration: 8,
    ease: "linear",
    repeat: Infinity
  }}
>
  🛵
</motion.div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
