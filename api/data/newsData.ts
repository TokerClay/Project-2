
import { News } from '../../shared/types';

export const sources = [
  { name: '新华社', url: 'https://www.xinhuanet.com/', logo: '📰' },
  { name: '人民日报', url: 'https://www.people.com.cn/', logo: '🗞️' },
  { name: '央视新闻', url: 'https://news.cctv.com/', logo: '📺' },
  { name: '澎湃新闻', url: 'https://www.thepaper.cn/', logo: '🌊' },
  { name: '环球时报', url: 'https://www.huanqiu.com/', logo: '🌍' },
  { name: '中国新闻网', url: 'https://www.chinanews.com.cn/', logo: '📡' },
];

export const categories = ['国内', '国际', '科技', '财经', '文化', '体育'];

const generateMockNews = (): News[] => {
  const news: News[] = [];
  const now = new Date();
  
  const titles = [
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
    '数字经济蓬勃发展，信息化水平持续提高',
    '乡村振兴战略深入实施，农业农村现代化取得新进展',
    '区域协调发展成效显著，发展格局更加优化',
    '开放型经济新体制加快构建，国际竞争力不断增强',
    '社会治理现代化水平提升，人民群众安全感增强',
  ];

  const summaries = [
    '这是一条具有里程碑意义的重要新闻，标志着我国在相关领域取得了重大突破。专家表示，这一成果将对未来发展产生深远影响，为行业发展注入新的动力。相关部门已出台配套政策，全力推动成果转化应用。',
    '最新数据显示，我国经济运行持续向好，各项指标均超出预期。分析认为，这得益于一系列稳增长政策的实施和市场主体活力的释放。未来，我国经济将继续保持稳中向好的发展态势。',
    '科技创新正在深刻改变着我们的生活。新一代信息技术、人工智能、生物技术等领域不断取得新突破，为经济社会发展提供了强大支撑。各地纷纷加大科技创新投入，打造创新发展新高地。',
    '在全球化背景下，国际合作愈发重要。我国积极参与全球治理体系改革和建设，推动构建人类命运共同体。多双边合作成果丰硕，为世界和平与发展作出了重要贡献。',
    '文化自信日益增强，文化产业蓬勃发展。传统文化与现代科技深度融合，创造出众多深受群众喜爱的文化产品。文化走出去战略深入实施，中华文化影响力不断扩大。',
  ];

  const images = [
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop',
  ];

  for (let i = 0; i < 30; i++) {
    const source = sources[i % sources.length];
    const hoursAgo = Math.floor(Math.random() * 48);
    const minutesAgo = Math.floor(Math.random() * 60);
    const publishedAt = new Date(now.getTime() - (hoursAgo * 60 * 60 * 1000 + minutesAgo * 60 * 1000));

    news.push({
      id: `news-${i + 1}`,
      title: titles[i % titles.length],
      summary: summaries[i % summaries.length],
      source: source.name,
      sourceUrl: source.url,
      sourceLogo: source.logo,
      publishedAt: publishedAt.toISOString(),
      imageUrl: images[i % images.length],
      category: categories[i % categories.length],
    });
  }

  return news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const mockNews = generateMockNews();
