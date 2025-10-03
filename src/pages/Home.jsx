import { useState, useEffect } from 'react';
import { fetchArticles } from '../utils/api';
import ArticleCard from '../components/ArticleCard';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        console.log("antes fetch")
        const data = await fetchArticles('', 1, 5); // Fetch 5 articles for hero
        console.log("data articles: ",data.articles)
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Added pt-16 to offset Navbar */}      
        <HeroSection />
   {/*    <div className="container mx-auto px-4 pt-20 pb-8">
        <h1 className="text-4xl font-serif text-center mb-8">Welcome to the Magazine</h1> */}
        <div className="container mx-auto px-4 pt-8 pb-8">
        <h2 className="text-3xl font-serif text-center mb-8">Recent Articles</h2>
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

export default Home;