import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UpLnk - Turn IT Expertise Into Booked Sales Conversations",
  description: "We help IT & tech consulting firms book consistent meetings with decision-makers using targeted outbound. No ads. No SDRs. Just conversations that convert.",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
}
