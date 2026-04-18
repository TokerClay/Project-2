
import { HotSearch } from '../../shared/types';

export const platforms = [
  { id: 'weibo', name: '微博', logo: '📱' },
  { id: 'douyin', name: '抖音', logo: '🎵' },
  { id: 'bilibili', name: '哔哩哔哩', logo: '📺' },
  { id: 'xiaohongshu', name: '小红书', logo: '📖' },
];

const weiboHotSearches: HotSearch[] = [
  { id: 'wb-1', platform: 'weibo', rank: 1, title: '重大科技突破新闻', hotValue: '2.5亿', url: 'https://s.weibo.com/' },
  { id: 'wb-2', platform: 'weibo', rank: 2, title: '体育赛事最新进展', hotValue: '1.8亿', url: 'https://s.weibo.com/' },
  { id: 'wb-3', platform: 'weibo', rank: 3, title: '文化活动精彩纷呈', hotValue: '1.2亿', url: 'https://s.weibo.com/' },
  { id: 'wb-4', platform: 'weibo', rank: 4, title: '教育改革新政策', hotValue: '9500万', url: 'https://s.weibo.com/' },
  { id: 'wb-5', platform: 'weibo', rank: 5, title: '医疗健康新发现', hotValue: '8300万', url: 'https://s.weibo.com/' },
  { id: 'wb-6', platform: 'weibo', rank: 6, title: '环保新举措', hotValue: '7200万', url: 'https://s.weibo.com/' },
  { id: 'wb-7', platform: 'weibo', rank: 7, title: '消费市场动态', hotValue: '6100万', url: 'https://s.weibo.com/' },
  { id: 'wb-8', platform: 'weibo', rank: 8, title: '交通出行新变化', hotValue: '5500万', url: 'https://s.weibo.com/' },
  { id: 'wb-9', platform: 'weibo', rank: 9, title: '就业创业政策', hotValue: '4800万', url: 'https://s.weibo.com/' },
  { id: 'wb-10', platform: 'weibo', rank: 10, title: '乡村振兴新成果', hotValue: '4200万', url: 'https://s.weibo.com/' },
];

const douyinHotSearches: HotSearch[] = [
  { id: 'dy-1', platform: 'douyin', rank: 1, title: '热门生活小技巧', hotValue: '3.2亿', url: 'https://www.douyin.com/' },
  { id: 'dy-2', platform: 'douyin', rank: 2, title: '搞笑视频合集', hotValue: '2.7亿', url: 'https://www.douyin.com/' },
  { id: 'dy-3', platform: 'douyin', rank: 3, title: '美食制作教程', hotValue: '2.1亿', url: 'https://www.douyin.com/' },
  { id: 'dy-4', platform: 'douyin', rank: 4, title: '旅行风景分享', hotValue: '1.8亿', url: 'https://www.douyin.com/' },
  { id: 'dy-5', platform: 'douyin', rank: 5, title: '宠物日常视频', hotValue: '1.5亿', url: 'https://www.douyin.com/' },
  { id: 'dy-6', platform: 'douyin', rank: 6, title: '健身运动教学', hotValue: '1.2亿', url: 'https://www.douyin.com/' },
  { id: 'dy-7', platform: 'douyin', rank: 7, title: '音乐舞蹈表演', hotValue: '9800万', url: 'https://www.douyin.com/' },
  { id: 'dy-8', platform: 'douyin', rank: 8, title: '手工艺术创作', hotValue: '8500万', url: 'https://www.douyin.com/' },
  { id: 'dy-9', platform: 'douyin', rank: 9, title: '亲子互动日常', hotValue: '7300万', url: 'https://www.douyin.com/' },
  { id: 'dy-10', platform: 'douyin', rank: 10, title: '知识科普内容', hotValue: '6800万', url: 'https://www.douyin.com/' },
];

const bilibiliHotSearches: HotSearch[] = [
  { id: 'bl-1', platform: 'bilibili', rank: 1, title: '新番动画推荐', hotValue: '1.5亿', url: 'https://www.bilibili.com/' },
  { id: 'bl-2', platform: 'bilibili', rank: 2, title: '游戏攻略视频', hotValue: '1.2亿', url: 'https://www.bilibili.com/' },
  { id: 'bl-3', platform: 'bilibili', rank: 3, title: '科技数码评测', hotValue: '9800万', url: 'https://www.bilibili.com/' },
  { id: 'bl-4', platform: 'bilibili', rank: 4, title: '影视解说系列', hotValue: '8500万', url: 'https://www.bilibili.com/' },
  { id: 'bl-5', platform: 'bilibili', rank: 5, title: '学习课程分享', hotValue: '7200万', url: 'https://www.bilibili.com/' },
  { id: 'bl-6', platform: 'bilibili', rank: 6, title: '生活区日常', hotValue: '6500万', url: 'https://www.bilibili.com/' },
  { id: 'bl-7', platform: 'bilibili', rank: 7, title: '音乐翻唱作品', hotValue: '5800万', url: 'https://www.bilibili.com/' },
  { id: 'bl-8', platform: 'bilibili', rank: 8, title: '舞蹈表演视频', hotValue: '5100万', url: 'https://www.bilibili.com/' },
  { id: 'bl-9', platform: 'bilibili', rank: 9, title: '美食探店vlog', hotValue: '4600万', url: 'https://www.bilibili.com/' },
  { id: 'bl-10', platform: 'bilibili', rank: 10, title: '鬼畜搞笑内容', hotValue: '4200万', url: 'https://www.bilibili.com/' },
];

const xiaohongshuHotSearches: HotSearch[] = [
  { id: 'xh-1', platform: 'xiaohongshu', rank: 1, title: '穿搭分享推荐', hotValue: '1.8亿', url: 'https://www.xiaohongshu.com/' },
  { id: 'xh-2', platform: 'xiaohongshu', rank: 2, title: '美妆护肤攻略', hotValue: '1.5亿', url: 'https://www.xiaohongshu.com/' },
  { id: 'xh-3', platform: 'xiaohongshu', rank: 3, title: '美食探店笔记', hotValue: '1.2亿', url: 'https://www.xiaohongshu.com/' },
  { id: 'xh-4', platform: 'xiaohongshu', rank: 4, title: '旅行攻略分享', hotValue: '1.0亿', url: 'https://www.xiaohongshu.com/' },
  { id: 'xh-5', platform: 'xiaohongshu', rank: 5, title: '家居装饰灵感', hotValue: '8800万', url: 'https://www.xiaohongshu.com/' },
  { id: 'xh-6', platform: 'xiaohongshu', rank: 6, title: '健身塑形日记', hotValue: '7600万', url: 'https://www.xiaohongshu.com/' },
  { id: 'xh-7', platform: 'xiaohongshu', rank: 7, title: '母婴育儿经验', hotValue: '6800万', url: 'https://www.xiaohongshu.com/' },
  { id: 'xh-8', platform: 'xiaohongshu', rank: 8, title: '宠物养护知识', hotValue: '5900万', url: 'https://www.xiaohongshu.com/' },
  { id: 'xh-9', platform: 'xiaohongshu', rank: 9, title: '读书心得分享', hotValue: '5300万', url: 'https://www.xiaohongshu.com/' },
  { id: 'xh-10', platform: 'xiaohongshu', rank: 10, title: '职场成长经验', hotValue: '4800万', url: 'https://www.xiaohongshu.com/' },
];

export const mockHotSearches: HotSearch[] = [
  ...weiboHotSearches,
  ...douyinHotSearches,
  ...bilibiliHotSearches,
  ...xiaohongshuHotSearches,
];
