import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const categories = ['Features', 'Profiles', 'Well-being', 'Fashion', 'Beauty'];
// Mobile menu animation variants
const mobileMenuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-secondary shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">Magazine</NavLink>
        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6">
          {categories.map((category) => (
            <NavLink
              key={category}
              to={`/section/${category.toLowerCase()}`}
              className="hover:text-accent"
            >
              {category}
            </NavLink>
          ))}
        </div>
        {/* Desktop Search */}
        <div className="hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 border rounded"
          />
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="sm:hidden bg-secondary w-full h-screen absolute top-16 left-0 flex flex-col items-center py-8 z-40"
                >
                  {categories.map((category) => (
                    <NavLink
                      key={category}
                      to={`/section/${category.toLowerCase()}`}
                      className="py-4 text-lg hover:text-accent"
                      onClick={toggleMobileMenu} // Close menu on click
                    >
                      {category}
                    </NavLink>
                  ))}
                  <div className="mt-4 w-3/4">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-2 py-1 border rounded"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;