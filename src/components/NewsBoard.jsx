import React, { useEffect, useState } from 'react';
import { Newspaper, Loader2, AlertCircle, Search } from 'lucide-react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&language=en&apiKey=${import.meta.env.VITE_API_KEY}`
      );
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  const filteredArticles = articles.filter((article) => {
    const regex = new RegExp(searchTerm, 'i');
    return regex.test(article.title) || regex.test(article.description);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Newspaper className="mx-auto h-12 w-12 mb-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Global News Hub
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Your window to world events, curated just for you
            </p>
          </div>

          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                className="block w-full rounded-full border-0 px-6 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600"
                placeholder="Search headlines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-6 px-4">
        <Newspaper className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold text-gray-800">
          {category.charAt(0).toUpperCase() + category.slice(1)} News
        </h1>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 p-6 text-center rounded-md">
            <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((news) => (
                <NewsItem
                  key={news.url}
                  title={news.title}
                  time={news.publishedAt}
                  description={news.description}
                  src={news.urlToImage}
                  url={news.url}
                  author={news.author}
                  category={category}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 text-lg">No articles found matching your search</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default NewsBoard;
