
import { News, Source } from '../../shared/types';

// 主流媒体
export const mainstreamSources: Source[] = [
  { name: '新华社', url: 'https://www.xinhuanet.com/', logo: '📰', mediaCategory: 'mainstream' },
  { name: '人民日报', url: 'https://www.people.com.cn/', logo: '🗞️', mediaCategory: 'mainstream' },
  { name: '央视新闻', url: 'https://news.cctv.com/', logo: '📺', mediaCategory: 'mainstream' },
  { name: '澎湃新闻', url: 'https://www.thepaper.cn/', logo: '🌊', mediaCategory: 'mainstream' },
  { name: '环球时报', url: 'https://www.huanqiu.com/', logo: '🌍', mediaCategory: 'mainstream' },
  { name: '中国新闻网', url: 'https://www.chinanews.com.cn/', logo: '📡', mediaCategory: 'mainstream' },
];

// 科技媒体
export const techSources: Source[] = [
  { name: '少数派', url: 'https://sspai.com/', logo: '📱', mediaCategory: 'professional', professionalCategory: 'tech' },
  { name: 'iO', url: 'https://www.iozh.com/', logo: '🔧', mediaCategory: 'professional', professionalCategory: 'tech' },
  { name: 'IT之家', url: 'https://www.ithome.com/', logo: '💻', mediaCategory: 'professional', professionalCategory: 'tech' },
  { name: '36氪', url: 'https://36kr.com/', logo: '🚀', mediaCategory: 'professional', professionalCategory: 'tech' },
  { name: '爱范儿', url: 'https://www.ifanr.com/', logo: '📲', mediaCategory: 'professional', professionalCategory: 'tech' },
];

// 财经媒体
export const financeSources: Source[] = [
  { name: '第一财经', url: 'https://www.yicai.com/', logo: '📈', mediaCategory: 'professional', professionalCategory: 'finance' },
  { name: '晚点', url: 'https://www.latepost.com/', logo: '⏰', mediaCategory: 'professional', professionalCategory: 'finance' },
  { name: '界面', url: 'https://www.jiemian.com/', logo: '📰', mediaCategory: 'professional', professionalCategory: 'finance' },
  { name: '财新网', url: 'https://www.caixin.com/', logo: '💰', mediaCategory: 'professional', professionalCategory: 'finance' },
  { name: '华尔街见闻', url: 'https://wallstreetcn.com/', logo: '🏙️', mediaCategory: 'professional', professionalCategory: 'finance' },
];

// 体育媒体
export const sportsSources: Source[] = [
  { name: '虎扑', url: 'https://www.hupu.com/', logo: '🏀', mediaCategory: 'professional', professionalCategory: 'sports' },
  { name: '懂球帝', url: 'https://www.dongqiudi.com/', logo: '⚽', mediaCategory: 'professional', professionalCategory: 'sports' },
  { name: 'ESPN中文', url: 'https://www.espn.com.cn/', logo: '🎯', mediaCategory: 'professional', professionalCategory: 'sports' },
  { name: '腾讯体育', url: 'https://sports.qq.com/', logo: '🏆', mediaCategory: 'professional', professionalCategory: 'sports' },
];

// 所有媒体源
export const allSources: Source[] = [
  ...mainstreamSources,
  ...techSources,
  ...financeSources,
  ...sportsSources,
];

export const categories = ['国内', '国际', '科技', '财经', '文化', '体育'];

