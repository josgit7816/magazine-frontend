import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = ['Features', 'Profiles', 'Well-being', 'Fashion', 'Beauty'];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-secondary shadow-md z-50" // Increased z-index
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">Magazine</NavLink>
        <div className="space-x-6">
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
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 border rounded"
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;