'use client';

import { BookmarkIcon, Share2 } from 'lucide-react';

interface ArticlePreviewProps {
  publication?: string;
  author: string;
  date: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  readingTime?: string;
  tags?: string[];
  liked?: boolean;
}

export default function ArticlePreview({
  publication,
  author,
  date,
  title,
  subtitle,
  imageUrl,
  readingTime,
  tags = [],
  liked = false,
}: ArticlePreviewProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid gap-6 lg:grid-cols-[1fr_220px] lg:items-start">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
            {publication && <span>{publication}</span>}
            <span>{author}</span>
            <span>{date}</span>
            {readingTime && <span>{readingTime}</span>}
          </div>

          <h2 className="font-lora text-3xl font-bold leading-tight text-slate-950 transition-colors hover:text-slate-700">
            {title}
          </h2>

          <p className="text-base leading-7 text-slate-600">{subtitle}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200">
                <span>👏</span>
                <span>1.2K</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200">
                <MessageCircle size={16} className="text-slate-500" />
                <span>45</span>
              </button>
            </div>
            <button
              className={`inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold transition ${
                liked
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <BookmarkIcon size={16} />
            </button>
          </div>
        </div>

        {imageUrl && (
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
            <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </article>
  );
}

function MessageCircle({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
