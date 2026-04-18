
import { Router, Request, Response } from 'express';
import { mockHotSearches, platforms } from '../data/hotSearchData';
import { HotSearchResponse } from '../../shared/types';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const platformFilter = req.query.platform as string;
  let filteredHotSearches = [...mockHotSearches];

  if (platformFilter) {
    filteredHotSearches = filteredHotSearches.filter(hs => hs.platform === platformFilter);
  }

  const response: HotSearchResponse = {
    success: true,
    data: filteredHotSearches,
  };

  res.json(response);
});

router.get('/platforms', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: platforms,
  });
});

export default router;
