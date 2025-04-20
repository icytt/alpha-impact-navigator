import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full bg-white py-4 border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-ocean-light flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="font-bold text-xl text-gray-900">GreenAlpha</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-leaf-dark font-medium">Home</Link>
          <Link href="/opportunities" className="text-gray-700 hover:text-leaf-dark font-medium">Opportunities</Link>
          <Link href="/impact" className="text-gray-700 hover:text-leaf-dark font-medium">Impact</Link>
          <Link href="/community" className="text-gray-700 hover:text-leaf-dark font-medium">Community</Link>
          <Link href="/about" className="text-gray-700 hover:text-leaf-dark font-medium">About</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex" asChild>
            <Link href="/auth/signin">Log In</Link>
          </Button>
          <Button className="bg-leaf hover:bg-leaf-dark text-white" asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
