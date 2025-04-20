'use client';
import { useEffect, useState } from 'react';

export default function Theme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded rounded-full border cursor-pointer border-main border-2"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? '☀️ ' : '🌙' }
    </button>
  );
}
