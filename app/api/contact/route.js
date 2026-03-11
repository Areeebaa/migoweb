// // app/api/contact/route.js
// // POST /api/contact — forwards contact form to admin email via Resend

// import { NextResponse } from 'next/server'
// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(request) {
//     try {
//         const body = await request.json()
//         const { name, email, message } = body

//         // ── Validate ──────────────────────────────────────────────
//         if (!name || !email || !message) {
//             return NextResponse.json(
//                 { success: false, message: 'All fields are required.' },
//                 { status: 400 }
//             )
//         }

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//         if (!emailRegex.test(email)) {
//             return NextResponse.json(
//                 { success: false, message: 'Please enter a valid email address.' },
//                 { status: 400 }
//             )
//         }

//         // ── Send to admin ─────────────────────────────────────────
//         await resend.emails.send({
//             from: process.env.RESEND_FROM_EMAIL || 'MIGO Contact <hello@migo.app>',
//             to: process.env.ADMIN_EMAIL || 'team@migo.app',
//             replyTo: email,
//             subject: `New MIGO Contact: ${name}`,
//             html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #000A12; border-bottom: 2px solid #999CFD; padding-bottom: 12px;">
//             New Contact from MIGO Website
//           </h2>
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr>
//               <td style="padding: 8px 0; font-weight: 600; color: #666; width: 80px;">Name:</td>
//               <td style="padding: 8px 0; color: #000A12;">${name}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; font-weight: 600; color: #666;">Email:</td>
//               <td style="padding: 8px 0; color: #000A12;">${email}</td>
//             </tr>
//           </table>
//           <div style="margin-top: 16px; padding: 16px; background: #F0F0FF; border-radius: 12px; border-left: 4px solid #999CFD;">
//             <p style="margin: 0; color: #000A12; white-space: pre-wrap;">${message}</p>
//           </div>
//         </div>
//       `,
//         })

//         return NextResponse.json(
//             { success: true, message: "Message received! We'll get back to you soon." },
//             { status: 200 }
//         )
//     } catch (err) {
//         console.error('Contact form error:', err)
//         return NextResponse.json(
//             { success: false, message: 'Something went wrong. Please try again.' },
//             { status: 500 }
//         )
//     }
// }
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "official.migo.app@gmail.com",
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Message received! We'll get back to you soon.",
    })

  } catch (error) {
    console.error('Contact error:', error)

    return NextResponse.json(
      { success: false, message: 'Something went wrong.' },
      { status: 500 }
    )
  }
}
