import Link from "next/link";
import TopNavbar from "@/components/TopNavbar";
import { ArrowRight, Sparkles, Shield, Users, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Pivot | Discover Better Content",
};

const stats = [
  { label: "Active Creators", value: "50K+" },
  { label: "Content Pieces", value: "1M+" },
  { label: "Free Access", value: "100%" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm lg:p-14">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl space-y-6">
                  <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-slate-600">
                    <Sparkles className="h-4 w-4 text-slate-500" />
                    Featured insight
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                    The Best Website Layouts for User Experience and Conversions
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-slate-600">
                    Build elegant, readable pages with layout patterns that increase attention, clarity, and conversion across mobile, tablet, and desktop.
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link
                      href="/feed"
                      className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
                    >
                      Explore Feed
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                    <Link
                      href="/write"
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-950 transition hover:border-slate-300"
                    >
                      Write your story
                    </Link>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-lg sm:p-10">
                  <div className="flex items-center gap-3 rounded-3xl bg-white/10 p-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Community</p>
                      <p className="mt-2 text-xl font-semibold">Designers + Creators</p>
                    </div>
                  </div>
                  <div className="mt-8 space-y-5">
                    <div className="flex items-start gap-4 rounded-3xl bg-white/10 p-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-200">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Reliable</p>
                        <p className="mt-1 text-base text-white">Thoughtful structures, no clutter.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-3xl bg-white/10 p-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Effective</p>
                        <p className="mt-1 text-base text-white">Layouts that organize ideas clearly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-slate-50 p-6 text-center">
                    <p className="text-3xl font-bold text-slate-950">{stat.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Featured</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950">Why layout still matters in 2026</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  A strong page structure improves scanability, conversion clarity, and user trust across every screen size.
                </p>
              </article>
              <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Insight</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950">Designing for attention, not just clicks</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Use whitespace, strong hierarchy, and clean content blocks to guide readers through your story.
                </p>
              </article>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Trusted by</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                    <span className="rounded-2xl bg-slate-100 px-3 py-2">Crazy Egg</span>
                    <span className="rounded-2xl bg-slate-100 px-3 py-2">Blog</span>
                    <span className="rounded-2xl bg-slate-100 px-3 py-2">Studio</span>
                  </div>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white">
                  P
                </div>
              </div>
              <div className="mt-8 space-y-4 text-sm text-slate-600">
                <p>
                  The homepage now includes a logo block, a trusted-by row, and feature cards for a modern product/blog landing page.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Start today</p>
              <h3 className="mt-4 text-2xl font-semibold">Free 30-day trial</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Build your content roadmap and launch better pages faster with the tools you already trust.
              </p>
              <Link
                href="/register"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Get started
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
