import Link from "next/link";
import TopNavbar from "../../components/TopNavbar";
import { getMockPosts } from "@/lib/mockPosts";
import FeedWithEditor from "@/components/FeedWithEditor";

export const metadata = {
  title: "Feed - Pivot",
};

export default async function FeedPage() {
  const posts = await getMockPosts();

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavbar />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 xl:grid-cols-[280px_1fr]">
          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Navigation</p>
                <h2 className="text-2xl font-semibold text-slate-950">Explore the feed</h2>
                <p className="text-sm leading-6 text-slate-600">
                  Access the most important destinations quickly and stay anchored while browsing.
                </p>
              </div>
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  Home
                </Link>
                <Link
                  href="/explore"
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  Trending
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  Profile
                </Link>
              </nav>
              <Link
                href="/write"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Create Post
              </Link>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Your feed</p>
                  <h1 className="mt-3 text-3xl font-semibold text-slate-950">
                    Stories worth reading today
                  </h1>
                </div>
                <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  Updated moments ago
                </div>
              </div>
            </div>

            <FeedWithEditor initialPosts={posts} />
          </section>
        </div>
      </main>
    </div>
  );
}
