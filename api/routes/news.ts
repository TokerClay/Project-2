
import { Router, Request, Response } from 'express';
import { mockNews, allSources, mainstreamSources, techSources, financeSources, sportsSources } from '../data/newsData';
import { NewsListResponse, NewsDetailResponse } from '../../shared/types';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const sourceFilter = req.query.source as string;
  const mediaCategoryFilter = req.query.mediaCategory as string;
  const professionalCategoryFilter = req.query.professionalCategory as string;
  
  let filteredNews = [...mockNews];

  if (sourceFilter) {
    filteredNews = filteredNews.filter(news => news.source === sourceFilter);
  }

  if (mediaCategoryFilter) {
    filteredNews = filteredNews.filter(news => news.mediaCategory === mediaCategoryFilter);
  }

  if (professionalCategoryFilter) {
    filteredNews = filteredNews.filter(news => news.professionalCategory === professionalCategoryFilter);
  }

  const response: NewsListResponse = {
    success: true,
    data: filteredNews,
    total: filteredNews.length,
  };

  res.json(response);
});

router.get('/sources', (req: Request, res: Response) => {
  const mediaCategoryFilter = req.query.mediaCategory as string;
  const professionalCategoryFilter = req.query.professionalCategory as string;
  
  let filteredSources = [...allSources];

  if (mediaCategoryFilter) {
    filteredSources = filteredSources.filter(source => source.mediaCategory === mediaCategoryFilter);
  }

  if (professionalCategoryFilter) {
    filteredSources = filteredSources.filter(source => source.professionalCategory === professionalCategoryFilter);
  }

  res.json({
    success: true,
    data: filteredSources,
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
