import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleBySlug } from '../utils/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await fetchArticleBySlug(slug);
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };
    loadArticle();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!article) return <p>Article not found.</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Offset Navbar */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif mb-4">{article.title}</h1>
          <p className="text-sm text-gray-600 mb-2">
            {new Date(article.published_date).toLocaleDateString()} | {article.category}
          </p>
          <img
            src={article.featured_image}
            alt={article.title}
            className="w-full h-96 object-cover mb-6"
            loading="lazy"
          />
          <div className="prose max-w-none font-serif" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Article;