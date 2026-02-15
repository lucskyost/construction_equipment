import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Công Hộ - Cho Thuê Thiết Bị Xây Dựng Quảng Ngãi",
  "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  "telephone": "0386660506",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Xã Vạn Tường",
    "addressLocality": "Quảng Ngãi",
    "addressCountry": "VN"
  },
  "url": "https://congho-xaydung.vn",
  "priceRange": "$$",
  "openingHours": "Mo-Su 07:00-18:00",
  "description": "Công Hộ chuyên cho thuê thiết bị xây dựng uy tín tại Quảng Ngãi. Máy móc chất lượng cao, giá cạnh tranh, giao hàng tận nơi. Liên hệ: 0386660506",
  "areaServed": {
    "@type": "City",
    "name": "Quảng Ngãi"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Thiết bị xây dựng cho thuê",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Máy trộn bê tông"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Máy đầm cóc"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Máy cắt sắt"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Máy khoan bê tông"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Cần cẩu tháp"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Máy ủi"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Máy xúc lật"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Máy nén khí"
        }
      }
    ]
  }
};

export const metadata: Metadata = {
  title: "Công Hộ - Cho Thuê Thiết Bị Xây Dựng Quảng Ngãi | 0386660506",
  description: "Công Hộ chuyên cho thuê thiết bị xây dựng uy tín tại Quảng Ngãi. Máy trộn bê tông, máy đầm cóc, máy cắt sắt, cần cẩu tháp... Máy móc chất lượng cao, giá cạnh tranh, giao hàng tận nơi. Liên hệ ngay: 0386660506",
  keywords: [
    "cho thuê thiết bị xây dựng Quảng Ngãi",
    "máy trộn bê tông Quảng Ngãi",
    "máy đầm cóc Quảng Ngãi",
    "máy cắt sắt Quảng Ngãi",
    "thuê máy xây dựng",
    "Công Hộ Quảng Ngãi",
    "thiết bị xây dựng giá rẻ",
    "cho thuê cần cẩu Quảng Ngãi"
  ],
  authors: [{ name: "Công Hộ" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Công Hộ - Cho Thuê Thiết Bị Xây Dựng Quảng Ngãi",
    description: "Máy móc xây dựng chất lượng cao, giá cạnh tranh. Giao hàng tận nơi tại Quảng Ngãi. Hotline: 0386660506",
    url: "https://congho-xaydung.vn",
    siteName: "Công Hộ - Thiết Bị Xây Dựng",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Công Hộ - Cho Thuê Thiết Bị Xây Dựng Quảng Ngãi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Công Hộ - Cho Thuê Thiết Bị Xây Dựng Quảng Ngãi",
    description: "Máy móc xây dựng chất lượng cao, giá cạnh tranh. Giao hàng tận nơi. Hotline: 0386660506",
    images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://congho-xaydung.vn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
