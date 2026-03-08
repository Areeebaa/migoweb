// app/page.js
// Main landing page — assembles all sections in scroll order

import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WhatIsMIGO from '../components/WhatIsMIGO'
import WhyMIGOExists from '../components/WhyMIGOExists'
import HowItWorks from '../components/HowItWorks'
import OurVision from '../components/OurVision'
import EarlyAccessSignup from '../components/EarlyAccessSignup'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'

export default function HomePage() {
    return (
        <>
            {/* Scroll progress bar — fixed top */}
            <ScrollProgress />

            {/* Navigation */}
            <Navbar />

            <main>
                {/* 1 — Hero */}
                <HeroSection />

                {/* 2 — What is MIGO */}
                <WhatIsMIGO />

                {/* 3 — Why MIGO Exists */}
                <WhyMIGOExists />

                {/* 4 — How It Works */}
                <HowItWorks />

                {/* 5 — Our Vision */}
                <OurVision />

                {/* 6 — Early Access Signup (most important CTA) */}
                <EarlyAccessSignup />

                {/* 7 — Contact */}
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}
