import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import "sonner/dist/styles.css";

export const metadata: Metadata = {
  title: "Pivot UI - Content Discovery & Recommendations",
  description: "Discover and explore curated content tailored to your interests",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased font-sans">
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
