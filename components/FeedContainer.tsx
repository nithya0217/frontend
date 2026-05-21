"use client";

import { useMemo, useState } from "react";
import ArticleCard from "./ArticleCard";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  author_id: number;
  publishedAt: string;
  tags: string[];
};

const mockArticles: Article[] = [
  {
    id: 1,
    title: "The Future of AI",
    excerpt: "A concise view into how AI will shape the next generation of workflows, products, and content discovery.",
    author: "tech_guru",
    author_id: 1,
    publishedAt: "May 8, 2026",
    tags: ["Technology"],
  },
  {
    id: 2,
    title: "The Ethics of Being",
    excerpt: "An introspective essay exploring philosophy and the subtle contrarian signal behind a reader's preferred stream.",
    author: "philosophy_queen",
    author_id: 2,
    publishedAt: "April 18, 2026",
    tags: ["Philosophy"],
  },
];

const tabs = [
  {
    key: "discovery",
    label: "My Discovery Feed",
    description: "Matches the reader's historical interest in technology and familiar signals.",
  },
  {
    key: "diversity",
    label: "Diversity Feed",
    description: "Surfaces opposite viewpoints by routing the reader toward contrarian, diversity-oriented content.",
  },
] as const;

type FeedTab = (typeof tabs)[number]["key"];

export default function FeedContainer() {
  const [activeTab, setActiveTab] = useState<FeedTab>("discovery");

  const articles = useMemo(() => {
    if (activeTab === "diversity") {
      return mockArticles.filter((article) => article.id === 2);
    }
    return mockArticles.filter((article) => article.id === 1);
  }, [activeTab]);

  const activeLabel = tabs.find((tab) => tab.key === activeTab)?.label ?? "Feed";
  const activeDescription = tabs.find((tab) => tab.key === activeTab)?.description ?? "";

  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Discover</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">{activeLabel}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{activeDescription}</p>
          </div>
          <div className="inline-flex flex-wrap gap-2 rounded-full bg-slate-100 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === tab.key
                    ? "bg-slate-950 text-white"
                    : "text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
