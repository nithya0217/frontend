import { NextResponse } from "next/server";
import { createMockPost } from "@/lib/mockPosts";

export async function POST(request: Request) {
  const { title, tags, body, author } = await request.json();

  if (!title || !body || !Array.isArray(tags) || tags.length === 0) {
    return NextResponse.json({ error: "Missing title, tags, or body." }, { status: 400 });
  }

  const post = createMockPost({
    title: String(title),
    excerpt: String(body).slice(0, 160),
    body: String(body),
    tags: tags.map(String),
    author: String(author ?? "guest_writer"),
  });

  return NextResponse.json(post, { status: 201 });
}
