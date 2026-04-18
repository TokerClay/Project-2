
import axios from 'axios';
import { News, HotSearch } from '../../shared/types';

// 模拟API，实际项目中可以替换为真实的新闻API
class NewsApiService {
  private apiKey = 'test-api-key';
  private baseUrl = 'https://newsapi.org/v2';

  // 获取新闻列表
  async getNews(mediaCategory?: string, professionalCategory?: string, source?: string) {
    try {
      // 模拟API调用，实际项目中替换为真实API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // 生成模拟的真实新闻数据
      const news = this.generateMockRealNews(mediaCategory, professionalCategory, source);
      return {
        success: true,
        data: news,
        total: news.length
      };
    } catch (error) {
      console.error('Error fetching news:', error);
      return {
        success: false,
        data: [],
        total: 0
      };
    }
  }

  // 获取热搜
  async getHotSearches(platform: string) {
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const hotSearches = this.generateMockHotSearches(platform);
      return {
        success: true,
        data: hotSearches
      };
    } catch (error) {
      console.error('Error fetching hot searches:', error);
      return {
        success: false,
        data: []
      };
    }
  }

  // 生成模拟的真实新闻数据
  private generateMockRealNews(mediaCategory?: string, professionalCategory?: string, source?: string): News[] {
    const now = new Date();
    const news: News[] = [];

    // 主流媒体新闻
    const mainstreamNews = [
      {
        id: `mainstream-1`,
        title: '习近平同法国总统马克龙举行会谈',
        summary: '两国元首就中法关系及共同关心的重大国际和地区问题深入交换意见，达成重要共识。双方一致同意，坚持相互尊重、平等相待、开放包容、互利共赢，推动中法关系不断迈上新台阶。',
        source: '新华社',
        sourceUrl: 'https://www.xinhuanet.com/',
        sourceLogo: 'https://www.xinhuanet.com/favicon.ico',
        publishedAt: new Date(now.getTime() - 30 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop',
        category: '国内',
        mediaCategory: 'mainstream'
      },
      {
        id: `mainstream-2`,
        title: '国务院印发《关于促进数字经济发展的指导意见》',
        summary: '意见提出，到2025年，数字经济核心产业增加值占GDP比重达到10%，数字化创新能力显著增强，数字化转型成效明显。',
        source: '人民日报',
        sourceUrl: 'https://www.people.com.cn/',
        sourceLogo: 'https://www.people.com.cn/favicon.ico',
        publishedAt: new Date(now.getTime() - 60 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
        category: '财经',
        mediaCategory: 'mainstream'
      },
      {
        id: `mainstream-3`,
        title: '第三十六届中国电影金鸡奖颁奖典礼在厦门举行',
        summary: '颁奖典礼上，《流浪地球2》获得最佳故事片奖，吴京凭借《流浪地球2》获得最佳男主角奖，赵丽颖凭借《第二十条》获得最佳女主角奖。',
        source: '央视新闻',
        sourceUrl: 'https://news.cctv.com/',
        sourceLogo: 'https://news.cctv.com/favicon.ico',
        publishedAt: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop',
        category: '文化',
        mediaCategory: 'mainstream'
      },
      {
        id: `mainstream-4`,
        title: '中国女足在巴黎奥运会预选赛中取得开门红',
        summary: '中国女足在巴黎奥运会预选赛亚洲区第二阶段比赛中，以2-0战胜韩国队，取得开门红。王霜和王珊珊分别建功。',
        source: '澎湃新闻',
        sourceUrl: 'https://www.thepaper.cn/',
        sourceLogo: 'https://www.thepaper.cn/favicon.ico',
        publishedAt: new Date(now.getTime() - 3 * 60 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop',
        category: '体育',
        mediaCategory: 'mainstream'
      },
      {
        id: `mainstream-5`,
        title: '全球气候变化大会在迪拜举行，各国承诺减排',
        summary: '第28届联合国气候变化大会在迪拜举行，与会各国承诺加强合作，共同应对气候变化挑战，推动绿色低碳发展。',
        source: '环球时报',
        sourceUrl: 'https://www.huanqiu.com/',
        sourceLogo: 'https://www.huanqiu.com/favicon.ico',
        publishedAt: new Date(now.getTime() - 4 * 60 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&auto=format&fit=crop',
        category: '国际',
        mediaCategory: 'mainstream'
      }
    ];

    // 科技媒体新闻
    const techNews = [
      {
        id: `tech-1`,
        title: '苹果发布Vision Pro 2，售价2999美元起',
        summary: '苹果在WWDC2024上发布了Vision Pro 2，搭载M3芯片，重量减轻20%，电池续航提升至8小时，起售价2999美元。',
        source: '少数派',
        sourceUrl: 'https://sspai.com/',
        sourceLogo: 'https://sspai.com/favicon.ico',
        publishedAt: new Date(now.getTime() - 15 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&auto=format&fit=crop',
        category: '科技',
        mediaCategory: 'professional',
        professionalCategory: 'tech'
      },
      {
        id: `tech-2`,
        title: 'OpenAI发布GPT-5，支持多模态理解',
        summary: 'OpenAI发布GPT-5，支持图像、音频、视频等多模态理解，参数规模达到10万亿，推理速度提升10倍。',
        source: 'IT之家',
        sourceUrl: 'https://www.ithome.com/',
        sourceLogo: 'https://www.ithome.com/favicon.ico',
        publishedAt: new Date(now.getTime() - 45 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1677442135111-3426c288b372?w=800&auto=format&fit=crop',
        category: '科技',
        mediaCategory: 'professional',
        professionalCategory: 'tech'
      },
      {
        id: `tech-3`,
        title: '小米SU7销量突破10万台，成为国内新能源汽车销量冠军',
        summary: '小米SU7上市三个月销量突破10万台，成为国内新能源汽车市场销量冠军，超越特斯拉Model 3和比亚迪汉。',
        source: '36氪',
        sourceUrl: 'https://36kr.com/',
        sourceLogo: 'https://36kr.com/favicon.ico',
        publishedAt: new Date(now.getTime() - 90 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1593941707705-9d9400c576ae?w=800&auto=format&fit=crop',
        category: '科技',
        mediaCategory: 'professional',
        professionalCategory: 'tech'
      }
    ];

    // 财经媒体新闻
    const financeNews = [
      {
        id: `finance-1`,
        title: 'A股市场迎来牛市，沪指突破4000点',
        summary: 'A股市场持续走强，沪指突破4000点大关，创5年新高。券商板块领涨，科技、医药等板块表现活跃。',
        source: '第一财经',
        sourceUrl: 'https://www.yicai.com/',
        sourceLogo: 'https://www.yicai.com/favicon.ico',
        publishedAt: new Date(now.getTime() - 25 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1612178537253-4eeea10786b0?w=800&auto=format&fit=crop',
        category: '财经',
        mediaCategory: 'professional',
        professionalCategory: 'finance'
      },
      {
        id: `finance-2`,
        title: '腾讯2024年Q1财报超预期，净利润增长30%',
        summary: '腾讯控股发布2024年第一季度财报，营收达到1500亿元，净利润450亿元，同比增长30%，超市场预期。',
        source: '晚点',
        sourceUrl: 'https://www.latepost.com/',
        sourceLogo: 'https://www.latepost.com/favicon.ico',
        publishedAt: new Date(now.getTime() - 55 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1581578731548-c646966966a5?w=800&auto=format&fit=crop',
        category: '财经',
        mediaCategory: 'professional',
        professionalCategory: 'finance'
      }
    ];

    // 体育媒体新闻
    const sportsNews = [
      {
        id: `sports-1`,
        title: 'CBA总决赛：辽宁队4-1战胜广东队夺冠',
        summary: 'CBA总决赛第五场，辽宁队以105-95战胜广东队，总比分4-1夺冠，郭艾伦获得总决赛MVP。',
        source: '虎扑',
        sourceUrl: 'https://www.hupu.com/',
        sourceLogo: 'https://www.hupu.com/favicon.ico',
        publishedAt: new Date(now.getTime() - 35 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
        category: '体育',
        mediaCategory: 'professional',
        professionalCategory: 'sports'
      },
      {
        id: `sports-2`,
        title: '国足世预赛：中国队2-0战胜泰国队',
        summary: '世界杯预选赛亚洲区36强赛，中国队在主场以2-0战胜泰国队，取得开门红，武磊和张玉宁分别进球。',
        source: '懂球帝',
        sourceUrl: 'https://www.dongqiudi.com/',
        sourceLogo: 'https://www.dongqiudi.com/favicon.ico',
        publishedAt: new Date(now.getTime() - 65 * 60 * 1000).toISOString(),
        imageUrl: 'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?w=800&auto=format&fit=crop',
        category: '体育',
        mediaCategory: 'professional',
        professionalCategory: 'sports'
      }
    ];

    // 组合新闻数据
    if (!mediaCategory || mediaCategory === 'mainstream') {
      news.push(...mainstreamNews);
    }

    if (mediaCategory === 'professional') {
      if (!professionalCategory || professionalCategory === 'tech') {
        news.push(...techNews);
      }
      if (!professionalCategory || professionalCategory === 'finance') {
        news.push(...financeNews);
      }
      if (!professionalCategory || professionalCategory === 'sports') {
        news.push(...sportsNews);
      }
    }

    // 按来源筛选
    if (source) {
      return news.filter(item => item.source === source);
    }

    // 按发布时间排序
    return news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  // 生成模拟热搜数据
  private generateMockHotSearches(platform: string): HotSearch[] {
    const hotSearchesMap = {
      weibo: [
        { id: 'wb-1', platform: 'weibo', rank: 1, title: '习近平同法国总统马克龙会谈', hotValue: '2.5亿', url: 'https://s.weibo.com/' },
        { id: 'wb-2', platform: 'weibo', rank: 2, title: '苹果发布Vision Pro 2', hotValue: '1.8亿', url: 'https://s.weibo.com/' },
        { id: 'wb-3', platform: 'weibo', rank: 3, title: 'A股突破4000点', hotValue: '1.2亿', url: 'https://s.weibo.com/' },
        { id: 'wb-4', platform: 'weibo', rank: 4, title: '中国女足战胜韩国', hotValue: '9500万', url: 'https://s.weibo.com/' },
        { id: 'wb-5', platform: 'weibo', rank: 5, title: '腾讯Q1财报超预期', hotValue: '8300万', url: 'https://s.weibo.com/' }
      ],
      douyin: [
        { id: 'dy-1', platform: 'douyin', rank: 1, title: 'Vision Pro 2上手体验', hotValue: '3.2亿', url: 'https://www.douyin.com/' },
        { id: 'dy-2', platform: 'douyin', rank: 2, title: 'CBA总决赛精彩瞬间', hotValue: '2.7亿', url: 'https://www.douyin.com/' },
        { id: 'dy-3', platform: 'douyin', rank: 3, title: '小米SU7驾驶体验', hotValue: '2.1亿', url: 'https://www.douyin.com/' },
        { id: 'dy-4', platform: 'douyin', rank: 4, title: 'GPT-5功能演示', hotValue: '1.8亿', url: 'https://www.douyin.com/' },
        { id: 'dy-5', platform: 'douyin', rank: 5, title: '国足世预赛集锦', hotValue: '1.5亿', url: 'https://www.douyin.com/' }
      ],
      bilibili: [
        { id: 'bl-1', platform: 'bilibili', rank: 1, title: 'Vision Pro 2深度评测', hotValue: '1.5亿', url: 'https://www.bilibili.com/' },
        { id: 'bl-2', platform: 'bilibili', rank: 2, title: 'GPT-5使用指南', hotValue: '1.2亿', url: 'https://www.bilibili.com/' },
        { id: 'bl-3', platform: 'bilibili', rank: 3, title: '小米SU7对比特斯拉', hotValue: '9800万', url: 'https://www.bilibili.com/' },
        { id: 'bl-4', platform: 'bilibili', rank: 4, title: 'CBA总决赛解说', hotValue: '8500万', url: 'https://www.bilibili.com/' },
        { id: 'bl-5', platform: 'bilibili', rank: 5, title: '国足世预赛分析', hotValue: '7200万', url: 'https://www.bilibili.com/' }
      ],
      xiaohongshu: [
        { id: 'xh-1', platform: 'xiaohongshu', rank: 1, title: 'Vision Pro 2使用感受', hotValue: '1.8亿', url: 'https://www.xiaohongshu.com/' },
        { id: 'xh-2', platform: 'xiaohongshu', rank: 2, title: 'A股投资策略', hotValue: '1.5亿', url: 'https://www.xiaohongshu.com/' },
        { id: 'xh-3', platform: 'xiaohongshu', rank: 3, title: '小米SU7提车日记', hotValue: '1.2亿', url: 'https://www.xiaohongshu.com/' },
        { id: 'xh-4', platform: 'xiaohongshu', rank: 4, title: 'CBA总决赛现场体验', hotValue: '1.0亿', url: 'https://www.xiaohongshu.com/' },
        { id: 'xh-5', platform: 'xiaohongshu', rank: 5, title: '国足比赛观后感', hotValue: '8800万', url: 'https://www.xiaohongshu.com/' }
      ]
    };

    return hotSearchesMap[platform as keyof typeof hotSearchesMap] || [];
  }
}

export const newsApiService = new NewsApiService();
