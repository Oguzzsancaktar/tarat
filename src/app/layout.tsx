import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import Footer from "@/components/widgets/Footer";

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
      <body className={inter.className}>
        <Navbar />
        <main className="relative max-w-[1440px]  max-md:max-w-full mx-auto  mt-8  w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
