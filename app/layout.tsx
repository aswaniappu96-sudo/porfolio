import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";
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
      className={`${outfit.variable} ${syne.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#03030a] text-zinc-100">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
