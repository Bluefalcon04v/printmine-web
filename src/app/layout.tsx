import NavBar from "@components/homePage/navBar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website",
  description: "Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Product Name" />
        <meta property="og:description" content="Check out this amazing product!" />
        <meta property="og:image" content="https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID" />
        <meta property="og:url" content="https://your-product-page-link.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased scroll-smooth w-screen h-full bg-background flex flex-col `} >
        <NavBar />
        <div className="mt-[4.7rem]">
          {children}
        </div>
      </body>
    </html>
  );
}
