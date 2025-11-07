import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Nunito = localFont({
  src: "./fonts/Nunito-Regular.ttf",

  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "TrackDates",
  description: "Website to track release dates!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Nunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
