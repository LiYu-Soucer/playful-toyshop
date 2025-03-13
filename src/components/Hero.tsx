
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const parallaxItems = containerRef.current.querySelectorAll('.parallax');
      parallaxItems.forEach((item: Element) => {
        const speed = parseFloat((item as HTMLElement).dataset.speed || '0');
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        (item as HTMLElement).style.transform = `translate(${xOffset * 30}px, ${yOffset * 30}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white to-blue-50" ref={containerRef}>
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 max-w-xl">
            <span className="inline-flex rounded-full bg-toy-blue/20 px-3 py-1 text-sm text-toy-darkBlue font-medium animate-fade-in">
              Inspiring Imagination
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in delay-100">
              Where Play Meets <span className="text-toy-darkBlue">Wonder</span>
            </h1>
            <p className="text-lg text-gray-600 animate-fade-in delay-200">
              Discover a curated collection of premium toys designed to inspire creativity, learning, and joy in children of all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-300">
              <Button size="lg" className="bg-toy-darkBlue hover:bg-toy-darkBlue/90 button-hover">
                Shop Collection <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="button-hover">
                Explore Categories
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-6 animate-fade-in delay-400">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                      alt={`User ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-black">500+</span> happy customers this week
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-toy-yellow/20 to-toy-orange/20 blur-3xl"></div>
            
            <div className="absolute w-64 h-64 parallax" data-speed="15">
              <div className="w-64 h-64 rounded-xl rotate-6 bg-toy-blue/80 backdrop-blur-md p-4 shadow-xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1536847199149-5595e3fb8d8b?q=80&w=1160&auto=format&fit=crop" 
                  alt="Colorful building blocks" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="absolute w-56 h-56 parallax" data-speed="-10" style={{top: '15%', right: '15%'}}>
              <div className="w-56 h-56 rounded-xl -rotate-12 bg-toy-yellow/80 backdrop-blur-md p-4 shadow-xl animate-float" style={{animationDelay: '1s'}}>
                <img 
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1160&auto=format&fit=crop" 
                  alt="Wooden toy car" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="absolute w-48 h-48 parallax" data-speed="5" style={{bottom: '10%', left: '20%'}}>
              <div className="w-48 h-48 rounded-xl rotate-12 bg-toy-orange/80 backdrop-blur-md p-4 shadow-xl animate-float" style={{animationDelay: '2s'}}>
                <img 
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1160&auto=format&fit=crop" 
                  alt="Plush teddy bear" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-toy-blue/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-toy-yellow/10 blur-3xl"></div>
    </div>
  );
};

export default Hero;
