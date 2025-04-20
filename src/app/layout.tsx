import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "@/components/ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GreenAlpha - Sustainable Investment Platform",
  description: "Invest in a sustainable future with GreenAlpha's curated green investment opportunities.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 