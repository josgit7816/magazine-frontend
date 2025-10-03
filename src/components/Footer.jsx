import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const categories = ['Features', 'Profiles', 'Well-being', 'Fashion', 'Beauty'];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletterSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/newsletter', { email });
      setMessage('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      setMessage('Error subscribing. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible" // Trigger animation when in view
      viewport={{ once: true, amount: 0.1 }} // Animate when 10% visible
      className="bg-primary text-white py-8 w-full" // Added w-full for clarity
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <NavLink
                  to={`/section/${category.toLowerCase()}`}
                  className="hover:text-accent"
                >
                  {category}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/about" className="hover:text-accent">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-accent">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <form onSubmit={handleNewsletterSignup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-2 text-primary bg-white rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-accent text-primary px-4 py-2 rounded hover:bg-opacity-80 transition"
            >
              Subscribe
            </button>
          </form>
          {message && <p className="mt-2 text-sm text-white">{message}</p>}
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://x.com" className="hover:text-accent">
                Twitter/X
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="hover:text-accent">
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:contact@magazine.com" className="hover:text-accent">
                contact@magazine.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-white">&copy; {new Date().getFullYear()} Magazine. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;