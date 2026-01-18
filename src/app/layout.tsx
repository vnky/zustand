import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zustand + Next.js",
  description: "Next.js 16 with Zustand state management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
            <h1 className="text-4xl font-bold text-center mb-8">
              Next.js 16 + Zustand
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              A modern state management example using Zustand with Next.js 16
            </p>
            {children}
          </div>
      </main>
      </body>
    </html>
  );
}

