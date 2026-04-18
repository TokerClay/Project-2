
import { useState, useEffect } from 'react';
import { News } from '../../shared/types';
import NewsCard from '../components/NewsCard';
import { RefreshCw } from 'lucide-react';

interface Source {
  name: string;
  url: string;
  logo: string;
}

export default function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchNews = async (source: string | null = null) => {
    try {
      setLoading(true);
      const url = source ? `/api/news?source=${encodeURIComponent(source)}` : '/api/news';
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setNews(data.data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSources = async () => {
    try {
      const res = await fetch('/api/news/sources');
      const data = await res.json();
      if (data.success) {
        setSources(data.data);
      }
    } catch (error) {
      console.error('Error fetching sources:', error);
    }
  };

  useEffect(() => {
    fetchSources();
  }, []);

  useEffect(() => {
    fetchNews(selectedSource);
  }, [selectedSource]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">最新资讯</h2>
            <button
              onClick={() => fetchNews(selectedSource)}
              disabled={loading}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors disabled:opacity-50"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
              刷新
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSource(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedSource
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              全部
            </button>
            {sources.map((source) => (
              <button
                key={source.name}
                onClick={() => setSelectedSource(source.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  selectedSource === source.name
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <span>{source.logo}</span>
                {source.name}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-48 md:h-auto bg-gray-200"></div>
                  <div className="flex-1 p-5 space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
            {news.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500">暂无新闻</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
