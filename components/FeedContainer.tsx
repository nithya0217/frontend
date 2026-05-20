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

		const fetchArticles = async () => {
			setLoading(true);
			setError(null);

			const loadFromEndpoint = async (url: string) => {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`Fetch failed: ${response.status}`);
				}
				const payload = await response.json();
				return Array.isArray(payload) ? payload : payload?.articles || [];
			};

			try {
				const primaryArticles = await loadFromEndpoint("/api/feed/pivot");
				if (mounted) setArticles(primaryArticles);
			} catch (primaryError) {
				try {
					const fallbackArticles = await loadFromEndpoint("/api/articles/trending");
					if (mounted) setArticles(fallbackArticles);
				} catch (fallbackError) {
					if (mounted) setError("Failed to load feed");
				}
			} finally {
				if (mounted) setLoading(false);
			}
		};

		fetchArticles();

		return () => {
			mounted = false;
		};
	}, []);

	if (loading) {
		return <div className="py-12 text-center">Loading feed…</div>;
	}

	if (error) {
		return <div className="py-12 text-center text-red-600">{error}</div>;
	}

	return (
		<section className="grid gap-4 md:grid-cols-2">
			{articles.length === 0 ? (
				<div>No articles found.</div>
			) : (
				articles.map((a) => (
					<ArticleCard key={String(a.id)} article={a} />
				))
			)}
		</section>
	);
}
