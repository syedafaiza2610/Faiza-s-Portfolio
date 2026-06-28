import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faiza Parveen — Full Stack Developer Portfolio",
  description:
    "Portfolio of Faiza Parveen, a results-driven Junior Full Stack Developer skilled in .NET, PHP, JavaScript, MERN stack, and database systems. Building scalable web applications and mentoring the next generation.",
  keywords: [
    "Faiza Parveen",
    "Full Stack Developer",
    "Web Developer Karachi",
    "MERN Stack",
    "ASP.NET",
    "PHP Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Faiza Parveen" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Faiza Parveen — Full Stack Developer",
    description:
      "Results-driven Junior Full Stack Developer building scalable web applications with .NET, PHP, JavaScript & MERN stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "#12101f",
              border: "1px solid rgba(217,70,239,0.3)",
              color: "#f4f1fb",
            },
          }}
        />
      </body>
    </html>
  );
}
