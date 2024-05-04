import type { Metadata } from "next";
import { Playfair_Display, Anonymous_Pro } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const play = Playfair_Display({ subsets: ["latin"], weight: ["700"], variable: '--font-playfair' });
const anonymous = Anonymous_Pro({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-anonymous' });

export const metadata: Metadata = {
  title: "Kuba's website",
  description: "My space in the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={`${play.variable} ${anonymous.variable} ${anonymous.className} text-[14px] md:text-[20px]`}>{children}</body>
    </html>
  );
}
