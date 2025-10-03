import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchArticles } from '../utils/api';

// Animation variants for the hero section
const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
  },
};

const HeroSection = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedArticle = async () => {
      try {
        const data = await fetchArticles('', 1, 1); // Fetch the most recent article
        setFeaturedArticle(data.articles[0]);
      } catch (error) {
        console.error('Error fetching featured article:', error);
      } finally {
        setLoading(false);
      }
    };
    loadFeaturedArticle();
  }, []);

  if (loading) return <div className="h-96 bg-gray-100 animate-pulse" />;

  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="relative h-96 bg-secondary"
    >
      <img
        // src={featuredArticle?.featured_image}
        src={`/images/${featuredArticle.featured_image}`}
        alt={featuredArticle?.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <motion.div variants={textVariants} className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            {featuredArticle?.title}
          </h1>
          <p className="text-lg mb-6 max-w-md mx-auto">
            {featuredArticle?.content.substring(0, 100)}...
          </p>
          <Link
            to={`/article/${featuredArticle?.slug}`}
            className="inline-block bg-accent text-primary px-6 py-3 rounded hover:bg-opacity-80 transition"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;