import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tarat App",
  description:
    "Tarat, araçlarınızı QR kod ile tarayarak ayrıntılı bilgilere anında ulaşmanıza olanak tanır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={
          "font-BR_Regular grid min-h-screen py-8 mx-auto overflow-visible"
        }
      >
        <main className="flex flex-col items-center justify-center mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
