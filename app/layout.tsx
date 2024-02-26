import { Inter } from "next/font/google";

import type { Metadata } from "next";
import ToasterProvider from "@/providers/ToasterProvider";
import AuthProvider from "@/providers/AuthProvider";
import ActiveStatus from "@/components/ActiveStatus";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Messenger Clone",
    template: "%s | Messenger Clone",
  },
  description: "Messenger chat application",
  icons: {
    icon: [
      { url: "/meta/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/meta/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: {
      url: "/meta/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  metadataBase: new URL("https:messenger-klone.vercel.app/"),
  openGraph: {
    url: "https:messenger-klone.vercel.app/",
    title: "Messenger Clone",
    description: "Messenger chat application",
    type: "website",
  },
  manifest: "/meta/site.webmanifest",
  keywords: ["Messenger", "Clone", "Chat", "Free", "ianirudhkhabya"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AuthProvider>
          <ToasterProvider />
          <ActiveStatus />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
