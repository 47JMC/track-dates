import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunitoFont = localFont({
  src: "./fonts/Nunito-Regular.ttf",
  weight: "400",
  variable: "--font-nunito",
});
const fredokaFont = localFont({
  src: "./fonts/Fredoka-Regular.ttf",
  weight: "400",
  variable: "--font-fredoka",
});

const ubuntuMonoFont = localFont({
  src: "./fonts/UbuntuMono-Regular.ttf",
  weight: "400",
  variable: "--font-ubuntu-mono",
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
      <body
        className={`${nunitoFont.variable} ${fredokaFont.variable} ${ubuntuMonoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
