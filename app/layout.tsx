import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enosi Consulting — Performance, Data & IA",
  description: "Cabinet de conseil en performance et création de valeur. Nous aidons les directions à mieux piloter leur performance, exploiter leurs données et transformer l'IA en valeur concrète.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
