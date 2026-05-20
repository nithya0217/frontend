"use client";

import React from "react";

type Article = {
	id: number | string;
	title: string;
	excerpt?: string;
	author?: string;
	tags?: string[];
	slug?: string;
};

export default function ArticleCard({ article }: { article: Article }) {
	const handleClick = async () => {
		try {
      await fetch("/api/interactions/log", {
				body: JSON.stringify({ article_id: article.id, type: "view" }),
			});
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_) {
			// ignore network errors
		}
	};

	return (
		<article onClick={handleClick} className="group cursor-pointer rounded-lg border p-4 hover:shadow-lg">
			<h3 className="text-lg font-semibold">{article.title}</h3>
			{article.excerpt && <p className="mt-2 text-sm text-gray-600">{article.excerpt}</p>}
			<div className="mt-3 flex items-center justify-between text-xs text-gray-500">
				<span>{article.author ?? "Unknown"}</span>
				<div className="flex gap-2">
					{article.tags?.slice(0, 3).map((t) => (
						<span key={t} className="rounded bg-gray-100 px-2 py-0.5">{t}</span>
					))}
				</div>
			</div>
		</article>
	);
}

