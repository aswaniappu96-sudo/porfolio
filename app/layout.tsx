import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aswani K A — Senior WordPress Developer",
  description:
    "Portfolio of Aswani K A, Senior WordPress Developer shipping UAE business websites, WooCommerce, RTL, SEO, and interactive 3D web.",
};

export const viewport = {
  themeColor: "#03030a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} ${jetbrains.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-full w-full overflow-x-hidden bg-[#03030a] text-zinc-100">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-36JP6THYTG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-36JP6THYTG');
          `}
        </Script>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
