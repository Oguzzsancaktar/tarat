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
    <html lang="en">
      <body
        className={`${inter.className} grid grid-rows-[auto_1fr_auto] min-h-screen py-8 px-[140px] relative`}
      >
        <Navbar />
        <main className="flex flex-col gap-11">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
