
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
