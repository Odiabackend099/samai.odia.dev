export function OrganizationSchema() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Sam AI",
                    "applicationCategory": "BusinessApplication",
                    "description": "AI-powered voice assistant for US & UK businesses. Handles calls, WhatsApp, and bookings 24/7.",
                    "operatingSystem": "Web",
                    "offers": {
                        "@type": "AggregateOffer",
                        "lowPrice": "99",
                        "highPrice": "299",
                        "priceCurrency": "USD",
                        "priceRange": "$99 - $299"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5",
                        "reviewCount": "100"
                    },
                    "provider": {
                        "@type": "Organization",
                        "name": "ODIADEV AI LTD",
                        "url": "https://samai.odia.dev",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "hello@odia.dev",
                            "contactType": "Customer Support"
                        }
                    }
                })
            }}
        />
    );
}

export function FAQSchema() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How accurate is Sam with accents and dialects?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Sam is powered by ODIADEV AI & ODIADEV TTS, delivering 98%+ accuracy with US and UK English accents. It handles regional dialects seamlessly."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I cancel anytime?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes! All our plans are month-to-month. You can cancel anytime with zero penalties. We don't lock you into long contracts."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does setup take?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Most businesses are live in under 48 hours. You give us call flows, we configure Sam, you test, and you're live. No coding required."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is my customer data safe?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. We use bank-level encryption (AES-256), comply with GDPR, CCPA, and UK Data Protection Act 2018, and host data in secure AWS data centers in US & UK regions."
                            }
                        }
                    ]
                })
            }}
        />
    );
}

export function ProductSchema() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Sam AI Voice Assistant",
                    "description": "AI-powered receptionist that handles phone calls, WhatsApp messages, and bookings 24/7.",
                    "brand": {
                        "@type": "Brand",
                        "name": "ODIADEV"
                    },
                    "offers": [
                        {
                            "@type": "Offer",
                            "name": "Starter Plan",
                            "price": "99",
                            "priceCurrency": "USD",
                            "priceValidUntil": "2026-12-31",
                            "availability": "https://schema.org/InStock",
                            "url": "https://samai.odia.dev"
                        },
                        {
                            "@type": "Offer",
                            "name": "Professional Plan",
                            "price": "299",
                            "priceCurrency": "USD",
                            "priceValidUntil": "2026-12-31",
                            "availability": "https://schema.org/InStock",
                            "url": "https://samai.odia.dev"
                        }
                    ],
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5",
                        "reviewCount": "100"
                    }
                })
            }}
        />
    );
}
