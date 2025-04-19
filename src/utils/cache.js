import { formatDate, getTimeRead } from '@/utils/blog';

const CACHE_KEY = 'github_posts_cache';
const CACHE_TIME_KEY = 'github_posts_cache_time';
const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

export function getCachedPosts() {
  const data = localStorage.getItem(CACHE_KEY);
  const time = localStorage.getItem(CACHE_TIME_KEY);
  if (!data || !time) return null;
  if (Date.now() - Number(time) > FIVE_DAYS_MS) return null;
  return JSON.parse(data);
}

export function setCachedPosts(posts) {
  const mappedPosts = posts.map(post => ({
    title: post.title,
    body: `${post.body.slice(10, 160)}...`,
    date: formatDate(post.created_at),
    readTime: getTimeRead(post.body),
    number: post.number,
  }));

  localStorage.setItem(CACHE_KEY, JSON.stringify(mappedPosts));
  localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
}
