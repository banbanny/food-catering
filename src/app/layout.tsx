import type { Metadata } from "next";
import Notification from "@/components/Notification";
import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Featured from '@/components/Featured';
import AuthProvider from "@/components/AuthProvider";


const inter = Inter ({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kuya Cards',
  description: 'Home of Delicacies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <div>
        <Notification/>
        <Navbar/>
      {children}
      <Footer/>
      </div>
      </AuthProvider>
      </body>
    </html>
  )
}
