'use client';

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center max-w-xl px-4">
          <div className="mb-8">
            <div className="inline-block p-6 rounded-full bg-gray-100">
              <svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/" className="bg-leaf hover:bg-leaf-dark text-white">
                Return Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/opportunities" className="border-leaf text-leaf hover:bg-leaf/10">
                View Opportunities
              </Link>
            </Button>
          </div>
          
          <p className="mt-12 text-gray-500">
            Need help? <Link href="/contact" className="text-leaf hover:underline">Contact our support team</Link>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 