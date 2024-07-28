import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import clsx from "clsx";
import "./globals.css";
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexLanding Page",
  description: "Template created by NexAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
