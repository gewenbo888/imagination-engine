import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const TITLE_EN =
  "Imagination Engine · The Nature of Imagination, Creativity, Simulation, Consciousness & Human Possibility";
const TITLE_ZH = "想象力引擎 · 想象、创造、模拟、意识与人类可能性的本质";
const DESC =
  "A civilisation-scale, bilingual exploration of imagination as the brain's engine for simulating realities — recombining memory, predicting futures, generating symbols, and modelling worlds before they physically exist. From the evolutionary origin of mental simulation to dreams, myth, science, art, childhood play, digital worlds, generative AI, and the future of imagination networks.";

export const metadata: Metadata = {
  metadataBase: new URL("https://imagination-engine.psyverse.fun"),
  title: `${TITLE_EN} | ${TITLE_ZH}`,
  description: DESC,
  keywords: [
    "imagination", "creativity", "mental simulation", "predictive processing", "default mode network",
    "dreams", "lucid dreaming", "hallucination", "consciousness", "memory recombination",
    "myth", "fiction", "shared imagination", "scientific imagination", "invention",
    "symbolic thought", "visual thinking", "generative AI", "synthetic imagination", "future simulation",
    "cognitive science", "neuroscience of imagination", "philosophy of mind", "brain computer interface",
    "想象力", "想象", "创造力", "心理模拟", "预测加工", "默认模式网络", "梦", "清醒梦", "幻觉",
    "意识", "记忆重组", "神话", "虚构", "科学想象", "发明", "符号思维", "生成式人工智能", "未来模拟",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Imagination Engine · 想象力引擎 — The Nature of Imagination, Simulation & Possibility" }],
    title: TITLE_EN,
    description:
      "Imagination is the brain's reality simulator. A bilingual atlas of how humans imagine worlds before they exist — and how machines are learning to do the same.",
    url: "https://imagination-engine.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: TITLE_EN,
    description: "Every invention, myth, religion, empire and work of art first existed inside imagination. A bilingual exploration of humanity's reality simulator.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#070613" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: TITLE_EN,
              alternateName: TITLE_ZH,
              description: DESC,
              url: "https://imagination-engine.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="bg-void-950 text-mist-100 antialiased">
        {children}
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
