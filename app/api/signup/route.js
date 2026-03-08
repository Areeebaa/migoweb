// app/api/signup/route.js
// POST /api/signup — validates input, saves to Firestore, sends welcome email

import { NextResponse } from 'next/server'
import { adminDb } from '../../lib/firebaseAdmin'
import { Resend } from 'resend'
import { getWelcomeEmail } from '../../lib/emails/welcomeEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Validate email format with regex.
 */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Validate Indian pincode (6 digits).
 */
function isValidPincode(pincode) {
    return /^\d{6}$/.test(pincode)
}

export async function POST(request) {
    try {
        const body = await request.json()
        const { email, pincode, name } = body

        // ── 1. Validate required fields ──────────────────────────
        if (!email || !pincode) {
            return NextResponse.json(
                { success: false, message: 'Email and pincode are required.' },
                { status: 400 }
            )
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { success: false, message: 'Please enter a valid email address.' },
                { status: 400 }
            )
        }

        if (!isValidPincode(pincode)) {
            return NextResponse.json(
                { success: false, message: 'Please enter a valid 6-digit pincode.' },
                { status: 400 }
            )
        }

        const normalizedEmail = email.toLowerCase().trim()

        // ── 2. Check for duplicate email ─────────────────────────
        const existingQuery = await adminDb
            .collection('early_users')
            .where('email', '==', normalizedEmail)
            .limit(1)
            .get()

        if (!existingQuery.empty) {
            return NextResponse.json(
                {
                    success: false,
                    alreadyRegistered: true,
                    message: "You're already on the list! We'll notify you at launch. 🎉",
                },
                { status: 200 }
            )
        }

        // ── 3. Save to Firestore ──────────────────────────────────
        const docRef = adminDb.collection('early_users').doc()
        await docRef.set({
            id: docRef.id,
            email: normalizedEmail,
            pincode: pincode.trim(),
            name: name?.trim() || '',
            created_at: new Date().toISOString(),
            notified: false,          // Will be set true when launch email is sent
        })

        // ── 4. Send welcome email via Resend ──────────────────────
        const { subject, html } = getWelcomeEmail(name)

        try {
            await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL || 'MIGO <hello@migo.app>',
                to: normalizedEmail,
                subject,
                html,
            })
        } catch (emailErr) {
            // Don't fail the signup if email fails — log and continue
            console.error('Welcome email failed:', emailErr)
        }

        // ── 5. Return success ─────────────────────────────────────
        return NextResponse.json(
            {
                success: true,
                message: "Welcome to MIGO! We'll notify you when we launch. 🚀",
            },
            { status: 201 }
        )
    } catch (err) {
        console.error('Signup error:', err)
        return NextResponse.json(
            { success: false, message: 'Something went wrong. Please try again.' },
            { status: 500 }
        )
    }
}
