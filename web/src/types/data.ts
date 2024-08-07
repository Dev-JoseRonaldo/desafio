export interface DataProps {
  status: string,
  totalResults: string,
  articles: ArticleProps[]
}

export interface ArticleProps {
  source: {
    id: string,
    name: string,
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}