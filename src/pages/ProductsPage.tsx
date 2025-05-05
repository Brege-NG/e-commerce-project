import React, { useState, useEffect } from 'react';
import { Filter, SortAsc, SortDesc, Grid3X3, Grid2X2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
import { products as allProducts } from '../data/products';
import { Product, Category } from '../types';
import Button from '../components/ui/Button';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') as Category | null;
  const initialFilter = queryParams.get('filter');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>(initialCategory || 'all');
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter || 'all');
  const [sort, setSort] = useState<string>('default');
  const [columns, setColumns] = useState<2 | 3 | 4>(3);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  
  const categories: { id: Category | 'all'; name: string }[] = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'computers', name: 'Computers' },
    { id: 'smartphones', name: 'Smartphones' },
    { id: 'audio', name: 'Audio' },
    { id: 'accessories', name: 'Accessories' }
  ];
  
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'featured', name: 'Featured' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'discount', name: 'On Sale' }
  ];
  
  useEffect(() => {
    // Initialize products
    setProducts(allProducts);
  }, []);
  
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Apply other filters
    if (activeFilter !== 'all') {
      switch (activeFilter) {
        case 'featured':
          result = result.filter(product => product.featured);
          break;
        case 'new':
          result = result.filter(product => product.new);
          break;
        case 'discount':
          result = result.filter(product => product.discount);
          break;
        default:
          break;
      }
    }
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, activeCategory, activeFilter, sort, priceRange]);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
        
        {/* Filter bar - Mobile toggle */}
        <div className="md:hidden mb-4">
          <Button 
            onClick={() => setShowFilters(!showFilters)} 
            variant="secondary"
            icon={<Filter className="w-4 h-4" />}
            fullWidth
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters */}
          <div className={`w-full md:w-64 ${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-blue-100 text-blue-700 font-medium' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-semibold text-lg mb-4">Filter By</h3>
              <div className="space-y-2">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                      activeFilter === filter.id 
                        ? 'bg-blue-100 text-blue-700 font-medium' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">Price Range</h3>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="0"
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full p-2 border rounded"
                  placeholder="Min"
                />
                <input
                  type="number"
                  min={priceRange[0]}
                  max="3000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full p-2 border rounded"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="flex-1">
            {/* Sort and view options */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <span className="text-gray-600 mr-2">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border rounded p-2"
                >
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A-Z</option>
                  <option value="name-desc">Name: Z-A</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <span className="text-gray-600 mr-3">View:</span>
                <button
                  onClick={() => setColumns(4)}
                  className={`p-2 rounded ${columns === 4 ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                  aria-label="Grid view 4 columns"
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setColumns(3)}
                  className={`p-2 rounded mx-1 ${columns === 3 ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                  aria-label="Grid view 3 columns"
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setColumns(2)}
                  className={`p-2 rounded ${columns === 2 ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                  aria-label="Grid view 2 columns"
                >
                  <Grid2X2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Products display */}
            <div>
              <p className="text-gray-600 mb-4">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} columns={columns} />
              ) : (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <Button 
                    onClick={() => {
                      setActiveCategory('all');
                      setActiveFilter('all');
                      setPriceRange([0, 3000]);
                      setSort('default');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;