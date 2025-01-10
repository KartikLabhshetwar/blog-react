export interface DummyPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export interface DummyResponse {
  posts: DummyPost[];
  total: number;
  skip: number;
  limit: number;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  source: string;
  url: string;
} 