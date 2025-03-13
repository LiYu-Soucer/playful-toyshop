
import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { title: 'Home', path: '/' },
  { title: 'Shop', path: '/shop' },
  { title: 'Categories', path: '/categories' },
  { title: 'New Arrivals', path: '/new-arrivals' },
  { title: 'About', path: '/about' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
      isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
    )}>
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-toy-blue to-toy-darkBlue">
              ToyWonder
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="text-gray-700 hover:text-toy-darkBlue text-sm font-medium transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Desktop Navigation Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-toy-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-toy-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-b border-gray-100 animate-fade-in">
          <div className="p-4 flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="text-gray-700 py-2 hover:text-toy-darkBlue font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="pt-2 flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Search className="h-4 w-4 mr-2" /> Search
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" /> Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
