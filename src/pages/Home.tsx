
import { useState, useEffect } from 'react';
import { News, HotSearch } from '../../shared/types';
import NewsCard from '../components/NewsCard';
import { RefreshCw, ExternalLink } from 'lucide-react';
import { newsApiService } from '../services/newsApi';

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

// 媒体源配置
const sourcesConfig: Source[] = [
  // 主流媒体
  { name: '新华社', url: 'https://www.xinhuanet.com/', logo: 'https://www.xinhuanet.com/favicon.ico' },
  { name: '人民日报', url: 'https://www.people.com.cn/', logo: 'https://www.people.com.cn/favicon.ico' },
  { name: '央视新闻', url: 'https://news.cctv.com/', logo: 'https://news.cctv.com/favicon.ico' },
  { name: '澎湃新闻', url: 'https://www.thepaper.cn/', logo: 'https://www.thepaper.cn/favicon.ico' },
  { name: '环球时报', url: 'https://www.huanqiu.com/', logo: 'https://www.huanqiu.com/favicon.ico' },
  { name: '中国新闻网', url: 'https://www.chinanews.com.cn/', logo: 'https://www.chinanews.com.cn/favicon.ico' },
  
  // 科技媒体
  { name: '少数派', url: 'https://sspai.com/', logo: 'https://sspai.com/favicon.ico' },
  { name: 'iO', url: 'https://www.iozh.com/', logo: 'https://www.iozh.com/favicon.ico' },
  { name: 'IT之家', url: 'https://www.ithome.com/', logo: 'https://www.ithome.com/favicon.ico' },
  { name: '36氪', url: 'https://36kr.com/', logo: 'https://36kr.com/favicon.ico' },
  { name: '爱范儿', url: 'https://www.ifanr.com/', logo: 'https://www.ifanr.com/favicon.ico' },
  
  // 财经媒体
  { name: '第一财经', url: 'https://www.yicai.com/', logo: 'https://www.yicai.com/favicon.ico' },
  { name: '晚点', url: 'https://www.latepost.com/', logo: 'https://www.latepost.com/favicon.ico' },
  { name: '界面', url: 'https://www.jiemian.com/', logo: 'https://www.jiemian.com/favicon.ico' },
  { name: '财新网', url: 'https://www.caixin.com/', logo: 'https://www.caixin.com/favicon.ico' },
  { name: '华尔街见闻', url: 'https://wallstreetcn.com/', logo: 'https://wallstreetcn.com/favicon.ico' },
  
  // 体育媒体
  { name: '虎扑', url: 'https://www.hupu.com/', logo: 'https://www.hupu.com/favicon.ico' },
  { name: '懂球帝', url: 'https://www.dongqiudi.com/', logo: 'https://www.dongqiudi.com/favicon.ico' },
  { name: 'ESPN中文', url: 'https://www.espn.com.cn/', logo: 'https://www.espn.com.cn/favicon.ico' },
  { name: '腾讯体育', url: 'https://sports.qq.com/', logo: 'https://sports.qq.com/favicon.ico' },
];

// 平台配置
const platformsConfig: Platform[] = [
  { id: 'weibo', name: '微博', logo: '📱' },
  { id: 'douyin', name: '抖音', logo: '🎵' },
  { id: 'bilibili', name: '哔哩哔哩', logo: '📺' },
  { id: 'xiaohongshu', name: '小红书', logo: '📖' },
];

export default function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [hotSearches, setHotSearches] = useState<HotSearch[]>([]);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [mediaCategory, setMediaCategory] = useState<string>('mainstream');
  const [professionalCategory, setProfessionalCategory] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('weibo');
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await newsApiService.getNews(mediaCategory, professionalCategory, selectedSource);
      if (response.success) {
        setNews(response.data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchHotSearches = async (platform: string) => {
    try {
      const response = await newsApiService.getHotSearches(platform);
      if (response.success) {
        setHotSearches(response.data);
      }
    } catch (error) {
      console.error('Error fetching hot searches:', error);
    }
  };

  useEffect(() => {
    fetchHotSearches(selectedPlatform);
  }, [selectedPlatform]);

  useEffect(() => {
    setSelectedSource(null);
    fetchNews();
  }, [mediaCategory, professionalCategory]);

  useEffect(() => {
    fetchNews();
  }, [selectedSource]);

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'text-red-500 font-bold';
    if (rank === 2) return 'text-orange-500 font-bold';
    if (rank === 3) return 'text-yellow-500 font-bold';
    return 'text-gray-500';
  };

  // 按媒体分类筛选媒体源
  const filteredSources = sourcesConfig.filter(source => {
    if (mediaCategory === 'mainstream') {
      return ['新华社', '人民日报', '央视新闻', '澎湃新闻', '环球时报', '中国新闻网'].includes(source.name);
    } else if (mediaCategory === 'professional') {
      if (professionalCategory === 'tech') {
        return ['少数派', 'iO', 'IT之家', '36氪', '爱范儿'].includes(source.name);
      } else if (professionalCategory === 'finance') {
        return ['第一财经', '晚点', '界面', '财新网', '华尔街见闻'].includes(source.name);
      } else if (professionalCategory === 'sports') {
        return ['虎扑', '懂球帝', 'ESPN中文', '腾讯体育'].includes(source.name);
      }
      return true;
    }
    return true;
  });

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
                {filteredSources.map((source) => (
                  <button
                    key={source.name}
                    onClick={() => setSelectedSource(source.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                      selectedSource === source.name
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    <img
                      src={source.logo}
                      alt={source.name}
                      className="w-5 h-5 rounded"
                      onError={(e) => {
                        // 如果logo加载失败，使用默认图标
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/20';
                      }}
                    />
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
                {platformsConfig.map((platform) => (
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
