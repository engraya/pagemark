import type { Metadata } from "next";
import { Lora } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "../../components/ThemeProvider";

const inter = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "PageMark",
  description: "Read, Highlight, and Engage with Your Books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
