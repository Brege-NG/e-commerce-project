import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share, ArrowLeft, ChevronRight, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [mainImage, setMainImage] = useState('');
  
  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setMainImage(foundProduct.image);
        
        // Find related products
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [id]);
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= (product?.stock || 10)) {
      setQuantity(value);
    }
  };
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : null;
  
  // Additional images (in a real app these would come from the product data)
  const productImages = [
    product.image,
    // Below are just duplicates for demo purposes
    product.image, 
    product.image,
    product.image
  ];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="mx-2 w-4 h-4" />
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <ChevronRight className="mx-2 w-4 h-4" />
          <Link to={`/category/${product.category}`} className="hover:text-blue-600 capitalize">
            {product.category}
          </Link>
          <ChevronRight className="mx-2 w-4 h-4" />
          <span className="text-gray-800 line-clamp-1">{product.name}</span>
        </nav>
        
        {/* Back link */}
        <Link to="/products" className="flex items-center text-blue-600 mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>
        
        {/* Product Detail */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Images */}
            <div className="p-6 md:p-8">
              <div className="relative rounded-lg overflow-hidden mb-4 bg-gray-100 h-80 flex items-center justify-center">
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
                
                {/* Product badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.new && <Badge type="new">New</Badge>}
                  {product.discount && <Badge type="sale">{product.discount}% OFF</Badge>}
                  {product.featured && <Badge type="featured">Featured</Badge>}
                </div>
              </div>
              
              {/* Thumbnail gallery */}
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((img, i) => (
                  <div 
                    key={i}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all ${mainImage === img ? 'border-blue-500' : 'border-transparent hover:border-gray-300'}`}
                    onClick={() => setMainImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} thumbnail ${i+1}`} 
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-200">
              {/* Product header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">({product.rating})</span>
                  </div>
                  <span className="text-sm text-gray-500">SKU: TT-{product.id.toString().padStart(4, '0')}</span>
                </div>
                
                {/* Price */}
                <div className="flex items-baseline mb-2">
                  {discountedPrice ? (
                    <>
                      <span className="text-3xl font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
                      <span className="text-xl text-gray-500 line-through ml-3">${product.price.toFixed(2)}</span>
                      <span className="ml-3 bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                        Save ${(product.price - discountedPrice).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  )}
                </div>
                
                {/* Stock status */}
                <div className={`text-sm ${product.stock < 5 ? 'text-red-600' : 'text-green-600'} font-medium`}>
                  {product.stock < 5 ? `Only ${product.stock} left in stock - order soon` : 'In Stock'}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Add to cart section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center border border-gray-300 rounded-md mr-4">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={quantity} 
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                      className="w-16 py-1 px-2 text-center focus:outline-none" 
                    />
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                  
                  <Button 
                    onClick={() => addToCart(product, quantity)}
                    icon={<ShoppingCart className="w-4 h-4" />}
                    className="flex-grow"
                  >
                    Add to Cart
                  </Button>
                </div>
                
                <div className="flex">
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className={`flex items-center mr-4 text-sm font-medium ${isInWishlist(product.id) ? 'text-red-600' : 'text-gray-600 hover:text-red-600'}`}
                  >
                    <Heart className={`w-4 h-4 mr-1 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                    {isInWishlist(product.id) ? 'Added to Wishlist' : 'Add to Wishlist'}
                  </button>
                  
                  <button 
                    className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600"
                  >
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </button>
                </div>
              </div>
              
              {/* Additional info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Category:</span>
                    <Link to={`/category/${product.category}`} className="text-blue-600 ml-2 capitalize hover:underline">
                      {product.category}
                    </Link>
                  </div>
                  <div>
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium ml-2">Free shipping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              <button 
                onClick={() => setActiveTab('description')}
                className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                  activeTab === 'description' 
                    ? 'border-b-2 border-blue-600 text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Description
              </button>
              <button 
                onClick={() => setActiveTab('specifications')}
                className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                  activeTab === 'specifications' 
                    ? 'border-b-2 border-blue-600 text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Specifications
              </button>
              <button 
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                  activeTab === 'reviews' 
                    ? 'border-b-2 border-blue-600 text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Reviews
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <p className="text-gray-700">
                    Introducing the {product.name}, a state-of-the-art solution for all your technological needs. This premium device has been engineered to deliver exceptional performance, reliability, and user experience.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Whether you're a professional looking for the best tools or a tech enthusiast who appreciates quality, the {product.name} is designed to exceed your expectations. It combines advanced technology with elegant design, making it a perfect addition to your digital lifestyle.
                  </p>
                </div>
              )}
              
              {activeTab === 'specifications' && (
                <div>
                  <h3 className="font-semibold text-lg mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specs ? (
                      Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="border-b border-gray-200 py-2">
                          <span className="font-medium text-gray-700">{key}:</span>
                          <span className="ml-2 text-gray-600">{value}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600">No specifications available for this product.</p>
                    )}
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-lg">Customer Reviews</h3>
                    <Button variant="outline">Write a Review</Button>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-lg font-medium">{product.rating} out of 5</span>
                    </div>
                    <p className="text-gray-600">Based on 24 reviews</p>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Sample reviews */}
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">John D.</h4>
                        <span className="text-gray-500 text-sm">2 days ago</span>
                      </div>
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 5 ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <p className="text-gray-700">
                        Excellent product! Works exactly as described and the quality exceeds expectations. 
                        Shipping was fast too.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Sarah L.</h4>
                        <span className="text-gray-500 text-sm">1 week ago</span>
                      </div>
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <p className="text-gray-700">
                        Really good quality and value for money. The only reason I'm not giving 5 stars is because 
                        the setup instructions could be clearer. Otherwise, great purchase!
                      </p>
                    </div>
                    
                    <div>
                      <Link to="#" className="text-blue-600 font-medium hover:underline">
                        View all 24 reviews
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
            <Link to={`/category/${product.category}`} className="text-blue-600 hover:underline flex items-center">
              View All
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <ProductGrid products={relatedProducts} columns={4} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;