
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { News } from '../../shared/types';
import { formatRelativeTime } from '../utils/date';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/news/${id}`);
        const data = await res.json();
        if (data.success) {
          setNews(data.data);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>
            <div className="h-64 bg-gray-200 rounded-xl mb-8"></div>
            <div className="h-10 w-3/4 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">新闻不存在</p>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>返回</span>
        </button>

        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                {news.category}
              </span>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{news.sourceLogo}</span>
              <div>
                <span className="font-semibold text-gray-900">{news.source}</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-500">{formatRelativeTime(news.publishedAt)}</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {news.title}
            </h1>

            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {news.summary}
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <a
                href={news.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                阅读原文
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetail;
