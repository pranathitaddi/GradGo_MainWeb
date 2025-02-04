import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/(components)/Navbar";

export const metadata: Metadata = {
  title: "GradGo",
  description: "Evolve ideas into Thriving Realities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased text-white`}>
        <Navbar></Navbar>
        <div className="min-h-screen bg-bg-gradient"> {children}</div>
      </body>
    </html>
  );
}
