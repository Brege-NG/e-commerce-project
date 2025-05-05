import React from 'react';
import { products } from '../../data/products';
import ProductGrid from '../product/ProductGrid';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our handpicked selection of top products</p>
          </div>
          <a
            href="/products"
            className="mt-4 sm:mt-0 text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <ProductGrid products={featuredProducts} />
      </div>
    </div>
  );
};

export default FeaturedProducts;