'use client'
// components/Navbar.jsx

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#what-is-migo' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = [
        'what-is-migo',
        'how-it-works',
        'vision',
        'contact'
      ]

      let current = ''

      sections.forEach((id) => {
        const section = document.getElementById(id)

        if (section) {
          const rect = section.getBoundingClientRect()

          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id
          }
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-migo-white/90 backdrop-blur-xl shadow-card border-b border-migo-lavender/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex items-center gap-3">
            {/* <img src="/the-logo1.png" alt="MIGO Logo" className="h-14  md:h-16 w-auto object-contain" style={{transform:"scale(1.9"}} /> */}
            <img src={scrolled ? "/dark-logo.png" : "/white-logo.png"} alt="LOGO" className="h-14 md:h-16 w-auto transition-all duration-300" style={{transform:"scale(1.7)" , transformOrigin: "center center"}}/>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')

            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`font-medium text-sm transition-colors duration-200 ${
                  activeSection === sectionId
                    ? 'text-migo-lavender'
                    : scrolled
                    ? 'text-migo-dark hover:text-migo-lavender'
                    : 'text-migo-lavender/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo('#early-access')}
            className="btn-primary text-sm"
          >
            Join Early Access ✦
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-migo-lavender/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-migo-white/95 backdrop-blur-xl border-t border-migo-lavender/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-migo-dark font-medium py-2 border-b border-migo-lavender/10 last:border-0"
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => scrollTo('#early-access')}
                className="btn-primary mt-2"
              >
                Join Early Access ✦
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}