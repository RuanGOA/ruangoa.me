import { formatDate, getTimeRead, getFirstParagraphAfterTitle } from '@/utils/blog';

const CACHE_KEY = 'github_posts_cache';
const CACHE_TIME_KEY = 'github_posts_cache_time';
const EXPIRATION_TIME_MS = 30 * 1000;

export function getCachedPosts() {
  const data = localStorage.getItem(CACHE_KEY);
  const time = localStorage.getItem(CACHE_TIME_KEY);
  if (!data || !time) return null;
  if (Date.now() - Number(time) > EXPIRATION_TIME_MS) return null;
  return JSON.parse(data);
}

export function filterPosts(posts) {
  return posts.map(post => ({
      title: post.title,
      body: getFirstParagraphAfterTitle(post.body),
      date: formatDate(post.created_at),
      readTime: getTimeRead(post.body),
      number: post.number,
    }));
}

export function setCachedPosts(posts) {
  localStorage.setItem(CACHE_KEY, JSON.stringify(posts));
  localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
}
