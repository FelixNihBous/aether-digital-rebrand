import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./mobile-fix.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aether Digital",
  description: "Aether Digital Website Design and Development Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animated-gradient-bg`}
      >
        {children}
      </body>
    </html>
  );
}
