import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Start slightly further below
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Slightly longer for smoother feel
      ease: 'easeOut', // Soft easing for natural motion
      delay: i * 0.1, // Stagger delay based on index
    },
  }),
};
const ArticleCard = ({ article, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index} // Pass index for staggered animation
      viewport={{ once: true, amount: 0.3 }} // Animate when 30% of card is in view
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <img
        src={`/images/${article.featured_image}`}
        alt={article.title}
        // className="w-full h-48 object-cover"
       //className="w-full h-48 object-contain"
       className="w-full object-contain"
        loading="lazy"
      />
      <div className="p-4">
        <span className="text-sm text-accent">{article.category}</span>
        <Link to={`/article/${article.slug}`}>
          <h3 className="text-lg font-semibold hover:text-accent">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600">
          {new Date(article.published_date).toLocaleDateString()}
        </p>
      </div>
    </motion.div>
  );
};

export default ArticleCard;