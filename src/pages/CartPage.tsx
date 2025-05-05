import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useShop } from '../context/ShopContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity, cartTotal, clearCart } = useShop();
  
  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>
          
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products">
              <Button>
                Continue Shopping
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
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cart.map((item) => {
                      const discountedPrice = item.product.discount 
                        ? item.product.price * (1 - item.product.discount / 100) 
                        : item.product.price;
                      
                      const itemTotal = discountedPrice * item.quantity;
                      
                      return (
                        <tr key={item.product.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-16 w-16 relative">
                                <img 
                                  src={item.product.image} 
                                  alt={item.product.name} 
                                  className="h-16 w-16 rounded-md object-cover"
                                />
                                {item.product.discount && (
                                  <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-tl-md rounded-br-md">
                                    {item.product.discount}% OFF
                                  </div>
                                )}
                              </div>
                              <div className="ml-4">
                                <Link 
                                  to={`/product/${item.product.id}`} 
                                  className="text-sm font-medium text-gray-900 hover:text-blue-600"
                                >
                                  {item.product.name}
                                </Link>
                                <div className="text-sm text-gray-500 capitalize">{item.product.category}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {item.product.discount ? (
                              <div>
                                <span className="text-sm font-medium text-gray-900">${discountedPrice.toFixed(2)}</span>
                                <span className="text-xs text-gray-500 line-through ml-2">${item.product.price.toFixed(2)}</span>
                              </div>
                            ) : (
                              <span className="text-sm font-medium text-gray-900">${item.product.price.toFixed(2)}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center border border-gray-300 rounded-md max-w-[120px]">
                              <button 
                                onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <input 
                                type="number" 
                                value={item.quantity}
                                onChange={(e) => updateCartQuantity(item.product.id, parseInt(e.target.value))}
                                className="w-12 py-1 px-2 text-center focus:outline-none text-sm" 
                                min="1"
                                max={item.product.stock}
                              />
                              <button 
                                onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                disabled={item.quantity >= item.product.stock}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${itemTotal.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                  <Link to="/products">
                    <Button variant="secondary">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                {cartTotal >= 100 ? (
                  <div className="flex justify-between text-green-600">
                    <span>Free Shipping Applied</span>
                    <span>-$0.00</span>
                  </div>
                ) : (
                  <div className="text-sm text-gray-500">
                    Add ${(100 - cartTotal).toFixed(2)} more to qualify for free shipping
                  </div>
                )}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Including taxes</div>
                </div>
              </div>
              
              {/* Promo code */}
              <div className="mb-6">
                <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="promo"
                    placeholder="Enter code"
                    className="flex-grow rounded-l-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-r-md transition-colors">
                    Apply
                  </button>
                </div>
              </div>
              
              <Link to="/checkout">
                <Button fullWidth size="lg" className="flex items-center justify-center">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Secure Checkout
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  30-Day Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;