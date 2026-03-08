// lib/emails/welcomeEmail.js
// HTML email template sent to new early-access signups

/**
 * Generate a branded welcome email for MIGO early access.
 * @param {string} name - User's name (optional, falls back to "there")
 * @returns {{ subject: string, html: string }}
 */
export function getWelcomeEmail(name = '') {
    const firstName = name?.split(' ')[0] || 'there'

    const subject = 'Welcome to MIGO 🚀 — You\'re in!'

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to MIGO</title>
</head>
<body style="margin:0; padding:0; background-color:#F0F0FF; font-family:'Segoe UI', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F0F0FF; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:24px; overflow:hidden; box-shadow: 0 4px 40px rgba(153,156,253,0.15);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #000A12 0%, #0d1a2e 100%); padding: 48px 40px; text-align:center;">
              <div style="display:inline-block; background: rgba(153,156,253,0.15); border: 1px solid rgba(153,156,253,0.3); border-radius: 16px; padding: 12px 28px; margin-bottom: 24px;">
                <span style="color:#999CFD; font-size: 28px; font-weight: 800; letter-spacing: 4px;">MIGO</span>
              </div>
              <h1 style="margin:0; color:#ffffff; font-size:28px; font-weight:700; line-height:1.3;">
                You\'re on the list! 🎉
              </h1>
              <p style="margin: 12px 0 0; color: #999CFD; font-size: 16px;">
                Early Access Confirmed
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 40px 24px;">
              <p style="margin:0 0 16px; color:#000A12; font-size:17px; line-height:1.7;">
                Hi ${firstName}! 👋
              </p>
              <p style="margin:0 0 16px; color:#333; font-size:15px; line-height:1.8;">
                Thank you for joining the MIGO early access list. We\'re building something truly exciting — 
                a platform where women can learn to ride with trusted, verified women trainers near them.
              </p>
              <p style="margin:0 0 24px; color:#333; font-size:15px; line-height:1.8;">
                You\'ll be among the <strong>first to know</strong> when our app launches — 
                with a direct download link straight to your inbox.
              </p>

              <!-- Divider with accent -->
              <div style="border-top: 2px solid #F0F0FF; margin: 28px 0; position:relative; text-align:center;">
                <span style="display:inline-block; background:#fff; padding:0 12px; position:relative; top:-14px; color:#999CFD; font-size:20px;">✦</span>
              </div>

              <!-- What's coming -->
              <h2 style="margin:0 0 16px; color:#000A12; font-size:18px; font-weight:700;">What\'s coming for you:</h2>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding: 10px 0; vertical-align:top; width:32px;">
                    <span style="background:#999CFD; color:#fff; border-radius:50%; width:26px; height:26px; display:inline-block; text-align:center; line-height:26px; font-size:13px; font-weight:700;">1</span>
                  </td>
                  <td style="padding: 10px 0 10px 12px; color:#333; font-size:15px;">Search verified women trainers in your city</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; vertical-align:top; width:32px;">
                    <span style="background:#999CFD; color:#fff; border-radius:50%; width:26px; height:26px; display:inline-block; text-align:center; line-height:26px; font-size:13px; font-weight:700;">2</span>
                  </td>
                  <td style="padding: 10px 0 10px 12px; color:#333; font-size:15px;">Book a 2-week structured training program</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; vertical-align:top; width:32px;">
                    <span style="background:#999CFD; color:#fff; border-radius:50%; width:26px; height:26px; display:inline-block; text-align:center; line-height:26px; font-size:13px; font-weight:700;">3</span>
                  </td>
                  <td style="padding: 10px 0 10px 12px; color:#333; font-size:15px;">Ride with confidence and independence</td>
                </tr>
              </table>

              <!-- Quote block -->
              <div style="background: linear-gradient(135deg, rgba(153,156,253,0.08), rgba(153,156,253,0.04)); border-left: 4px solid #999CFD; border-radius: 8px; padding: 20px 24px; margin: 28px 0;">
                <p style="margin:0; color:#000A12; font-size:15px; font-style:italic; line-height:1.7;">
                  "We\'re building MIGO because every woman deserves the freedom to move on her own terms."
                </p>
                <p style="margin: 8px 0 0; color:#999CFD; font-size:13px; font-weight:600;">— Team MIGO</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: #000A12; padding: 32px 40px; text-align:center;">
              <p style="margin:0 0 8px; color:#999CFD; font-size:13px; font-weight:600; letter-spacing:2px; text-transform:uppercase;">Made by Women · Built for Women</p>
              <p style="margin:0; color:rgba(255,255,255,0.4); font-size:12px;">© 2025 MIGO. All rights reserved.</p>
              <p style="margin:12px 0 0; color:rgba(255,255,255,0.3); font-size:11px;">You received this because you signed up for early access at migo.app</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()

    return { subject, html }
}
