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
    <article className="border-b border-gray-200 py-8">
      <div className="flex gap-6">
        {/* Content Section */}
        <div className="flex flex-1 flex-col gap-3">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            {publication && (
              <>
                <span className="font-medium text-gray-700">{publication}</span>
                <span>·</span>
              </>
            )}
            <span>{author}</span>
            <span>·</span>
            <time>{date}</time>
            {readingTime && (
              <>
                <span>·</span>
                <span>{readingTime}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h2 className="font-lora text-2xl font-bold leading-tight text-black hover:text-gray-700">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="max-h-[3.5rem] overflow-hidden text-base text-gray-600">{subtitle}</p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex gap-4 text-gray-600">
              <button className="flex items-center gap-1 text-sm transition-colors hover:text-green-600">
                <span className="text-base">👏</span>
                <span className="text-xs text-gray-500">1.2K</span>
              </button>
              <button className="flex items-center gap-1 text-sm transition-colors hover:text-blue-600">
                <MessageCircle size={18} className="text-gray-500" />
                <span className="text-xs text-gray-500">45</span>
              </button>
              <button className="flex items-center gap-1 text-sm transition-colors hover:text-blue-600">
                <Share2 size={18} className="text-gray-500" />
              </button>
            </div>

            {/* Save Button */}
            <button
              className={`rounded-full p-2 transition-colors ${
                liked
                  ? 'bg-gray-100 text-green-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookmarkIcon size={20} />
            </button>
          </div>
        </div>

        {/* Image Section */}
        {imageUrl && (
          <div className="hidden flex-shrink-0 sm:block">
            <div className="h-40 w-40 overflow-hidden rounded-lg bg-gray-200">
              <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
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
