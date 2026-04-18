
## 1. Architecture Design
使用React + Express + TypeScript全栈架构，后端提供新闻数据API和热搜API，前端展示新闻内容。

```mermaid
graph TB
    subgraph Frontend
        A[React SPA]
        A1[新闻列表页]
        A2[新闻详情页]
        A3[分类标签]
        A4[热搜板块]
        A --&gt; A1
        A --&gt; A2
        A1 --&gt; A3
        A1 --&gt; A4
    end
    
    subgraph Backend
        B[Express Server]
        B1[新闻API]
        B2[热搜API]
        B --&gt; B1
        B --&gt; B2
    end
    
    subgraph Data
        C[模拟数据库]
        C1[新闻数据]
        C2[热搜数据]
        C --&gt; C1
        C --&gt; C2
    end
    
    A1 --&gt; B1
    A2 --&gt; B1
    A4 --&gt; B2
    B1 --&gt; C1
    B2 --&gt; C2
```

## 2. Technology Description
- **Frontend**: React@18 + TypeScript + Tailwind CSS + Vite + React Router
- **Backend**: Express@4 + TypeScript
- **Initialization Tool**: vite-init
- **Database**: 内存模拟数据库（演示用），实际项目可替换为PostgreSQL或MongoDB
- **Icons**: lucide-react

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | 首页/新闻列表页 |
| /news/:id | 新闻详情页 |
| /api/news | 获取新闻列表API |
| /api/news/:id | 获取单条新闻详情API |
| /api/hot-searches | 获取热搜API |

## 4. API Definitions

### 4.1 Type Definitions
```typescript
interface News {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  sourceLogo: string;
  publishedAt: Date;
  imageUrl: string;
  category: string;
  mediaCategory: string; // 媒体分类：mainstream, professional
  professionalCategory?: string; // 专业媒体分类：tech, finance, sports等
}

interface NewsListResponse {
  success: boolean;
  data: News[];
  total: number;
}

interface NewsDetailResponse {
  success: boolean;
  data: News | null;
}

interface HotSearch {
  id: string;
  platform: string; // 平台：weibo, douyin, bilibili, xiaohongshu
  rank: number;
  title: string;
  hotValue?: string;
  url?: string;
}

interface HotSearchResponse {
  success: boolean;
  data: HotSearch[];
}
```

### 4.2 API Endpoints
#### GET /api/news
获取新闻列表
- Query Parameters: `mediaCategory?` (媒体分类：mainstream, professional), `professionalCategory?` (专业媒体分类：tech, finance, sports), `source?` (按媒体筛选)
- Response: `NewsListResponse`

#### GET /api/news/:id
获取单条新闻详情
- Path Parameters: `id`
- Response: `NewsDetailResponse`

#### GET /api/hot-searches
获取热搜
- Query Parameters: `platform?` (平台：weibo, douyin, bilibili, xiaohongshu)
- Response: `HotSearchResponse`

## 5. Server Architecture Diagram
后端采用模块化设计，分离路由、控制器和数据层。

```mermaid
graph LR
    A[API Router] --> B[News Controller]
    A --> C[Hot Search Controller]
    B --> D[News Data Service]
    C --> E[Hot Search Data Service]
    D --> F[Mock Database]
    E --> F
```

## 6. Data Model

### 6.1 Data Model Definition

```mermaid
erDiagram
    NEWS {
        string id PK
        string title
        string summary
        string source
        string sourceUrl
        string sourceLogo
        date publishedAt
        string imageUrl
        string category
        string mediaCategory
        string professionalCategory
    }
    
    HOT_SEARCH {
        string id PK
        string platform
        number rank
        string title
        string hotValue
        string url
    }
```

### 6.2 Mock Data Structure
使用内存数据存储新闻信息和热搜信息。

**新闻数据包含**：
- 主流媒体：新华社、人民日报、央视新闻、澎湃新闻、环球时报、中国新闻网
- 科技媒体：少数派、iO、IT之家、36氪、爱范儿
- 财经媒体：第一财经、晚点、界面、财新网、华尔街见闻
- 体育媒体：虎扑、懂球帝、ESPN中文、腾讯体育

**热搜数据包含**：
- 微博热搜
- 抖音热搜
- 哔哩哔哩热搜
- 小红书热搜
