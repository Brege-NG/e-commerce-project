import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in-right">
              Next-Gen Tech <span className="text-blue-400">Revolution</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
              Discover the latest electronics, gaming gear, and tech accessories. Shop the future, delivered today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
              <Link to="/products">
                <Button size="lg" variant="primary" className="shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Shop Now
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                  View Categories
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center">
                <div className="bg-blue-500 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">30-day Returns</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">Secure Checkout</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-left">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Latest Tech Products" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-500 p-4 rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
              <div className="text-white font-bold text-xl">Save 25%</div>
              <div className="text-white text-sm">Limited Time Only</div>
            </div>
            {/* Background shapes */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-8 -right-8 w-60 h-60 bg-indigo-600 rounded-full opacity-10 animate-pulse" style={{ animationDuration: '6s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;