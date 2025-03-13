
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-toy-blue to-toy-darkBlue">
                ToyWonder
              </h2>
            </Link>
            <p className="text-gray-600 text-sm">
              Premium toys designed to inspire creativity, learning, and joy in children of all ages.
            </p>
            <div className="flex space-x-3 pt-2">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Facebook className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Instagram className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Twitter className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Youtube className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              {['All Products', 'New Arrivals', 'Best Sellers', 'Special Offers', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-600 hover:text-toy-darkBlue text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Information Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              {['About Us', 'Contact Us', 'Shipping & Returns', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-600 hover:text-toy-darkBlue text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Join Our Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to receive updates, exclusive offers, and more.
            </p>
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="pl-10 bg-white"
                />
              </div>
              <Button className="bg-toy-darkBlue hover:bg-toy-darkBlue/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ToyWonder. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
            <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
            <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6" />
            <img src="https://via.placeholder.com/40x25" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
