
export interface News {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  sourceLogo: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
  mediaCategory: string; // 媒体分类：mainstream, professional
  professionalCategory?: string; // 专业媒体分类：tech, finance, sports等
}

export interface NewsListResponse {
  success: boolean;
  data: News[];
  total: number;
}

export interface NewsDetailResponse {
  success: boolean;
  data: News | null;
}

export interface HotSearch {
  id: string;
  platform: string; // 平台：weibo, douyin, bilibili, xiaohongshu
  rank: number;
  title: string;
  hotValue?: string;
  url?: string;
}

export interface HotSearchResponse {
  success: boolean;
  data: HotSearch[];
}

export interface Source {
  name: string;
  url: string;
  logo: string;
  mediaCategory: string;
  professionalCategory?: string;
}
