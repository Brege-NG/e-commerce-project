import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useShop } from '../context/ShopContext';

const WishlistPage: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  if (wishlist.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Wishlist</h1>
          
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Start adding items you love to your wishlist!</p>
            <Link to="/products">
              <Button>
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Wishlist</h1>

        <div className="grid grid-cols-1 gap-6">
          {wishlist.map(product => {
            const discountedPrice = product.discount 
              ? product.price * (1 - product.discount / 100) 
              : null;

            return (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-48 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <Link 
                        to={`/product/${product.id}`} 
                        className="text-xl font-semibold text-gray-900 hover:text-blue-600 mb-2 block"
                      >
                        {product.name}
                      </Link>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center mb-4">
                        {discountedPrice ? (
                          <>
                            <span className="text-2xl font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
                            <span className="text-lg text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
                            <span className="ml-2 bg-red-100 text-red-800 text-sm font-semibold px-2 py-0.5 rounded">
                              {product.discount}% OFF
                            </span>
                          </>
                        ) : (
                          <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        onClick={() => addToCart(product)}
                        icon={<ShoppingCart className="w-4 h-4" />}
                      >
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => toggleWishlist(product)}
                      >
                        Remove from Wishlist
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default WishlistPage;