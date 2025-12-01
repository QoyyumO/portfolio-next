import type { Metadata } from "next";
import { Roboto, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "Abdul-Qoyyum Portfolio",
  description: "Junior Software Engineer & Aspiring Robotics Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${libreBaskerville.variable} antialiased bg-[#34353b] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
