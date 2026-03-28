// app/layout.js
import './globals.css'

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export const metadata = {
    title: 'MIGO — Drive Your Freedom | Women Teaching Women to Ride',
    description:
        'MIGO connects women learners with verified women two-wheeler trainers nearby. Join early access and be the first to know when we launch.',
    keywords: ['women trainers', 'two wheeler training', 'scooter', 'bike training', 'women empowerment', 'MIGO', 'learn to ride'],
    authors: [{ name: 'MIGO Team' }],
    openGraph: {
        title: 'MIGO — Drive Your Freedom',
        description: 'Women teaching women to ride. Join the early access list.',
        siteName: 'MIGO',
        type: 'website',
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MIGO — Drive Your Freedom',
        description: 'Women teaching women to ride. Join the early access list.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({ children }) {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID

    return (
        <html lang="en">
            <head>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
                    rel="stylesheet"
                />

                {/* Google Analytics */}
                {GA_ID && (
                    <>
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
                            }}
                        />
                    </>
                )}
            </head>
            <body>{children}</body>
        </html>
    )
}
