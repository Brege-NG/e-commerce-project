import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useShop } from '../../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : null;
  
  return (
    <Card 
      hoverable 
      className="group h-full flex flex-col"
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Product badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.new && <Badge type="new">New</Badge>}
          {product.discount && <Badge type="sale">{product.discount}% OFF</Badge>}
          {product.featured && <Badge type="featured">Featured</Badge>}
        </div>
        
        {/* Quick actions */}
        <div className="absolute top-2 right-2">
          <button 
            onClick={() => toggleWishlist(product)}
            className="bg-white p-2 rounded-full shadow-md transition-all hover:bg-gray-100"
            aria-label="Add to wishlist"
          >
            <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </button>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-lg text-gray-800 mb-1 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {i < Math.floor(product.rating) ? '★' : '☆'}
              </span>
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-1">({product.rating})</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              {discountedPrice ? (
                <>
                  <span className="text-lg font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            <span className={`text-sm ${product.stock < 5 ? 'text-red-500' : 'text-green-600'}`}>
              {product.stock < 5 ? `Only ${product.stock} left!` : 'In Stock'}
            </span>
          </div>
          
          <Button 
            fullWidth
            onClick={() => addToCart(product)}
            icon={<ShoppingCart className="w-4 h-4" />}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;