
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedToys from '@/components/FeaturedToys';
import NewArrivals from '@/components/NewArrivals';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedToys />
        <div className="py-12 bg-gradient-to-r from-toy-blue/10 to-toy-yellow/10">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Educational", icon: "https://images.unsplash.com/photo-1618160302816-eaef3620a44f?q=80&w=400&auto=format&fit=crop" },
                { name: "STEM Toys", icon: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?q=80&w=400&auto=format&fit=crop" },
                { name: "Arts & Crafts", icon: "https://images.unsplash.com/photo-1611089909126-aa42e02f0d40?q=80&w=400&auto=format&fit=crop" },
                { name: "Outdoor Play", icon: "https://images.unsplash.com/photo-1588690154757-badf4644190f?q=80&w=400&auto=format&fit=crop" },
              ].map((category, index) => (
                <div 
                  key={category.name}
                  className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={category.icon} 
                    alt={category.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium text-xl">{category.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <NewArrivals />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
