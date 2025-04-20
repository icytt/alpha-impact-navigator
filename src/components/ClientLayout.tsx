'use client';

import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"
import { Toaster } from "sonner"
import SessionProvider from "@/components/SessionProvider"
import { usePathname } from 'next/navigation'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        {!isDashboard && <Footer />}
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
} 