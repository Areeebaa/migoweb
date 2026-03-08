// lib/firebaseAdmin.js
// Server-side Firebase Admin SDK — used ONLY in API routes (never in browser)
import { getApps, initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

function initAdmin() {
    if (getApps().length > 0) return

    initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
            clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
            // Replace escaped \n with actual newlines (common when set via env vars)
            privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    })
}

initAdmin()
const adminDb = getFirestore()

export { adminDb }
