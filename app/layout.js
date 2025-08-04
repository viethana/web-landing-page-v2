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

export const metadata = {
  title: "OneAuxilia - Identity & Access Management",
  description:
    "OneAuxilia offers seamless identity and access management across all your applications. Simplify user management and protect your digital assets effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Main application wrapper */}
        <div className="app-wrapper">{children}</div>
      </body>
    </html>
  );
}
