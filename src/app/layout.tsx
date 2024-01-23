import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

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
        <div
          className=" ml-36 mr-36 mt-8 border border-[color:var(--Brand-Primary,#FF0000)] rounded-3xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 184, 0, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
