import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const SpecialOffer: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <div className="inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-1 rounded-full text-sm mb-6 animate-pulse">
                Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Get 20% Off on All Gaming Accessories
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Upgrade your gaming setup with our premium selection of accessories. 
                Limited stock available!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/category/gaming">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="bg-white text-blue-700 hover:bg-gray-100"
                  >
                    Shop Now
                  </Button>
                </Link>
                <p className="text-blue-100 flex items-center mt-2 sm:mt-0">
                  Use code: <span className="font-mono font-bold text-white ml-2 bg-blue-800 px-2 py-1 rounded">GAME20</span>
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[300px] md:min-h-[400px]">
              <img 
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Gaming Accessories" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;