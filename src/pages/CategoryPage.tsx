import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import { Product, Category } from '../types';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (id) {
      const filtered = products.filter(product => product.category === id);
      setCategoryProducts(filtered);
    }
  }, [id]);

  const getCategoryTitle = (categoryId: string): string => {
    const categories: Record<string, string> = {
      electronics: 'Electronics',
      gaming: 'Gaming',
      computers: 'Computers',
      smartphones: 'Smartphones',
      audio: 'Audio',
      accessories: 'Accessories'
    };
    return categories[categoryId] || 'Products';
  };

  const getCategoryDescription = (categoryId: string): string => {
    const descriptions: Record<string, string> = {
      electronics: 'Discover cutting-edge electronics for your home and office.',
      gaming: 'Level up your gaming experience with the latest gear.',
      computers: 'Find powerful computers and accessories for work and play.',
      smartphones: 'Stay connected with the newest smartphones and accessories.',
      audio: 'Experience premium sound with our audio collection.',
      accessories: 'Complete your tech setup with essential accessories.'
    };
    return descriptions[categoryId] || 'Browse our collection of quality products.';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{getCategoryTitle(id as string)}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {getCategoryDescription(id as string)}
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h2>
            <p className="text-gray-600">
              We couldn't find any products in this category. Please check back later.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;