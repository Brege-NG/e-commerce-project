import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductGrid from '../product/ProductGrid';

const NewArrivals: React.FC = () => {
  const newProducts = products.filter(product => product.new).slice(0, 3);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">New Arrivals</h2>
            <p className="text-gray-600">Check out our latest products</p>
          </div>
          <Link 
            to="/products?filter=new" 
            className="mt-4 sm:mt-0 text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <ProductGrid products={newProducts} />
      </div>
    </div>
  );
};

export default NewArrivals;