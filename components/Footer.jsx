'use client'
// components/Footer.jsx

import { Instagram, Twitter, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-migo-dark border-t border-migo-lavender/10 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Top row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-migo-lavender/10">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-migo-lavender/10 border border-migo-lavender/20 flex items-center justify-center">
                            <span className="text-migo-lavender font-black text-sm tracking-wider">M</span>
                        </div>
                        <div>
                            <span className="text-white font-extrabold text-xl tracking-wide">MIGO</span>
                            <p className="text-migo-lavender/60 text-xs mt-0.5">Drive Your Freedom</p>
                        </div>
                    </div>

                    {/* Nav links */}
                    <div className="flex items-center gap-6 text-sm text-white/40">
                        {[
                            { label: 'Privacy Policy', href: '#' },
                            { label: 'Contact', href: '#contact' },
                            { label: 'Early Access', href: '#early-access' },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="hover:text-migo-lavender transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: <Instagram size={16} />, href: 'https://instagram.com' },
                            { icon: <Twitter size={16} />, href: 'https://twitter.com' },
                            { icon: <Linkedin size={16} />, href: 'https://linkedin.com' },
                        ].map((s, i) => (
                            <a
                                key={i}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl border border-migo-lavender/20 flex items-center justify-center text-migo-lavender/60 hover:text-migo-lavender hover:border-migo-lavender/50 transition-all hover:scale-110"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom row */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <p className="text-white/25 text-sm">
                        © {year} MIGO. All rights reserved.
                    </p>
                    <p className="text-white/30 text-sm flex items-center gap-1.5">
                        Made by Women. Built for Women.{' '}
                        <Heart size={12} className="text-migo-lavender fill-migo-lavender" />
                    </p>
                </div>
            </div>
        </footer>
    )
}
