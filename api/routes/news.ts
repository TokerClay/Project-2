
import { Router, Request, Response } from 'express';
import { mockNews, sources } from '../data/newsData';
import { NewsListResponse, NewsDetailResponse } from '../../shared/types';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const sourceFilter = req.query.source as string;
  let filteredNews = [...mockNews];

  if (sourceFilter) {
    filteredNews = filteredNews.filter(news => news.source === sourceFilter);
  }

  const response: NewsListResponse = {
    success: true,
    data: filteredNews,
    total: filteredNews.length,
  };

  res.json(response);
});

router.get('/sources', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: sources,
  });
});

router.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const news = mockNews.find(n => n.id === id);

  const response: NewsDetailResponse = {
    success: true,
    data: news || null,
  };

  if (!news) {
    res.status(404);
  }

  res.json(response);
});

export default router;