const generateMockNews = (): News[] => {
  const news: News[] = [];
  const now = new Date();
  
  const mainstreamTitles = [
    '重大突破！我国科研团队取得世界级成果',
    '经济持续向好，多项指标创历史新高',
    '科技创新引领未来产业发展新方向',
    '国际合作取得新进展，全球化进程加速',
    '文化产业蓬勃发展，传统文化焕发新生机',
    '体育盛事精彩纷呈，运动员再创佳绩',
    '民生工程稳步推进，人民生活水平显著提高',
    '生态环境保护成效显著，绿色发展理念深入人心',
    '教育改革深化落实，人才培养质量全面提升',
    '医疗健康服务体系不断完善，群众就医更加便捷',
  ];

  const techTitles = [
    '苹果发布最新产品，多项创新技术引领行业',
    '人工智能大模型再升级，应用场景持续扩展',
    '新能源汽车销量创新高，产业链迎来发展机遇',
    '少数派深度评测：2024年度最佳科技产品',
    'IT之家：国产操作系统发展报告发布',
    '36氪专访：独角兽企业的成长之路',
    '爱范儿：智能家居生态新趋势',
    'iO：开发者工具的未来展望',
    '量子计算取得新突破，商业化进程加速',
    '5G+AI融合应用场景不断丰富',
  ];

  const financeTitles = [
    'A股市场持续走强，投资者信心提振',
    '第一财经：2024年经济趋势展望报告',
    '晚点独家：头部企业战略调整深度分析',
    '界面：房地产市场最新政策解读',
    '财新网：金融监管新动向',
    '华尔街见闻：全球资本市场动态',
    '人民币汇率保持稳定，外汇储备充足',
    '新经济领域融资活跃，创投市场回暖',
    '消费升级趋势明显，内需潜力持续释放',
    '产业数字化转型加速，数字经济规模扩大',
  ];

  const sportsTitles = [
    '中超联赛精彩上演，积分榜竞争激烈',
    'NBA季后赛即将开启，各队备战情况',
    '国足最新集训名单公布，世预赛备战进行中',
    '虎扑：CBA总决赛前瞻分析',
    '懂球帝：欧洲五大联赛冠军争夺',
    '奥运会倒计时，中国代表团备战情况',
    '电竞产业蓬勃发展，赛事关注度持续提升',
    '马拉松赛事热度不减，全民健身意识增强',
    '网球四大满贯赛事回顾，新星崛起',
    '冬奥会筹备进展，场馆设施全面升级',
  ];

  const summaries = [
    '这是一条具有重要意义的新闻内容，相关领域的专家学者对此给予了高度评价。该事件将对行业发展产生深远影响，为后续工作奠定坚实基础。各方正积极响应，推动相关工作有序开展。',
    '最新消息显示，该领域近期取得了显著进展。业内人士分析认为，这一趋势将持续向好，为相关从业者带来新的发展机遇。数据显示，各项指标均呈现积极态势。',
    '记者了解到，相关部门已出台一系列政策措施，全力支持该领域发展。企业界对此反应积极，纷纷加大投入力度。预计未来一段时间内，将有更多成果涌现。',
    '该新闻受到了社会各界的广泛关注。专家表示，这标志着行业发展进入了新阶段。未来，随着技术进步和政策支持，该领域将迎来更大的发展空间。',
    '深度分析文章，全面解读行业最新动态。通过大量数据和案例，为读者呈现该领域的发展脉络和未来趋势。文中还包含了多位业内专家的精彩观点。',
  ];

  const images = [
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
  ];

  // 生成主流媒体新闻
  mainstreamSources.forEach((source, index) => {
    for (let i = 0; i < 5; i++) {
      const hoursAgo = Math.floor(Math.random() * 24);
      const minutesAgo = Math.floor(Math.random() * 60);
      const publishedAt = new Date(now.getTime() - (hoursAgo * 60 * 60 * 1000 + minutesAgo * 60 * 1000));
      
      news.push({
        id: `news-mainstream-${index}-${i}`,
        title: mainstreamTitles[(index + i) % mainstreamTitles.length],
        summary: summaries[(index + i) % summaries.length],
        source: source.name,
        sourceUrl: source.url,
        sourceLogo: source.logo,
        publishedAt: publishedAt.toISOString(),
        imageUrl: images[(index + i) % images.length],
        category: categories[(index + i) % categories.length],
        mediaCategory: 'mainstream',
      });
    }
  });

  // 生成科技媒体新闻
  techSources.forEach((source, index) => {
    for (let i = 0; i < 5; i++) {
      const hoursAgo = Math.floor(Math.random() * 24);
      const minutesAgo = Math.floor(Math.random() * 60);
      const publishedAt = new Date(now.getTime() - (hoursAgo * 60 * 60 * 1000 + minutesAgo * 60 * 1000));
      
      news.push({
        id: `news-tech-${index}-${i}`,
        title: techTitles[(index + i) % techTitles.length],
        summary: summaries[(index + i) % summaries.length],
        source: source.name,
        sourceUrl: source.url,
        sourceLogo: source.logo,
        publishedAt: publishedAt.toISOString(),
        imageUrl: images[(index + i) % images.length],
        category: '科技',
        mediaCategory: 'professional',
        professionalCategory: 'tech',
      });
    }
  });

  // 生成财经媒体新闻
  financeSources.forEach((source, index) => {
    for (let i = 0; i < 5; i++) {
      const hoursAgo = Math.floor(Math.random() * 24);
      const minutesAgo = Math.floor(Math.random() * 60);
      const publishedAt = new Date(now.getTime() - (hoursAgo * 60 * 60 * 1000 + minutesAgo * 60 * 1000));
      
      news.push({
        id: `news-finance-${index}-${i}`,
        title: financeTitles[(index + i) % financeTitles.length],
        summary: summaries[(index + i) % summaries.length],
        source: source.name,
        sourceUrl: source.url,
        sourceLogo: source.logo,
        publishedAt: publishedAt.toISOString(),
        imageUrl: images[(index + i) % images.length],
        category: '财经',
        mediaCategory: 'professional',
        professionalCategory: 'finance',
      });
    }
  });

  // 生成体育媒体新闻
  sportsSources.forEach((source, index) => {
    for (let i = 0; i < 5; i++) {
      const hoursAgo = Math.floor(Math.random() * 24);
      const minutesAgo = Math.floor(Math.random() * 60);
      const publishedAt = new Date(now.getTime() - (hoursAgo * 60 * 60 * 1000 + minutesAgo * 60 * 1000));
      
      news.push({
        id: `news-sports-${index}-${i}`,
        title: sportsTitles[(index + i) % sportsTitles.length],
        summary: summaries[(index + i) % summaries.length],
        source: source.name,
        sourceUrl: source.url,
        sourceLogo: source.logo,
        publishedAt: publishedAt.toISOString(),
        imageUrl: images[(index + i) % images.length],
        category: '体育',
        mediaCategory: 'professional',
        professionalCategory: 'sports',
      });
    }
  });

  return news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const mockNews = generateMockNews();
