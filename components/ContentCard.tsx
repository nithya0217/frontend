'use client';

import { Eye, Heart, MessageCircle } from 'lucide-react';

interface ContentCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  views: number;
  likes: number;
  comments: number;
  isPinned?: boolean;
}

export default function ContentCard({
  title,
  description,
  category,
  tags,
  views,
  likes,
  comments,
  isPinned = false,
}: ContentCardProps) {
  return (
    <div className="group relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/50">
      {/* Pinned Indicator */}
      {isPinned && (
        <div className="absolute top-3 right-3 z-10 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          Pinned
        </div>
      )}

      {/* Image Placeholder */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-slate-900/40 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl">📚</div>
            <p className="text-xs text-slate-500 mt-2">Content Image</p>
          </div>
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col h-full">
        {/* Category Badge */}
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 px-2 py-1 rounded-md">
            {category}
          </span>
          {isPinned && (
            <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/30 px-2 py-1 rounded-md">
              Trending
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2 line-clamp-2 group-hover:text-indigo-300 transition-colors cursor-pointer">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 line-clamp-2 mb-4 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 px-2.5 py-1 rounded-full transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-1 text-slate-400 hover:text-slate-200 cursor-pointer transition-colors group/stat">
            <Eye className="h-4 w-4" />
            <span className="text-xs font-medium">{(views / 1000).toFixed(1)}k</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400 hover:text-pink-400 cursor-pointer transition-colors group/stat">
            <Heart className="h-4 w-4" />
            <span className="text-xs font-medium">{likes}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400 hover:text-slate-200 cursor-pointer transition-colors group/stat">
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs font-medium">{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
