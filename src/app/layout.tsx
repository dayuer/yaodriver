import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "../index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "曜行智能 | Obsidian Intelligence",
  description: "极其精密，极其强悍。曜行 O-1，专为具身智能设计的算力心脏。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`} suppressHydrationWarning>
        {children}
        <Toaster theme="dark" position="bottom-center" />
      </body>
    </html>
  );
}
