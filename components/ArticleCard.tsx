"use client";

import type { MouseEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { apiUrl } from "@/lib/api";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
};

const readerId = 3;

async function logInteraction(articleId: number, interactionType: string, message: string) {
  try {
    await fetch(apiUrl("/interactions"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: readerId,
        article_id: articleId,
        interaction_type: interactionType,
        reading_time_seconds: 0,
      }),
    });
  } catch {
    // Simulated telemetry; swallow network errors in the UI.
  }

  toast.success(message);
}

export default function ArticleCard({ article }: { article: Article }) {
  const [isSaving, setIsSaving] = useState(false);

  const handleCardClick = async () => {
    setIsSaving(true);
    await logInteraction(
      article.id,
      "click",
      "Algorithmic telemetry tracked: 'click' registered for Diversity Engine.",
    );
    setIsSaving(false);
  };

  const handleAction = async (
    event: MouseEvent<HTMLButtonElement>,
    interactionType: string,
    message: string,
  ) => {
    event.stopPropagation();
    setIsSaving(true);
    await logInteraction(article.id, interactionType, message);
    setIsSaving(false);
  };

  return (
    <Card onClick={handleCardClick} className="cursor-pointer">
      <CardHeader>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.22em] text-slate-500">
            <span>{article.publishedAt}</span>
            <span className="font-medium text-slate-900">{article.author}</span>
          </div>
          <h3 className="text-2xl font-semibold text-slate-950">{article.title}</h3>
          <p className="text-sm leading-6 text-slate-600">{article.excerpt}</p>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <span className="text-sm text-slate-500">Tap card to simulate the reader click signal.</span>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={(event) => handleAction(event, "like", "Like interaction queued for Diversity Engine.")}
            disabled={isSaving}
          >
            Like
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={(event) => handleAction(event, "bookmark", "Bookmark stored for diversity signal analysis.")}
            disabled={isSaving}
          >
            Bookmark
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

