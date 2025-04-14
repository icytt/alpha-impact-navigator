
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-ocean-light flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="font-bold text-xl text-gray-900">GreenAlpha</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-leaf-dark font-medium">Home</Link>
          <Link to="/" className="text-gray-700 hover:text-leaf-dark font-medium">Opportunities</Link>
          <Link to="/" className="text-gray-700 hover:text-leaf-dark font-medium">Impact</Link>
          <Link to="/" className="text-gray-700 hover:text-leaf-dark font-medium">Community</Link>
          <Link to="/" className="text-gray-700 hover:text-leaf-dark font-medium">About</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex">Log In</Button>
          <Button className="bg-leaf hover:bg-leaf-dark text-white">Sign Up</Button>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t border-gray-100">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-leaf-dark font-medium py-2">Home</Link>
            <Link to="/" className="text-gray-700 hover:text-leaf-dark font-medium py-2">Opportunities</Link>
            <Link to="/" className="text-gray-700 hover:text-leaf-dark font-medium py-2">Impact</Link>
            <Link to="/" className="text-gray-700 hover:text-leaf-dark font-medium py-2">Community</Link>
            <Link to="/" className="text-gray-700 hover:text-leaf-dark font-medium py-2">About</Link>
          </nav>
          <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-100">
            <Button variant="outline" className="flex-1">Log In</Button>
            <Button className="bg-leaf hover:bg-leaf-dark text-white flex-1">Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
}
