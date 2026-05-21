export type FeedPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  likes: number;
  comments: number;
  readingTime: string;
};

const mockPosts: FeedPost[] = [
  {
    id: 1,
    title: "How Modern Readers Rediscover Stories",
    excerpt:
      "A concise exploration of how storytelling, curation, and interface design can help readers find meaningful content in noisy feeds.",
    author: "julia_writer",
    publishedAt: "May 20, 2026",
    tags: ["Reading", "Design", "Community"],
    likes: 178,
    comments: 24,
    readingTime: "6 min read",
  },
  {
    id: 2,
    title: "Building a Better Writing Workflow",
    excerpt:
      "Practical habits and editor patterns for authors who want to ship high-quality blog content without burning out.",
    author: "tech_scribe",
    publishedAt: "May 18, 2026",
    tags: ["Writing", "Productivity"],
    likes: 224,
    comments: 41,
    readingTime: "8 min read",
  },
  {
    id: 3,
    title: "Designing Trust in Social Recommendations",
    excerpt:
      "A look at how signals, feedback loops, and human curation can reduce algorithmic noise while surfacing valuable connections.",
    author: "ali_malik",
    publishedAt: "May 15, 2026",
    tags: ["AI", "Trust", "UX"],
    likes: 312,
    comments: 57,
    readingTime: "7 min read",
  },
  {
    id: 4,
    title: "Why Community-Driven Blogs Still Matter",
    excerpt:
      "A thoughtful argument for why niche writers and engaged readers are the best long-term signal for rich content discovery.",
    author: "nina_verse",
    publishedAt: "May 12, 2026",
    tags: ["Community", "Culture"],
    likes: 142,
    comments: 18,
    readingTime: "5 min read",
  },
];

export async function getMockPosts(): Promise<FeedPost[]> {
  return mockPosts;
}

export function createMockPost(payload: {
  title: string;
  excerpt: string;
  body: string;
  tags: string[];
  author: string;
}): FeedPost {
  const nextId = mockPosts.length ? Math.max(...mockPosts.map((post) => post.id)) + 1 : 1;
  const wordCount = payload.body.replace(/<[^>]*>/g, "").trim().split(/\s+/).filter(Boolean).length;
  const readingTime = `${Math.max(1, Math.ceil(wordCount / 180))} min read`;

  const newPost: FeedPost = {
    id: nextId,
    title: payload.title,
    excerpt: payload.excerpt,
    author: payload.author,
    publishedAt: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    tags: payload.tags,
    likes: 0,
    comments: 0,
    readingTime,
  };

  mockPosts.unshift(newPost);
  return newPost;
}
