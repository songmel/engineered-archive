import Image from "next/image";

import "./global.css";
//import { Geist, Geist_Mono, GeistSans, GeistMono } from "next/font/google";
import Navbar from "@/components/nav";
//import { Analytics } from "@vercel/analytics/react";
//import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
//import { baseUrl } from "./sitemap";

export const metadata = {
  //metadataBase: new URL(baseUrl),
  title: {
    default: "Engieered Archive",
    template: "%s | Engieered Archive",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    //url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
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
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cx("text-black bg-white dark:text-white dark:bg-black")}
    >
      <body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Image
            className="py-5 items-center"
            src="/logo.svg"
            alt="Logo"
            width={400}
            height={100}
            unoptimized
          />
          <Navbar />
          {children}
          <Footer />
          {/* <Analytics />
          <SpeedInsights /> */}
        </main>
      </body>
    </html>
  );
}
