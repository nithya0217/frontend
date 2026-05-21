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

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[320px_1fr_280px]">
          <aside className="hidden xl:block">
            <div className="sticky top-28 space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Featured</p>
              <h2 className="text-2xl font-semibold text-slate-950">Top reads</h2>
              <p className="text-sm leading-6 text-slate-600">
                Browse curated highlights and trends picked by the editorial team.
              </p>
              <div className="mt-6 space-y-4 rounded-[1.75rem] bg-slate-100 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">Why layout matters</p>
                <p className="text-sm leading-6 text-slate-600">
                  Better page structure increases conversions, time on site, and trust.
                </p>
              </div>
            </div>
          </aside>

          <section className="space-y-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Blog</p>
                  <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                    The Best Website Layouts for User Experience and Conversions
                  </h1>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                    Explore clean, conversion-focused page structures designed to help users scan quickly and engage more deeply.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6 text-center shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Try now</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">Free 30-Day Trial</p>
                  <button className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Start Free Trial
                  </button>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
                <div className="space-y-5">
                  <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-slate-200" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Rob Wells</p>
                        <p className="text-sm text-slate-500">May 19, 2022</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      Disclosure: Our content is reader-supported, which means we earn commissions from links on Crazy Egg. Commissions do not affect our editorial evaluations or opinions.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-[2rem] bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1200&q=80&auto=format&fit=crop"
                      alt="Content layout"
                      className="h-80 w-full object-cover"
                    />
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-950">Why this layout works</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    A clear hierarchy, generous spacing, and a strong visual anchor keep attention on the story while making the page feel calm and premium.
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    <li className="rounded-2xl bg-slate-50 p-4">Clear headings and whitespace</li>
                    <li className="rounded-2xl bg-slate-50 p-4">Balanced left/right content blocks</li>
                    <li className="rounded-2xl bg-slate-50 p-4">Readable type sizes for long-form reading</li>
                  </ul>
                </div>
              </div>
            </div>

            <FeedWithEditor initialPosts={posts} />
          </section>

          <aside className="hidden xl:block">
            <div className="sticky top-28 space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">Recommended</h3>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="rounded-2xl bg-slate-50 p-4">Performance-first design systems</li>
                <li className="rounded-2xl bg-slate-50 p-4">Headlines that convert readers</li>
                <li className="rounded-2xl bg-slate-50 p-4">Minimal layouts for modern brands</li>
              </ul>
              <div className="rounded-3xl bg-slate-50 p-5 text-sm text-slate-600">
                Use this space to feature tutorials, case studies, or product updates that complement the main story.
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
