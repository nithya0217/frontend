'use client';

import { Bookmark } from 'lucide-react';

export interface FeedArticle {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
  thumbnail: string;
  tags: string[];
}

interface FeedArticleItemProps {
  article: FeedArticle;
}

export default function FeedArticleItem({
  article,
}: FeedArticleItemProps) {
  return (
    <article className="flex gap-4 sm:gap-6 py-6 border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200 group">
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex-shrink-0 flex items-center justify-center text-xs font-semibold text-gray-700">
            {article.author.charAt(0)}
          </div>

          <div className="flex items-center gap-1 min-w-0">
            <span className="text-xs font-medium text-gray-900 truncate">{article.author}</span>
            <span className="text-gray-300 text-xs">·</span>
            <span className="text-xs text-gray-500 flex-shrink-0">{article.publishDate}</span>
          </div>
        </div>

        <h2 className="text-lg sm:text-xl font-bold font-lora text-black leading-tight mb-2 group-hover:text-gray-700 transition-colors line-clamp-3 cursor-pointer">
          {article.title}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-2 mb-3 leading-snug">
          {article.subtitle}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xs text-gray-500 flex-shrink-0">{article.readTime}</span>
            <span className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex-shrink-0">
              {article.tags[0] ?? 'Article'}
            </span>
          </div>

          <button className="p-2 -mr-2 text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0">
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="hidden sm:flex w-32 h-32 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex-shrink-0 overflow-hidden cursor-pointer group-hover:opacity-80 transition-opacity duration-200">
        {article.thumbnail ? (
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl">
            📰
          </div>
        )}
      </div>
    </article>
  );
}
