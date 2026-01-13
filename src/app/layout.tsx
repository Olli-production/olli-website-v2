import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/jetbrains-mono/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oliviero - UX/UI Designer & Software Engineer",
  description: "Senior Full-Stack Developer & UI/UX Designer portfolio.",
};

import Cursor from "@/components/Cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className="font-sans antialiased bg-background text-text-primary bg-noise"
        style={{
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
