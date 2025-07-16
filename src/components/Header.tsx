import React, { useState, useEffect} from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate  } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Cart from './Cart';
import logo from '../assets/Images/logo.jpeg';
import { label } from 'framer-motion/client';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCart();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '#about' },
  { label: 'Products', link: '#products' },
  { label: 'Heritage', link: '#heritage' },
  { label: 'Contact', link: '#contact' },
 

];
  return (
    <>
      <header
          className={`fixed w-full z-40 transition-all duration-300 ${
    isScrolled ? 'shadow-md py-2' : 'py-4'
  } bg-white text-secondary-900`}
        >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a 
            href="/" 
            className="flex items-center"
          >
            <div className="w-10 h-10 rounded-md bg-primary-500 flex items-center justify-center text-white mr-2 overflow-hidden">
              <img src={logo} alt="Mithilamrit Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-serif font-semibold text-lg text-primary-900">Mithilamrit</h1>
              <p className="text-xs text-primary-700 font-medium -mt-1">Pure Mithila Pure Taste</p>
            </div>
          </a>
          
          {/* Desktop Navigation */}
       <nav className="hidden md:flex items-center space-x-8">
  {navItems.map((item) =>
    item.link.startsWith('#') ? (
      <a
        key={item.label}
        href={item.link}
        className="font-medium transition-colors text-secondary-900 hover:text-primary-600"
      >
        {item.label}
      </a>
    ) : (
      <Link
        key={item.label}
        to={item.link}
        className="font-medium transition-colors text-secondary-900 hover:text-primary-600"
      >
        {item.label}
      </Link>
    )
  )}

  {/* 👤 User Auth Buttons */}
  {!isLoggedIn ? (
    <>
      <Link
        to="/login"
        className="font-medium text-secondary-900 hover:text-primary-600 transition-colors"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="font-medium text-secondary-900 hover:text-primary-600 transition-colors"
      >
        Signup
      </Link>
    </>
  ) : (
    <>
    
      <button
        onClick={() => {
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('user');
          navigate('/login');
        }}
        className="font-medium text-red-600 hover:text-red-800 transition-colors"
      >
        Logout
      </button>
    </>
  )}
            
            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-secondary-900 hover:text-primary-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            
            <a
              href="#order"
              className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
            >
              Order Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-secondary-900"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              className="text-secondary-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-secondary-50 z-50 md:hidden"
            >
              <div className="flex justify-end p-4">
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={24} className="text-secondary-900" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {['Home', 'About', 'Products', 'Heritage', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-xl font-serif text-secondary-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#order"
                  className="px-6 py-3 bg-primary-500 text-white text-lg rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;