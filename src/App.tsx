import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BlogCard from './components/BlogCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import Footer from './components/Footer';
import { BlogPost } from './types';

interface DummyPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

const App = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts?limit=12');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Transform the data to match our BlogPost interface
        const transformedPosts = data.posts.map((post: DummyPost) => ({
          id: post.id,
          title: post.title,
          description: post.body.substring(0, 150) + '...',
          // Generate random image for each post
          image: `https://picsum.photos/seed/${post.id}/800/600`,
          date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
          author: 'Author ' + post.userId,
          source: post.tags[0] || 'Technology',
          url: `#${post.id}` // Dummy URL
        }));

        setPosts(transformedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error instanceof Error ? error.message : 'Failed to load blog posts');
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
