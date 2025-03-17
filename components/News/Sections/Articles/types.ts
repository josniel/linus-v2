export interface Article {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  publication_id: string;
  responses_count: number;
  word_count: number;
  reading_time: number;
  topics: string[];
  tags: string[];
  claps: number;
  voters: number;
  is_series: boolean;
  is_shortform: boolean;
  is_locked: boolean;
  lang: string;
  published_at: string;
  last_modified_at: string;
  unique_slug: string;
  url: string;
  image_url: string;
  top_highlight: string;
}
