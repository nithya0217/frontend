"use client";

import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

type Article = {
	id: number | string;
	title: string;
	excerpt?: string;
	author?: string;
	tags?: string[];
};

export default function FeedContainer() {
	const [articles, setArticles] = useState<Article[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let mounted = true;

		const load = async () => {
			setLoading(true);
			setError(null);
			try {
				// Primary feed endpoint; fallback to trending
				const res = await fetch("/api/feed/pivot");
				if (!res.ok) {
					throw new Error("primary feed failed");
				}
				const data = await res.json();
				// Handle different response formats
				let articles = Array.isArray(data) ? data : data?.articles || [];
				if (mounted) setArticles(articles);
			} catch (e) {
				try {
					const fallback = await fetch("/api/articles/trending");
					const data = await fallback.json();
					// Handle different response formats
					let articles = Array.isArray(data) ? data : data?.articles || [];
					if (mounted) setArticles(articles);
				} catch (err) {
					if (mounted) setError("Failed to load feed");
				}
			} finally {
				if (mounted) setLoading(false);
			}
		};

		load();

		return () => {
			mounted = false;
		};
	}, []);

	if (loading) return <div className="py-12 text-center">Loading feed…</div>;
	if (error) return <div className="py-12 text-center text-red-600">{error}</div>;

	return (
		<section className="grid gap-4 md:grid-cols-2">
			{articles.length === 0 && <div>No articles found.</div>}
			{articles.map((a) => (
				<ArticleCard key={String(a.id)} article={a} />
			))}
		</section>
	);
}
