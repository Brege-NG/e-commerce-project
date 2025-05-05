import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface ShopContextType {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
  cartTotal: number;
  cartCount: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Calculate cart total
    const total = cart.reduce(
      (sum, item) => {
        const discountedPrice = item.product.discount 
          ? item.product.price * (1 - item.product.discount / 100) 
          : item.product.price;
        return sum + discountedPrice * item.quantity;
      }, 
      0
    );
    setCartTotal(parseFloat(total.toFixed(2)));
    
    // Calculate cart count
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(currentCart => {
      // Check if the product is already in the cart
      const existingItemIndex = currentCart.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity if product already exists
        const updatedCart = [...currentCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Add new item to cart
        return [...currentCart, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(currentCart => currentCart.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(currentCart => 
      currentCart.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(currentWishlist => {
      const isInWishlist = currentWishlist.some(item => item.id === product.id);
      
      if (isInWishlist) {
        return currentWishlist.filter(item => item.id !== product.id);
      } else {
        return [...currentWishlist, product];
      }
    });
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some(product => product.id === productId);
  };

  return (
    <ShopContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      toggleWishlist,
      isInWishlist,
      cartTotal,
      cartCount
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};