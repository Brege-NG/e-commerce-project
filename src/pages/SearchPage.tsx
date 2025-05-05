import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import { Product } from '../types';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      const results = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setSearchTerm(query);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchTerm });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Products</h1>
          
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <SearchIcon className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <button
              type="submit"
              className="absolute right-3 top-2 bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {searchParams.get('q') && (
          <div className="mb-6">
            <p className="text-gray-600">
              {searchResults.length === 0 
                ? 'No results found for '
                : `Found ${searchResults.length} results for `}
              <span className="font-semibold">"{searchParams.get('q')}"</span>
            </p>
          </div>
        )}

        {searchResults.length > 0 && (
          <ProductGrid products={searchResults} />
        )}

        {searchResults.length === 0 && searchParams.get('q') && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No results found</h2>
            <p className="text-gray-600">
              Try adjusting your search or browse our categories for similar products.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;