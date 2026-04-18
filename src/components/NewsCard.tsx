
import { Link } from 'react-router-dom';
import { News } from '../../shared/types';
import { formatRelativeTime } from '../utils/date';
import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Link
      to={`/news/${news.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-48 h-48 md:h-auto flex-shrink-0">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {news.category}
          </span>
        </div>
        
        <div className="flex-1 p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {news.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {news.summary}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">{news.sourceLogo}</span>
              <span className="text-sm font-medium text-gray-700">{news.source}</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-500">{formatRelativeTime(news.publishedAt)}</span>
            </div>
            
            <div className="flex items-center gap-1 text-blue-500 text-sm font-medium group-hover:gap-2 transition-all">
              阅读全文
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
