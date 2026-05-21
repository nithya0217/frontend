"use client";

import { useState } from "react";
import { FeedPost } from "@/lib/mockPosts";
import PostEditorModal from "@/components/PostEditorModal";

type FeedWithEditorProps = {
  initialPosts: FeedPost[];
};

function FeedCard({ post }: { post: FeedPost }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="px-6 py-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-slate-500">
          <span>{post.publishedAt}</span>
          <span className="font-medium text-slate-900">{post.author}</span>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{post.title}</h2>
          <p className="text-sm leading-6 text-slate-600">{post.excerpt}</p>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              {post.likes} Likes
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
              {post.comments} Comments
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.22em] text-slate-500">{post.readingTime}</span>
        </div>
      </div>
    </article>
  );
}

export default function FeedWithEditor({ initialPosts }: FeedWithEditorProps) {
  const [posts, setPosts] = useState<FeedPost[]>(initialPosts);

  const handlePostCreate = (newPost: FeedPost) => {
    setPosts((current) => [newPost, ...current]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Create</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-950">Add a new post to your feed</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Open the editor to compose a rich post and publish it directly into the feed.
          </p>
        </div>
        <PostEditorModal onPostCreate={handlePostCreate} />
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <FeedCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
