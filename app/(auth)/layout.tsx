import type React from "react";
import type { Metadata } from "next";
import "../../app/globals.css"


export const metadata: Metadata = {
  title: "Faven LP",
  description: "",
  keywords: [
    "legal technology",
    "legal compliance",
    "technology solutions",
    "Faven LP",
  ],
  authors: [{ name: "Faven LP", url: "https://favenlp.com" }],
  openGraph: {
    title: "Faven LP",
    description: "",
    url: "https://favenlp.com",
    siteName: "Faven LP",
    images: [
      {
        url: "https://favenlp.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faven LP",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faven LP",
    description: "",
    images: ["https://favenlp.com/og-image.png"],
  },
  metadataBase: new URL("https://favenlp.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Faven LP",
    url: "https://favenlp.com",
    logo: "https://favenlp.com/logo.png",
    description: "",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/Logos/White/Logo1.png" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <title>
          Faven LP
        </title>
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta name="google-site-verification" content="8ZxYqH6wfojy62mJZHrTBO3X1J1aVPZQwdmYs6walGA" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </head>
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}