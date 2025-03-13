
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Star, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const NEW_ARRIVALS = [
  {
    id: 1,
    name: "Premium Magnetic Construction Set",
    price: 79.99,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1160&auto=format&fit=crop",
    category: "Construction",
    isNew: true
  },
  {
    id: 2,
    name: "Interactive Story Book",
    price: 34.95,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1160&auto=format&fit=crop",
    category: "Books",
    isNew: true
  },
  {
    id: 3,
    name: "Wooden Balance Board",
    price: 59.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1160&auto=format&fit=crop",
    category: "Active Play",
    isNew: true
  }
];

const NewArrivals = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-toy-orange/20 px-3 py-1 text-sm text-toy-orange font-medium">
              Just Arrived
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              New Arrivals
            </h2>
            <p className="text-gray-600">
              Explore our latest toys designed to engage, educate, and entertain. Be the first to discover 
              these exceptional additions to our collection.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0 button-hover">
            See All New Arrivals <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEW_ARRIVALS.map((toy, index) => (
            <div 
              key={toy.id} 
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group animate-fade-in-up",
                { "delay-100": index === 1, "delay-200": index === 2 }
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src={toy.image} 
                  alt={toy.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                
                <div className="absolute top-3 left-3 flex space-x-2">
                  <span className="inline-flex rounded-full bg-toy-blue/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-white">
                    New
                  </span>
                  <span className="inline-flex rounded-full bg-toy-yellow/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium">
                    {toy.category}
                  </span>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-toy-darkBlue hover:bg-toy-darkBlue/90 button-hover">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">{toy.category}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-toy-yellow fill-toy-yellow" />
                    <span className="text-xs font-medium ml-1">{toy.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-medium text-lg mb-2">{toy.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">${toy.price.toFixed(2)}</span>
                  <span className="text-xs px-2 py-1 bg-toy-blue/10 text-toy-darkBlue rounded-full">
                    Limited Stock
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
