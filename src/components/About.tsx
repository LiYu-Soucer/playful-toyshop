
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-toy-blue/10 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-toy-yellow/10 blur-3xl"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1160&auto=format&fit=crop" 
                  alt="Children playing with toys" 
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="animate-fade-in delay-100">
                <img 
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1160&auto=format&fit=crop" 
                  alt="Educational toys" 
                  className="rounded-xl shadow-lg h-48 w-full object-cover"
                />
              </div>
              <div className="animate-fade-in delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1160&auto=format&fit=crop" 
                  alt="Wooden toys" 
                  className="rounded-xl shadow-lg h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <span className="inline-flex rounded-full bg-toy-yellow/20 px-3 py-1 text-sm text-toy-orange font-medium animate-fade-in">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in delay-100">
              Crafting Moments of <span className="text-toy-darkBlue">Wonder</span> Since 2010
            </h2>
            <p className="text-gray-600 animate-fade-in delay-200">
              At ToyWonder, we believe that play is an essential part of childhood development. Our journey began with a simple mission: to create toys that inspire creativity, foster learning, and bring joy to children around the world.
            </p>
            <p className="text-gray-600 animate-fade-in delay-300">
              Each toy in our collection is carefully selected based on quality, educational value, and ability to spark imagination. We partner with ethical manufacturers who share our commitment to sustainability and safety.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 animate-fade-in delay-400">
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-3xl font-bold text-toy-darkBlue">12+</span>
                <p className="text-sm text-gray-600 mt-1">Years of Experience</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-3xl font-bold text-toy-darkBlue">500+</span>
                <p className="text-sm text-gray-600 mt-1">Product Selection</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-3xl font-bold text-toy-darkBlue">50k+</span>
                <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
              </div>
            </div>
            
            <div className="pt-4 animate-fade-in delay-500">
              <Button className="bg-toy-orange hover:bg-toy-orange/90 button-hover">
                Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
