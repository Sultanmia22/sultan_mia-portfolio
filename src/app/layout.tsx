import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Layouts/Navbar/Navbar";
import Footer from "@/Components/Layouts/Footer/Footer";
import FloatingContact from "@/Components/Ui/FloatingContact";

export const metadata: Metadata = {
  title: "MD Sultan Mia | Full Stack Developer",
  description:
    "I'm Sultan Mia, a Full Stack Developer from Dhaka, Bangladesh. I build clean, fast and user-friendly web applications using React, Next.js, Node.js and MongoDB.",
  keywords: [
    "Sultan Mia",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack",
    "Portfolio",
    "Bangladesh",
    "Web Developer",
  ],
  authors: [{ name: "MD Sultan Mia", url: "https://github.com/Sultanmia22" }],
  creator: "MD Sultan Mia",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "MD Sultan Mia | Full Stack Developer",
    description:
      "Full Stack Developer building clean, fast and user-friendly web applications using React, Next.js, Node.js and MongoDB.",
    siteName: "Sultan Portfolio",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "MD Sultan Mia - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Sultan Mia | Full Stack Developer",
    description:
      "Full Stack Developer building clean, fast and user-friendly web applications.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
