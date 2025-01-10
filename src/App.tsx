import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BlogCard from './components/BlogCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import Footer from './components/Footer';
import { BlogPost } from './types';

interface NewsArticle {
  title: string;
  description: string | null;
  publishedAt: string;
  urlToImage: string | null;
  author: string | null;
  source: {
    name: string | null;
  };
  url: string;
}

const App = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=12&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        const data = await response.json();

        if (data.status === 'error') {
          throw new Error(data.message || 'Failed to fetch posts');
        }

        const transformedPosts = data.articles.map((article: NewsArticle, index: number) => ({
          id: index + 1,
          title: article.title,
          description: article.description || 'No description available',
          image: article.urlToImage || 'https://picsum.photos/800/600',
          date: new Date(article.publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
          author: article.author || 'Anonymous',
          source: article.source.name || 'Unknown Source',
          url: article.url
        }));

        setPosts(transformedPosts);
        setLoading(false);
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load blog posts. Please try again later.';
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
