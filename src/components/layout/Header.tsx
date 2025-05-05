import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X, User, Search } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useShop();
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const headerClass = isScrolled 
    ? 'bg-white shadow-md py-3' 
    : 'bg-transparent py-5';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            <span className="mr-1">Tech</span>
            <span className="text-gray-800">Treasure</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
            >
              Shop
            </NavLink>
            <NavLink 
              to="/categories" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
            >
              Categories
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
            >
              About
            </NavLink>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/search" className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Search className="w-5 h-5" />
            </Link>
            <Link to="/wishlist" className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Heart className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 text-gray-700 hover:text-blue-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/account" className="hidden sm:block p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
          {isMenuOpen && (
            <nav className="flex flex-col space-y-4 py-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-lg font-medium py-2 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `text-lg font-medium py-2 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                Shop
              </NavLink>
              <NavLink 
                to="/categories" 
                className={({ isActive }) => 
                  `text-lg font-medium py-2 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                Categories
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-lg font-medium py-2 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/account" 
                className={({ isActive }) => 
                  `text-lg font-medium py-2 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                Account
              </NavLink>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;