import {
  HOME_OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{ url: HOME_OG_IMAGE_URL, width: 1200, height: 630, alt: "iZem" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="theme-color" content="#000" />
      </head>
      <body className="mx-auto max-w-[900px] bg-bg px-5 font-base text-text scrollbar scrollbar-thumb-black dark:bg-darkBg dark:text-darkText dark:scrollbar-thumb-white">
        <div className="min-h-[calc(100dvh-70px)] py-10 pt-[120px] w500:min-h-[calc(100dvh-70px)] w400:pt-[140px]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
