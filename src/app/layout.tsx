import type { Metadata } from "next";
import { Montserrat, Prompt } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "GaaGa - Digital Platform",
    template: "%s | GaaGa",
  },
  description:
    "Pixel-accurate Next.js implementation inspired by the original GaaGa WordPress template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${prompt.variable} ${montserrat.variable}`}>
      <body className="gms-body">
        <Header />
        <main className="gms-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
