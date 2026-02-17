import ClientRootProvider from "./client-root-provider";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
  weight: ["300","400","500","600","700","800","900"],
});

export const metadata = {
  title: "King of the Court | Reina en las Calles",
  description: "Reign in the Streets. Join the most elite urban basketball league and prove your dominance on the asphalt.",
};

export default function ProviderLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${lexend.variable} bg-background-dark text-white font-display antialiased`}>
        <ClientRootProvider>{children}</ClientRootProvider>
      </body>
    </html>
  );
}