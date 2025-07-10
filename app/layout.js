import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter=Inter({subsets: ["latin"]});

export const metadata = {
  title: "Finoby AI",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* Header */}
        <Header />

        <main className="min-h-screen">{children}</main>
        <Toaster richColors  />
        {/* footer */}
        <footer className="bg-blue-50 py-12">
         
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
