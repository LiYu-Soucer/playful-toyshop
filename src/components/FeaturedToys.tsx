
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft, Star, Heart, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Toy {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  isFeatured: boolean;
}

const FEATURED_TOYS: Toy[] = [
  {
    id: 1,
    name: "Wooden Building Blocks Set",
    price: 49.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?q=80&w=1000&auto=format&fit=crop",
    category: "Educational",
    isFeatured: true
  },
  {
    id: 2,
    name: "Interactive STEM Robot",
    price: 89.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?q=80&w=1000&auto=format&fit=crop",
    category: "STEM",
    isFeatured: true
  },
  {
    id: 3,
    name: "Eco-Friendly Art Set",
    price: 34.95,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1611089909126-aa42e02f0d40?q=80&w=1000&auto=format&fit=crop",
    category: "Arts & Crafts",
    isFeatured: true
  },
  {
    id: 4,
    name: "Plush Dinosaur Collection",
    price: 29.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=1000&auto=format&fit=crop",
    category: "Plush Toys",
    isFeatured: true
  },
  {
    id: 5,
    name: "Wooden Railway Set",
    price: 69.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586714326188-a296c2a35f7e?q=80&w=1000&auto=format&fit=crop",
    category: "Pretend Play",
    isFeatured: true
  },
  {
    id: 6,
    name: "Musical Instrument Kit",
    price: 45.95,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1629758282070-83e6fb323be7?q=80&w=1000&auto=format&fit=crop",
    category: "Music",
    isFeatured: true
  }
];

const FeaturedToys = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hoveredToy, setHoveredToy] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.75;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-toy-yellow/20 px-3 py-1 text-sm text-toy-orange font-medium">
              Curated Selection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Featured Toys
            </h2>
            <p className="text-gray-600">
              Discover our handpicked selection of premium toys designed to inspire creativity 
              and bring joy to children of all ages.
            </p>
          </div>
          <div className="flex mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "mr-2 rounded-full transition-opacity duration-300",
                showLeftArrow ? "opacity-100" : "opacity-30 cursor-not-allowed"
              )}
              onClick={() => scroll('left')}
              disabled={!showLeftArrow}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-full transition-opacity duration-300",
                showRightArrow ? "opacity-100" : "opacity-30 cursor-not-allowed"
              )}
              onClick={() => scroll('right')}
              disabled={!showRightArrow}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FEATURED_TOYS.map((toy, index) => (
            <div 
              key={toy.id}
              className={cn(
                "flex-shrink-0 w-[280px] transition-all duration-300 animate-scale-in", 
                { "delay-100": index === 1, "delay-200": index === 2, "delay-300": index === 3, "delay-400": index === 4, "delay-500": index === 5 }
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredToy(toy.id)}
              onMouseLeave={() => setHoveredToy(null)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-[280px] overflow-hidden group">
                  <img 
                    src={toy.image} 
                    alt={toy.name} 
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-500",
                      hoveredToy === toy.id ? "scale-110" : "scale-100"
                    )}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm"
                    >
                      <Heart className="h-4 w-4 text-gray-700" />
                    </Button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex rounded-full bg-toy-yellow/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium">
                      {toy.category}
                    </span>
                  </div>
                  <div 
                    className={cn(
                      "absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-4 transform transition-transform duration-300",
                      hoveredToy === toy.id ? "translate-y-0" : "translate-y-full"
                    )}
                  >
                    <Button className="w-full bg-toy-darkBlue hover:bg-toy-darkBlue/90">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 flex-grow flex flex-col">
                  <span className="text-xs text-gray-500 mb-1">{toy.category}</span>
                  <h3 className="font-medium text-lg mb-1 line-clamp-1">{toy.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(toy.rating) ? 'text-toy-yellow fill-toy-yellow' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({toy.rating})</span>
                  </div>
                  <div className="mt-auto">
                    <span className="font-bold text-lg">${toy.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="button-hover">
            View All Products <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedToys;
