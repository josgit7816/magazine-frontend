import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticles } from '../utils/api';
import ArticleCard from '../components/ArticleCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Section = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles(category, 1, 10);
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, [category]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Offset Navbar */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-serif capitalize mb-8">{category}</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Section;