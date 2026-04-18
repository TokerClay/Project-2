
import { useState, useEffect } from 'react';
import { News, HotSearch } from '../../shared/types';
import NewsCard from '../components/NewsCard';
import { RefreshCw, ExternalLink } from 'lucide-react';

interface Source {
  name: string;
  url: string;
  logo: string;
}

interface Platform {
  id: string;
  name: string;
  logo: string;
}

export default function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [hotSearches, setHotSearches] = useState<HotSearch[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [mediaCategory, setMediaCategory] = useState<string>('mainstream');
  const [professionalCategory, setProfessionalCategory] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('weibo');
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      setLoading(true);
      let url = '/api/news';
      const params = new URLSearchParams();
      
      if (mediaCategory) {
        params.append('mediaCategory', mediaCategory);
      }
      if (professionalCategory) {
        params.append('professionalCategory', professionalCategory);
      }
      if (selectedSource) {
        params.append('source', selectedSource);
      }
      
      if (params.toString()) {
        url += '?' + params.toString();
      }
      
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
      let url = '/api/news/sources';
      const params = new URLSearchParams();
      
      if (mediaCategory) {
        params.append('mediaCategory', mediaCategory);
      }
      if (professionalCategory) {
        params.append('professionalCategory', professionalCategory);
      }
      
      if (params.toString()) {
        url += '?' + params.toString();
      }
      
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setSources(data.data);
      }
    } catch (error) {
      console.error('Error fetching sources:', error);
    }
  };

  const fetchHotSearches = async (platform: string) => {
    try {
      const url = `/api/hot-searches?platform=${encodeURIComponent(platform)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setHotSearches(data.data);
      }
    } catch (error) {
      console.error('Error fetching hot searches:', error);
    }
  };

  const fetchPlatforms = async () => {
    try {
      const res = await fetch('/api/hot-searches/platforms');
      const data = await res.json();
      if (data.success) {
        setPlatforms(data.data);
      }
    } catch (error) {
      console.error('Error fetching platforms:', error);
    }
  };

  useEffect(() => {
    fetchPlatforms();
  }, []);

  useEffect(() => {
    fetchHotSearches(selectedPlatform);
  }, [selectedPlatform]);

  useEffect(() => {
    setSelectedSource(null);
    fetchSources();
  }, [mediaCategory, professionalCategory]);

  useEffect(() => {
    fetchNews();
  }, [mediaCategory, professionalCategory, selectedSource]);

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'text-red-500 font-bold';
    if (rank === 2) return 'text-orange-500 font-bold';
    if (rank === 3) return 'text-yellow-500 font-bold';
    return 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧新闻列表 */}
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {mediaCategory === 'mainstream' ? '主流媒体' : '职业媒体'}
                </h2>
                <button
                  onClick={() => fetchNews()}
                  disabled={loading}
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors disabled:opacity-50"
                >
                  <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                  刷新
                </button>
              </div>

              {/* 媒体分类标签页 */}
              <div className="mb-6">
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => {
                      setMediaCategory('mainstream');
                      setProfessionalCategory(null);
                    }}
                    className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
                      mediaCategory === 'mainstream'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    主流媒体
                  </button>
                  <button
                    onClick={() => {
                      setMediaCategory('professional');
                      setProfessionalCategory(null);
                    }}
                    className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
                      mediaCategory === 'professional'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    职业媒体
                  </button>
                </div>

                {/* 职业媒体子分类 */}
                {mediaCategory === 'professional' && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <button
                      onClick={() => setProfessionalCategory(null)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        !professionalCategory
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                      }`}
                    >
                      全部
                    </button>
                    <button
                      onClick={() => setProfessionalCategory('tech')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        professionalCategory === 'tech'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                      }`}
                    >
                      科技媒体
                    </button>
                    <button
                      onClick={() => setProfessionalCategory('finance')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        professionalCategory === 'finance'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                      }`}
                    >
                      财经媒体
                    </button>
                    <button
                      onClick={() => setProfessionalCategory('sports')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        professionalCategory === 'sports'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                      }`}
                    >
                      体育媒体
                    </button>
                  </div>
                )}
              </div>

              {/* 媒体筛选按钮 */}
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

          {/* 右侧热搜板块 */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">热搜榜单</h3>
              
              {/* 平台切换 */}
              <div className="flex flex-wrap gap-2 mb-6">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                      selectedPlatform === platform.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span>{platform.logo}</span>
                    {platform.name}
                  </button>
                ))}
              </div>

              {/* 热搜列表 */}
              <div className="space-y-3">
                {hotSearches.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <span className={`text-lg font-bold min-w-[24px] ${getRankColor(item.rank)}`}>
                      {item.rank}
                    </span>
                    <div className="flex-1">
                      <p className="text-gray-800 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </p>
                      {item.hotValue && (
                        <p className="text-gray-400 text-xs mt-1">{item.hotValue}</p>
                      )}
                    </div>
                    <ExternalLink size={14} className="text-gray-300 group-hover:text-blue-500 transition-colors shrink-0 mt-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
